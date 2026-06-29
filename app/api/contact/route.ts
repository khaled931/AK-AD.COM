import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { saveMessage, type ContactMessage } from "@/lib/storage";

function clean(value: unknown) {
  return String(value || "").trim().slice(0, 1000);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = ["name", "company", "phone", "email", "service", "budget"];
    for (const field of required) {
      if (!clean(body[field])) {
        return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
      }
    }

    const message: ContactMessage = {
      id: crypto.randomUUID(),
      name: clean(body.name),
      company: clean(body.company),
      phone: clean(body.phone),
      email: clean(body.email),
      service: clean(body.service),
      budget: clean(body.budget),
      message: clean(body.message),
      status: "new",
      createdAt: new Date().toISOString()
    };

    await saveMessage(message);
    await sendContactEmail(message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to submit contact request"
      },
      { status: 500 }
    );
  }
}