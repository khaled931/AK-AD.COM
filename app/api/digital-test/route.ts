import { NextResponse } from "next/server";
import { saveTestResult, type DigitalTestResult } from "@/lib/storage";

export async function POST(request: Request) {
  const body = await request.json();
  const score = Number(body.score);

  if (!Number.isFinite(score) || score < 0 || score > 10) {
    return NextResponse.json({ error: "Invalid score" }, { status: 400 });
  }

  const result: DigitalTestResult = {
    id: crypto.randomUUID(),
    score,
    resultAr: String(body.resultAr || ""),
    resultEn: String(body.resultEn || ""),
    answers: Array.isArray(body.answers) ? body.answers.map(Number).slice(0, 5) : [],
    createdAt: new Date().toISOString()
  };

  await saveTestResult(result);
  return NextResponse.json({ ok: true });
}