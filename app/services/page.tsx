import type { Metadata } from "next";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "خدمات التسويق الإلكتروني",
  description: "خدمات AK-AD media في إدارة السوشال ميديا، الهوية البصرية، الإعلانات، المحتوى، المواقع، Google Business Profile، والتحليل."
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">AK-AD media</p>
        <h1>
          <span data-lang="ar">خدمات تسويق إلكتروني تساعد شركتك على الظهور والنمو</span>
          <span data-lang="en">Digital marketing services that help your business appear and grow</span>
        </h1>
        <p className="lead" data-lang="ar">كل خدمة مصممة لتخدم هدفًا عمليًا: ظهور أوضح، ثقة أكبر، عملاء أكثر، وتحسين مستمر في الأداء.</p>
        <p className="lead" data-lang="en">Each service is designed around a practical goal: better visibility, stronger trust, more customers, and continuous improvement.</p>

        <div className="grid grid-2" style={{ marginTop: 36 }}>
          {services.map((service) => (
            <article className="card" key={service.ar}>
              <div className="icon">{service.icon}</div>
              <h2 style={{ fontSize: "1.55rem" }}><span data-lang="ar">{service.ar}</span><span data-lang="en">{service.en}</span></h2>
              <p className="muted"><span data-lang="ar">{service.arText}</span><span data-lang="en">{service.enText}</span></p>
              <ul className="list">
                <li><span data-lang="ar">مناسبة للشركات التي تريد تنفيذًا عمليًا واضحًا.</span><span data-lang="en">Suitable for businesses that need clear execution.</span></li>
                <li><span data-lang="ar">تشمل تحليلًا أوليًا وتوصيات قابلة للتنفيذ.</span><span data-lang="en">Includes an initial audit and actionable recommendations.</span></li>
                <li><span data-lang="ar">مرتبطة بنتائج قابلة للقياس والتحسين.</span><span data-lang="en">Connected to measurable and improvable outcomes.</span></li>
              </ul>
              <a className="btn btn-primary" href="/contact" style={{ marginTop: 22 }}><span data-lang="ar">اطلب هذه الخدمة</span><span data-lang="en">Request this service</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}