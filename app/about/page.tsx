import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description: "AK-AD media منصة تسويق إلكتروني تساعد الشركات السورية والمشاريع الصغيرة والمتوسطة على بناء حضور رقمي احترافي."
};

const values = [
  ["الثقة", "Trust"],
  ["النمو", "Growth"],
  ["الاحترافية", "Professionalism"],
  ["التأثير", "Impact"],
  ["الابتكار", "Innovation"],
  ["الشراكة", "Partnership"]
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">About AK-AD media</p>
        <h1><span data-lang="ar">نحن AK-AD media</span><span data-lang="en">We are AK-AD media</span></h1>
        <p className="lead" data-lang="ar">AK-AD media منصة تسويق إلكتروني تساعد الشركات السورية والمشاريع الصغيرة والمتوسطة على بناء حضور رقمي احترافي وتحويل النشاط الرقمي إلى نمو حقيقي.</p>
        <p className="lead" data-lang="en">AK-AD media is a digital marketing platform that helps Syrian small and medium businesses build a professional digital presence and turn digital activity into real growth.</p>

        <div className="grid grid-2" style={{ marginTop: 40 }}>
          <article className="card"><h2><span data-lang="ar">المهمة</span><span data-lang="en">Mission</span></h2><p className="muted"><span data-lang="ar">مساعدة الشركات على دخول السوق الرقمي بطريقة عملية، واضحة، وقابلة للتنفيذ.</span><span data-lang="en">Help businesses enter the digital market with practical, clear, and executable solutions.</span></p></article>
          <article className="card"><h2><span data-lang="ar">الرؤية</span><span data-lang="en">Vision</span></h2><p className="muted"><span data-lang="ar">أن نصبح شريكًا رقميًا موثوقًا للشركات السورية التي تريد الظهور والنمو.</span><span data-lang="en">Become a trusted digital partner for Syrian businesses that want to appear and grow.</span></p></article>
          <article className="card"><h2><span data-lang="ar">لماذا سوريا؟</span><span data-lang="en">Why Syria?</span></h2><p className="muted"><span data-lang="ar">لأن السوق يحتاج حلولًا بسيطة، واضحة، وواقعية تناسب أصحاب الأعمال والميزانيات المختلفة.</span><span data-lang="en">Because the market needs simple, clear, and realistic solutions for different business sizes and budgets.</span></p></article>
          <article className="card"><h2><span data-lang="ar">كيف نعمل؟</span><span data-lang="en">How we work</span></h2><p className="muted"><span data-lang="ar">تحليل، خطة، تنفيذ، قياس، ثم تحسين مستمر بناءً على النتائج.</span><span data-lang="en">Audit, plan, execute, measure, then improve continuously based on results.</span></p></article>
        </div>

        <div className="section-sm">
          <h2><span data-lang="ar">قيمنا</span><span data-lang="en">Our values</span></h2>
          <div className="grid grid-3">{values.map(([ar, en]) => <div className="card" key={ar}><strong><span data-lang="ar">{ar}</span><span data-lang="en">{en}</span></strong></div>)}</div>
        </div>
      </div>
    </section>
  );
}