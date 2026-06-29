import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/auth";
import { listTestResults } from "@/lib/storage";

export async function GET() {
  if (!isAdminRequest()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results = await listTestResults();
  return NextResponse.json({ results });
}