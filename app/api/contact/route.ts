import { NextResponse } from "next/server";
import { saveMessage, type ContactMessage } from "@/lib/storage";

function clean(value: unknown) {
  return String(value || "").trim().slice(0, 1000);
}

export async function POST(request: Request) {
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
  return NextResponse.json({ ok: true });
}