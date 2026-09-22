# Phase 5 - Contact (Client-approved copy)

Source: `Feedbacks/IVL _ WEBSITE content.docx`, section "PHASE CONTACT".

Rule for this file: lines inside `text` fences must appear verbatim. Arrows (`→`) are omitted
from the strings; the site draws its own.

## 1. Contact - page head (`/contact`)

```text
LET’S START WITH IVL BY A CONVERSATION
Every legal matter has its own context and objectives. If you would like to discuss a transaction, dispute or specific legal issue, please contact our lawyer directly or submit your enquiry through the form below.
The initial information will help us understand the nature of your matter before speaking with you.
NGUYEN HA THANH VU
Managing Lawyer
VIEW LAWYER PROFILE
```

The heading uses a curly apostrophe in `LET’S`, as supplied.

| CTA | Destination |
|---|---|
| VIEW LAWYER PROFILE | `/people` (the per-lawyer route does not exist) |

| Placeholder | Where |
|---|---|
| `[Telephone]` | labelled `Direct:` |
| `[Professional Email]` | labelled `Email:` |
| `[LinkedIn Profile]` | labelled `LinkedIn:` |

```text
Direct:
Email:
LinkedIn:
```

## 2. Contact - enquiry form

The Client supplied the whole form, including its consent microcopy. Build the fields exactly
as listed. `ivl-legal-guardrails` rules 7 and 9 apply: do not add fields, do not add reassurance
text of your own, and do not wire the form to any third party.

```text
HOW CAN WE ASSIST?
Please provide some initial information below. IVL will review your enquiry and contact you to discuss the appropriate next step.
CONTACT DETAILS
Full Name
Email
Telephone
Company / Organisation
YOUR ENQUIRY
Area of Assistance
Brief description of your matter
BEFORE YOU SUBMIT
Submitting this form or otherwise contacting IVL does not by itself create a lawyer-client relationship.
IVL can only accept and act on a matter after completing the necessary intake process, including assessing whether we are able to accept the matter, conducting an appropriate conflict check where required, and agreeing the scope of our engagement with the client.
You should therefore not submit original documents or particularly sensitive information through this form before IVL confirms that the matter has been accepted.
At this stage, please provide only a general description of your matter. You should not submit confidential or sensitive documents or information through this initial enquiry form.
SUBMIT ENQUIRY
```

The two paragraphs under "BEFORE YOU SUBMIT" are legal microcopy. They keep the Client's own
lower-case "lawyer-client relationship" and "with the client", because changing the case of
"client" inside a sentence about the lawyer-client relationship would alter a defined legal
term. This is the one place where the user's capitalisation instruction is not applied; it is
reported.

Required fields, marked `*` by the Client: Full Name, Email, Telephone, Area of Assistance,
Brief description of your matter. "Company / Organisation" is optional.

"Area of Assistance" is a dropdown with these options, in this order:

```text
Dispute Resolution
Arbitration
Enforcement & Asset Recovery
Corporate & Commercial
M&A & Investment
Real Estate & Construction
Employment
Private Clients
Other
```

The form has no destination: no endpoint, inbox or third-party service was supplied. Render it
without a submit target and leave a `TODO(client)`. Do not invent one.
