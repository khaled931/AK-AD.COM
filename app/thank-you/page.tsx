import type { Metadata } from "next";
import { AutoRedirect } from "@/components/auto-redirect";

export const metadata: Metadata = {
  title: "تم إرسال الطلب",
  description: "شكراً لك، لقد تم إرسال طلبك بنجاح وسنتواصل معك قريباً."
};

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <div className="card" style={{ textAlign: "center" }}>
          <p className="eyebrow">AK-AD media</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            <span data-lang="ar">شكراً لك</span>
            <span data-lang="en">Thank you</span>
          </h1>
          <p className="lead" style={{ marginInline: "auto" }}>
            <span data-lang="ar">لقد تم إرسال طلبك بنجاح، وسوف يتم التواصل معك قريباً.</span>
            <span data-lang="en">Your request has been sent successfully. We will contact you soon.</span>
          </p>
          <AutoRedirect to="/" seconds={6} />
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="/">
              <span data-lang="ar">العودة إلى الرئيسية الآن</span>
              <span data-lang="en">Back to home now</span>
            </a>
            <a className="btn btn-secondary" href="https://wa.me/4740381834">
              <span data-lang="ar">تواصل عبر واتساب</span>
              <span data-lang="en">Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
