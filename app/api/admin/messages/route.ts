import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/auth";
import { listMessages } from "@/lib/storage";

export async function GET() {
  if (!isAdminRequest()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await listMessages();
  return NextResponse.json({ messages });
}