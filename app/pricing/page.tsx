import type { Metadata } from "next";
import { packages } from "@/lib/content";

export const metadata: Metadata = {
  title: "الأسعار والباقات",
  description: "استعرض باقات AK-AD media واختر مستوى الخدمة الأنسب لمرحلة شركتك واحتياجاتها الرقمية."
};

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="pricing-intro">
          <p className="eyebrow">
            <span data-lang="ar">الأسعار والباقات</span>
            <span data-lang="en">Pricing & packages</span>
          </p>
          <h1>
            <span data-lang="ar">اختر مستوى العمل المناسب لمرحلتك</span>
            <span data-lang="en">Choose the right level for your stage</span>
          </h1>
          <p className="lead" data-lang="ar">
            اختر الباقة الأقرب لاحتياجاتك، ويمكن تخصيص نطاق العمل بعد التقييم الأولي.
          </p>
          <p className="lead" data-lang="en">
            Choose the package closest to your needs. The scope can be tailored after the initial audit.
          </p>
        </div>

        <div className="grid grid-3" style={{ marginTop: 32 }}>
          {packages.map((pkg) => (
            <article className={`card package-card ${pkg.featured ? "featured" : ""}`} key={pkg.ar}>
              {pkg.featured && (
                <span className="badge">
                  <span data-lang="ar">الأكثر طلبًا</span>
                  <span data-lang="en">Most requested</span>
                </span>
              )}
              <h2 style={{ marginTop: pkg.featured ? 16 : 0, fontSize: "1.55rem" }}>
                <span data-lang="ar">{pkg.ar}</span>
                <span data-lang="en">{pkg.en}</span>
              </h2>
              <p className="muted">
                <span data-lang="ar">{pkg.audienceAr}</span>
                <span data-lang="en">{pkg.audienceEn}</span>
              </p>
              <ul className="list">
                {pkg.itemsAr.map((item, index) => (
                  <li key={item}>
                    <span data-lang="ar">{item}</span>
                    <span data-lang="en">{pkg.itemsEn[index]}</span>
                  </li>
                ))}
              </ul>
              <a className="btn btn-primary" href="/contact" style={{ marginTop: 24, width: "100%" }}>
                <span data-lang="ar">اطلب هذه الباقة</span>
                <span data-lang="en">Request this package</span>
              </a>
            </article>
          ))}
        </div>

        <div className="pricing-note card">
          <p className="muted" style={{ marginBottom: 16 }}>
            <span data-lang="ar">تحتاج نطاقًا مختلفًا؟ يمكننا تخصيص الباقة حسب الخدمة والميزانية ومرحلة النمو.</span>
            <span data-lang="en">Need a different scope? We can tailor a package to your service needs, budget, and growth stage.</span>
          </p>
          <a className="btn btn-secondary" href="/contact">
            <span data-lang="ar">اطلب عرضًا مخصصًا</span>
            <span data-lang="en">Request a custom offer</span>
          </a>
        </div>
      </div>
    </section>
  );
}
