import { DigitalTest } from "@/components/digital-test";
import { faqs, packages, sectors, services } from "@/lib/content";

const problems = [
  ["لديك حسابات سوشال ميديا لكنها لا تجلب عملاء؟", "You have social media accounts, but they do not bring customers?"],
  ["تنشر محتوى لكن بدون خطة واضحة؟", "You publish content without a clear plan?"],
  ["لا تملك موقعًا أو هوية رقمية احترافية؟", "You do not have a professional website or digital identity?"],
  ["الإعلانات تستهلك الميزانية بدون نتائج واضحة؟", "Ads consume budget without clear results?"],
  ["لا تعرف كيف تظهر شركتك بشكل احترافي أونلاين؟", "You are not sure how to present your business professionally online?"]
];

const beforeAfter = [
  ["صفحة إنستغرام غير منظمة", "صفحة احترافية بهوية واضحة", "Unorganized Instagram page", "Professional page with a clear identity"],
  ["منشورات عشوائية", "محتوى منظم بخطة شهرية", "Random posts", "Organized content with a monthly plan"],
  ["إعلانات بدون نتائج", "حملات مبنية على تحليل واستهداف", "Ads without results", "Campaigns based on analysis and targeting"],
  ["شركة غير ظاهرة على Google", "ظهور محلي أفضل وطرق تواصل واضحة", "Business not visible on Google", "Better local visibility and clear contact channels"]
];

