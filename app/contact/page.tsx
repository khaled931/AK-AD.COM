import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "ابدأ بتحسين حضورك الرقمي اليوم عبر نموذج التواصل أو واتساب أو البريد الإلكتروني."
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1><span data-lang="ar">ابدأ بتحسين حضورك الرقمي اليوم</span><span data-lang="en">Start improving your digital presence today</span></h1>
          <p className="lead" data-lang="ar">أرسل لنا معلومات شركتك والخدمة التي تحتاجها، وسنبدأ بتقييم سريع لما يمكن تحسينه.</p>
          <p className="lead" data-lang="en">Send us your business details and the service you need, and we will begin with a quick improvement audit.</p>

          <div className="card" style={{ marginTop: 28 }}>
            <h2><span data-lang="ar">تواصل مباشر</span><span data-lang="en">Direct contact</span></h2>
            <ul className="list">
              <li><a href="https://wa.me/4740381834">WhatsApp: +47 403 81 834</a></li>
              <li><a href="mailto:contact@ak-ad.com">contact@ak-ad.com</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61589601436614">Facebook</a></li>
              <li><a href="https://www.instagram.com/akad.media0?igsh=eWx1dGhqY3oyenhs">Instagram</a></li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}