import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أعمالنا",
  description: "نماذج أعمال قابلة للتعديل تعرض طريقة AK-AD media في بناء الهوية، المحتوى، الإعلانات، والمواقع."
};

const projects = [
  {
    nameAr: "عيادة أسنان دمشق",
    nameEn: "Damascus Dental Clinic",
    sectorAr: "طبي",
    sectorEn: "Medical",
    challengeAr: "حساب غير منظم ولا يجلب حجوزات.",
    challengeEn: "Unorganized account with low booking conversion.",
    solutionAr: "هوية بصرية + خطة محتوى + إعلانات.",
    solutionEn: "Visual identity + content plan + ads.",
    resultAr: "زيادة وضوح قنوات التواصل وتحسين تجربة الحجز.",
    resultEn: "Clearer contact channels and better booking journey."
  },
  {
    nameAr: "مطعم محلي",
    nameEn: "Local Restaurant",
    sectorAr: "مطاعم",
    sectorEn: "Restaurants",
    challengeAr: "محتوى عشوائي ولا توجد عروض واضحة.",
    challengeEn: "Random content with unclear offers.",
    solutionAr: "قوالب ثابتة + عروض أسبوعية + صور منتجات.",
    solutionEn: "Templates + weekly offers + product visuals.",
    resultAr: "حضور أكثر احترافية وسهولة في طلب الطعام.",
    resultEn: "More professional presence and easier ordering."
  },
  {
    nameAr: "شركة خدمات",
    nameEn: "Service Company",
    sectorAr: "خدمات",
    sectorEn: "Services",
    challengeAr: "لا يوجد موقع أو نموذج تواصل.",
    challengeEn: "No website or contact form.",
    solutionAr: "صفحة هبوط + نموذج leads + Google Business.",
    solutionEn: "Landing page + lead form + Google Business.",
    resultAr: "قنوات تواصل أوضح وتجميع طلبات أفضل.",
    resultEn: "Clearer contact channels and better lead capture."
  }
];

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Portfolio</p>
        <h1><span data-lang="ar">نماذج من الأعمال والنتائج التي نصنعها</span><span data-lang="en">Examples of the work and outcomes we build</span></h1>
        <p className="lead" data-lang="ar">هذه نماذج أولية قابلة للاستبدال من لوحة الأدمن عند توفر أعمال حقيقية.</p>
        <p className="lead" data-lang="en">These are initial placeholder examples that can be replaced from the admin dashboard when real work is available.</p>

        <div className="grid grid-3" style={{ marginTop: 34 }}>
          {projects.map((project) => (
            <article className="card" key={project.nameAr}>
              <span className="badge"><span data-lang="ar">{project.sectorAr}</span><span data-lang="en">{project.sectorEn}</span></span>
              <h2 style={{ fontSize: "1.45rem", marginTop: 18 }}><span data-lang="ar">{project.nameAr}</span><span data-lang="en">{project.nameEn}</span></h2>
              <p className="muted"><strong className="gold">Challenge: </strong><span data-lang="ar">{project.challengeAr}</span><span data-lang="en">{project.challengeEn}</span></p>
              <p className="muted"><strong className="gold">Solution: </strong><span data-lang="ar">{project.solutionAr}</span><span data-lang="en">{project.solutionEn}</span></p>
              <p className="muted"><strong className="gold">Result: </strong><span data-lang="ar">{project.resultAr}</span><span data-lang="en">{project.resultEn}</span></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}