const steps = [
  ["تحليل وضعك الحالي", "Audit your current position"],
  ["بناء خطة رقمية مناسبة", "Build a suitable digital plan"],
  ["تجهيز الهوية والمحتوى", "Prepare identity and content"],
  ["إطلاق الحملات والنشر", "Launch campaigns and publishing"],
  ["قياس النتائج والتحسين المستمر", "Measure and improve continuously"]
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-wrap">
          <div>
            <p className="eyebrow">AK-AD media · Digital Presence. Real Growth.</p>
            <h1>
              <span data-lang="ar">نحوّل حضورك الرقمي إلى <span className="gold">عملاء حقيقيين</span></span>
              <span data-lang="en">We turn your digital presence into <span className="gold">real customers</span></span>
            </h1>
            <p className="lead" data-lang="ar">نساعد الشركات على بناء هوية رقمية احترافية، إدارة حسابات السوشال ميديا، إنشاء المحتوى، تشغيل الحملات الإعلانية، وتحسين ظهورها أونلاين.</p>
            <p className="lead" data-lang="en">We help businesses build a professional digital identity, manage social media, create content, run ad campaigns, and improve online visibility.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact"><span data-lang="ar">احصل على تقييم مجاني</span><span data-lang="en">Get a free audit</span></a>
              <a className="btn btn-secondary" href="https://wa.me/4740381834"><span data-lang="ar">احجز استشارة مجانية</span><span data-lang="en">Book a free consultation</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="AK-AD media visual">
            <div className="float-card float-1"><strong>Content</strong><p>Ideas, scripts, posts</p></div>
            <div className="float-card float-2"><strong>Ads</strong><p>Meta & Google growth</p></div>
            <div className="float-card float-3"><strong>Branding</strong><p>Identity that sells</p></div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid grid-2">
          <div>
            <p className="eyebrow"><span data-lang="ar">المشكلة</span><span data-lang="en">The problem</span></p>
            <h2><span data-lang="ar">الشكل الجميل وحده لا يكفي.</span><span data-lang="en">Good visuals alone are not enough.</span></h2>
            <div className="problem-list">
              {problems.map(([ar, en]) => <div className="problem-item" key={ar}><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></div>)}
            </div>
          </div>
          <div className="card">
            <p className="eyebrow"><span data-lang="ar">الحل</span><span data-lang="en">The solution</span></p>
            <h2><span data-lang="ar">نحن لا نصمم منشورات فقط.</span><span data-lang="en">We do not only design posts.</span></h2>
            <p className="muted" data-lang="ar">نحن نبني نظامًا رقميًا متكاملًا يساعد شركتك على الظهور، جذب العملاء، وبناء الثقة.</p>
            <p className="muted" data-lang="en">We build a complete digital system that helps your business appear professionally, attract customers, and build trust.</p>
            <p className="lead gold" data-lang="ar">نحن نبني حضورًا رقميًا يساعدك على البيع والنمو.</p>
            <p className="lead gold" data-lang="en">We build a digital presence that helps you sell and grow.</p>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <p className="eyebrow"><span data-lang="ar">خدماتنا</span><span data-lang="en">Our services</span></p>
          <h2><span data-lang="ar">كل ما تحتاجه شركتك للظهور والنمو أونلاين</span><span data-lang="en">Everything your business needs to appear and grow online</span></h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {services.slice(0, 6).map((service) => (
              <article className="card" key={service.ar}>
                <div className="icon">{service.icon}</div>
                <h3><span data-lang="ar">{service.ar}</span><span data-lang="en">{service.en}</span></h3>
                <p className="muted"><span data-lang="ar">{service.arText}</span><span data-lang="en">{service.enText}</span></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid grid-2">
          <div className="card featured">
            <span className="badge"><span data-lang="ar">خدمة مميزة</span><span data-lang="en">Featured service</span></span>
            <h2 style={{ marginTop: 18 }}><span data-lang="ar">إطلاق الوجود الرقمي من الصفر</span><span data-lang="en">Launch your digital presence from zero</span></h2>
            <p className="muted" data-lang="ar">خدمة متكاملة للشركات الجديدة أو المشاريع التي تريد بداية احترافية أونلاين.</p>
            <p className="muted" data-lang="en">A complete service for new businesses that want a professional online start.</p>
            <ul className="list">
              <li><span data-lang="ar">تصميم هوية بصرية</span><span data-lang="en">Visual identity</span></li>
              <li><span data-lang="ar">إنشاء صفحات السوشال ميديا</span><span data-lang="en">Social media setup</span></li>
              <li><span data-lang="ar">إنشاء موقع تعريفي بسيط</span><span data-lang="en">Simple business website</span></li>
              <li><span data-lang="ar">إعداد Google Business</span><span data-lang="en">Google Business setup</span></li>
              <li><span data-lang="ar">تصميم محتوى أول شهر</span><span data-lang="en">First month content</span></li>
            </ul>
          </div>
          <DigitalTest />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow"><span data-lang="ar">الباقات</span><span data-lang="en">Packages</span></p>
          <h2><span data-lang="ar">اختر مستوى العمل المناسب لمرحلتك</span><span data-lang="en">Choose the right level for your stage</span></h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {packages.map((pkg) => (
              <article className={`card package-card ${pkg.featured ? "featured" : ""}`} key={pkg.ar}>
                {pkg.featured && <span className="badge"><span data-lang="ar">الأكثر طلبًا</span><span data-lang="en">Most requested</span></span>}
                <h3 style={{ marginTop: pkg.featured ? 16 : 0 }}>{pkg.ar}</h3>
                <p className="muted"><span data-lang="ar">{pkg.audienceAr}</span><span data-lang="en">{pkg.audienceEn}</span></p>
                <ul className="list">{pkg.itemsAr.map((item, index) => <li key={item}><span data-lang="ar">{item}</span><span data-lang="en">{pkg.itemsEn[index]}</span></li>)}</ul>
                <a className="btn btn-primary" href="/contact" style={{ marginTop: 24, width: "100%" }}><span data-lang="ar">اطلب هذه الباقة</span><span data-lang="en">Request this package</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <p className="eyebrow"><span data-lang="ar">القطاعات</span><span data-lang="en">Industries</span></p>
          <h2><span data-lang="ar">حلول مناسبة لواقع السوق السوري</span><span data-lang="en">Solutions designed for the Syrian market</span></h2>
          <div className="grid grid-4" style={{ marginTop: 26 }}>{sectors.map(([ar, en]) => <div className="card" key={ar}><strong><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></strong></div>)}</div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid grid-2">
          <div>
            <p className="eyebrow"><span data-lang="ar">قبل وبعد</span><span data-lang="en">Before & after</span></p>
            <h2><span data-lang="ar">القيمة تظهر عندما يصبح العمل منظمًا.</span><span data-lang="en">Value appears when the work becomes organized.</span></h2>
          </div>
          <div className="grid">
            {beforeAfter.map(([beforeAr, afterAr, beforeEn, afterEn]) => (
              <div className="before-after" key={beforeAr}>
                <div><strong><span data-lang="ar">قبل</span><span data-lang="en">Before</span></strong><p className="muted"><span data-lang="ar">{beforeAr}</span><span data-lang="en">{beforeEn}</span></p></div>
                <div><strong><span data-lang="ar">بعد</span><span data-lang="en">After</span></strong><p className="muted"><span data-lang="ar">{afterAr}</span><span data-lang="en">{afterEn}</span></p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container grid grid-2">
          <div className="card steps">
            <p className="eyebrow"><span data-lang="ar">خطوات العمل</span><span data-lang="en">Work process</span></p>
            <div className="grid">{steps.map(([ar, en]) => <div className="step" key={ar}><strong><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></strong></div>)}</div>
          </div>
          <div className="card faq">
            <p className="eyebrow">FAQ</p>
            <h2><span data-lang="ar">أسئلة شائعة</span><span data-lang="en">Frequently asked questions</span></h2>
            <div className="grid">{faqs.slice(0, 4).map(([ar, en]) => <details key={ar}><summary><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></summary><p><span data-lang="ar">نعم، يمكن تخصيص الحل حسب وضع الشركة وميزانيتها ومرحلة نموها.</span><span data-lang="en">Yes, the solution can be customized based on your business stage, budget, and growth needs.</span></p></details>)}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ textAlign: "center" }}>
          <h2><span data-lang="ar">جاهز لتحويل حضورك الرقمي إلى عملاء حقيقيين؟</span><span data-lang="en">Ready to turn your digital presence into real customers?</span></h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="/contact"><span data-lang="ar">احصل على تقييم مجاني</span><span data-lang="en">Get a free audit</span></a>
            <a className="btn btn-secondary" href="https://wa.me/4740381834"><span data-lang="ar">تواصل عبر واتساب</span><span data-lang="en">Contact on WhatsApp</span></a>
          </div>
        </div>
      </section>
    </>
  );
}