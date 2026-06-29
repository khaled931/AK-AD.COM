"use client";

import { FormEvent, useState } from "react";

const services = [
  "إدارة السوشال ميديا",
  "الهوية البصرية",
  "الإعلانات الممولة",
  "صناعة المحتوى",
  "موقع إلكتروني",
  "Google Business Profile",
  "باقة إطلاق الوجود الرقمي",
  "استشارة تسويقية",
  "أخرى"
];

const budgets = [
  "أقل من 100 دولار",
  "100 - 300 دولار",
  "300 - 700 دولار",
  "أكثر من 700 دولار",
  "غير محدد بعد"
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form card" onSubmit={onSubmit}>
      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">الاسم</span>
            <span data-lang="en">Name</span>
          </label>
          <input className="input" name="name" required />
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">اسم الشركة</span>
            <span data-lang="en">Company name</span>
          </label>
          <input className="input" name="company" required />
        </div>
      </div>

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">رقم الهاتف</span>
            <span data-lang="en">Phone</span>
          </label>
          <input className="input" name="phone" required />
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">البريد الإلكتروني</span>
            <span data-lang="en">Email</span>
          </label>
          <input className="input" name="email" type="email" required />
        </div>
      </div>

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">نوع الخدمة المطلوبة</span>
            <span data-lang="en">Requested service</span>
          </label>
          <select className="select" name="service" required>
            <option value="">—</option>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">الميزانية التقريبية</span>
            <span data-lang="en">Estimated budget</span>
          </label>
          <select className="select" name="budget" required>
            <option value="">—</option>
            {budgets.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label>
          <span data-lang="ar">رسالة إضافية</span>
          <span data-lang="en">Additional message</span>
        </label>
        <textarea className="textarea" name="message" />
      </div>

      <button className="btn btn-primary" disabled={status === "loading"} type="submit">
        <span data-lang="ar">{status === "loading" ? "جارٍ الإرسال..." : "إرسال الطلب"}</span>
        <span data-lang="en">{status === "loading" ? "Sending..." : "Send request"}</span>
      </button>

      {status === "success" && (
        <p className="notice">
          <span data-lang="ar">تم إرسال الطلب بنجاح. سنتواصل معك قريبًا.</span>
          <span data-lang="en">Your request was sent successfully. We will contact you soon.</span>
        </p>
      )}
      {status === "error" && (
        <p className="notice">
          <span data-lang="ar">حدث خطأ أثناء الإرسال. يمكنك التواصل معنا مباشرة عبر واتساب.</span>
          <span data-lang="en">Something went wrong. You can contact us directly on WhatsApp.</span>
        </p>
      )}
    </form>
  );
}