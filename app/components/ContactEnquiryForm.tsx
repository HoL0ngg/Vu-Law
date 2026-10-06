"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import type { Dictionary } from "../i18n/config";

const stagger = (index: number) => ({ "--d": index }) as CSSProperties;

type ContactEnquiryFormProps = {
  form: Dictionary["contactPage"]["form"];
};

export default function ContactEnquiryForm({ form }: ContactEnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const payload = new URLSearchParams();
      new FormData(event.currentTarget).forEach((value, key) => {
        if (typeof value === "string") payload.append(key, value);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) throw new Error("Contact submission failed");
      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      className="enquiry-form reveal"
      style={stagger(2)}
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <fieldset disabled={isSubmitting}>
        <legend>{form.detailsTitle}</legend>
        <label>
          <span>{form.fullName}<b aria-hidden="true">*</b></span>
          <input type="text" name="full-name" required autoComplete="name" />
        </label>
        <label>
          <span>{form.email}<b aria-hidden="true">*</b></span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          <span>{form.telephone}<b aria-hidden="true">*</b></span>
          <input type="tel" name="telephone" required autoComplete="tel" />
        </label>
        <label>
          <span>{form.company}</span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
      </fieldset>

      <fieldset disabled={isSubmitting}>
        <legend>{form.enquiryTitle}</legend>
        <label>
          <span>{form.area}<b aria-hidden="true">*</b></span>
          <select name="area" required defaultValue="">
            <option value="" disabled />
            {form.areaOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label className="enquiry-description">
          <span>{form.description}<b aria-hidden="true">*</b></span>
          <textarea name="description" rows={6} required />
        </label>
      </fieldset>

      <div className="enquiry-notice">
        <h3>{form.noticeTitle}</h3>
        {form.notice.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <button className="enquiry-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? form.submitting : form.submit}<span aria-hidden="true">→</span>
      </button>

      {status === "success" && <p role="status">{form.success}</p>}
      {status === "error" && <p role="alert">{form.error}</p>}
    </form>
  );
}
