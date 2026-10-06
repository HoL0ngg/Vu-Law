import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 5000;
const MAX_NAME_LENGTH = 200;
const MAX_EMAIL_LENGTH = 320;

function getField(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return email.length <= MAX_EMAIL_LENGTH && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const scriptUrl = process.env.VITE_GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json({ error: "Contact endpoint is not configured." }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const submission = {
    "full-name": getField(formData, "full-name", MAX_NAME_LENGTH),
    email: getField(formData, "email", MAX_EMAIL_LENGTH),
    telephone: getField(formData, "telephone", MAX_NAME_LENGTH),
    company: getField(formData, "company", MAX_NAME_LENGTH),
    area: getField(formData, "area", MAX_NAME_LENGTH),
    description: getField(formData, "description", MAX_FIELD_LENGTH),
  };

  if (
    !submission["full-name"] ||
    !isValidEmail(submission.email) ||
    !submission.telephone ||
    !submission.area ||
    !submission.description
  ) {
    return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
  }

  const payload = new URLSearchParams(submission);
  let response: Response;
  try {
    response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: payload.toString(),
      redirect: "follow",
    });
  } catch {
    return NextResponse.json({ error: "Unable to reach the contact service." }, { status: 502 });
  }

  if (!response.ok) {
    return NextResponse.json({ error: "The contact service rejected the submission." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
