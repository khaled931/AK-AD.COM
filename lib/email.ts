import { Resend } from "resend";
import type { ContactMessage } from "@/lib/storage";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function emailHtml(message: ContactMessage) {
  const rows = [
    ["الاسم", message.name],
    ["اسم الشركة", message.company],
    ["رقم الهاتف", message.phone],
    ["البريد الإلكتروني", message.email],
    ["نوع الخدمة المطلوبة", message.service],
    ["الميزانية التقريبية", message.budget],
    ["رسالة إضافية", message.message || "—"],
    ["تاريخ الإرسال", new Date(message.createdAt).toLocaleString("ar")]
  ];

  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; background:#0B0F19; padding:24px; color:#F5F3EE;">
      <div style="max-width:680px; margin:auto; background:#2A2F3A; border:1px solid rgba(212,180,79,.35); border-radius:18px; padding:24px;">
        <h1 style="color:#D4B44F; margin-top:0;">طلب تواصل جديد من موقع AK-AD media</h1>
        <p style="line-height:1.8;">وصل طلب جديد من نموذج التواصل في الموقع. التفاصيل أدناه:</p>
        <table style="width:100%; border-collapse:collapse; margin-top:18px;">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="width:34%; padding:12px; border-bottom:1px solid rgba(212,180,79,.2); color:#D4B44F; font-weight:bold;">${escapeHtml(label)}</td>
                  <td style="padding:12px; border-bottom:1px solid rgba(212,180,79,.2);">${escapeHtml(String(value))}</td>
                </tr>`
            )
            .join("")}
        </table>
      </div>
    </div>
  `;
}

function emailText(message: ContactMessage) {
  return `طلب تواصل جديد من موقع AK-AD media

الاسم: ${message.name}
اسم الشركة: ${message.company}
رقم الهاتف: ${message.phone}
البريد الإلكتروني: ${message.email}
نوع الخدمة المطلوبة: ${message.service}
الميزانية التقريبية: ${message.budget}
رسالة إضافية: ${message.message || "—"}
تاريخ الإرسال: ${message.createdAt}`;
}

export async function sendContactEmail(message: ContactMessage) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "contact@ak-ad.com";
  const from = process.env.CONTACT_FROM_EMAIL || "AK-AD media <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to,
    replyTo: message.email,
    subject: `طلب تواصل جديد من ${message.name} - ${message.company}`,
    html: emailHtml(message),
    text: emailText(message)
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
}