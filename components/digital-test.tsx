"use client";

import { useMemo, useState } from "react";

const questions = [
  ["هل لديك موقع إلكتروني؟", "Do you have a website?"],
  ["هل تنشر محتوى بشكل منتظم؟", "Do you publish content consistently?"],
  ["هل تحصل على عملاء من السوشال ميديا؟", "Do you get customers from social media?"],
  ["هل لديك هوية بصرية واضحة؟", "Do you have a clear visual identity?"],
  ["هل تقيس نتائج الإعلانات والمحتوى؟", "Do you measure ads and content results?"]
];

const options = [
  { labelAr: "نعم", labelEn: "Yes", value: 2 },
  { labelAr: "جزئيًا", labelEn: "Partly", value: 1 },
  { labelAr: "لا", labelEn: "No", value: 0 }
];

function getResult(score: number) {
  if (score <= 3) return ["حضور رقمي ضعيف", "Weak digital presence"];
  if (score <= 7) return ["حضور رقمي متوسط", "Average digital presence"];
  return ["حضور رقمي جيد", "Good digital presence"];
}

export function DigitalTest() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [saved, setSaved] = useState(false);

  const complete = answers.every((answer) => answer >= 0);
  const score = useMemo(() => answers.reduce((sum, answer) => sum + Math.max(answer, 0), 0), [answers]);
  const result = getResult(score);

  async function submitResult() {
    setSaved(false);
    await fetch("/api/digital-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score, resultAr: result[0], resultEn: result[1], answers })
    });
    setSaved(true);
  }

  return (
    <div className="card">
      <p className="eyebrow">
        <span data-lang="ar">اختبار مجاني</span>
        <span data-lang="en">Free audit</span>
      </p>
      <h2>
        <span data-lang="ar">هل وجودك الرقمي قوي؟</span>
        <span data-lang="en">How strong is your digital presence?</span>
      </h2>
      <p className="muted">
        <span data-lang="ar">أجب عن 5 أسئلة واحصل على تقييم أولي سريع.</span>
        <span data-lang="en">Answer 5 quick questions and get an initial score.</span>
      </p>

      <div className="grid" style={{ marginTop: 24 }}>
        {questions.map(([ar, en], questionIndex) => (
          <div className="field" key={ar}>
            <label>
              <span data-lang="ar">{ar}</span>
              <span data-lang="en">{en}</span>
            </label>
            <div className="test-options">
              {options.map((option) => (
                <button
                  className={`option ${answers[questionIndex] === option.value ? "active" : ""}`}
                  key={option.labelAr}
                  onClick={() => {
                    const next = [...answers];
                    next[questionIndex] = option.value;
                    setAnswers(next);
                    setSaved(false);
                  }}
                  type="button"
                >
                  <span data-lang="ar">{option.labelAr}</span>
                  <span data-lang="en">{option.labelEn}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {complete && (
        <div className="notice" style={{ marginTop: 22 }}>
          <strong>
            <span data-lang="ar">نتيجتك: {score}/10 — {result[0]}</span>
            <span data-lang="en">Your score: {score}/10 — {result[1]}</span>
          </strong>
          <div style={{ marginTop: 14 }}>
            <button className="btn btn-primary" onClick={submitResult} type="button">
              <span data-lang="ar">احفظ النتيجة واحجز استشارة</span>
              <span data-lang="en">Save result and book a consultation</span>
            </button>
          </div>
          {saved && (
            <p className="muted" style={{ marginTop: 12 }}>
              <span data-lang="ar">تم حفظ النتيجة. يمكنك الآن التواصل معنا لتحسينها.</span>
              <span data-lang="en">Your result was saved. Contact us to improve it.</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}