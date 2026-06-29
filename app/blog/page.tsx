import type { Metadata } from "next";
import { getCmsState } from "@/lib/cms";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "المنشورات",
  description: "منشورات AK-AD media حول التسويق الرقمي وإدارة الحضور الرقمي."
};

export default async function BlogPage() {
  const cms = await getCmsState();
  const posts = cms.posts.filter((post) => post.status === "published");

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">AK-AD media Blog</p>
        <h1>
          <span data-lang="ar">المنشورات</span>
          <span data-lang="en">Posts</span>
        </h1>
        <p className="lead">
          <span data-lang="ar">أفكار ونصائح عملية حول التسويق الرقمي وبناء الحضور الرقمي للشركات.</span>
          <span data-lang="en">Practical ideas and insights about digital marketing and business presence.</span>
        </p>

        <div className="grid grid-3" style={{ marginTop: 34 }}>
          {posts.map((post) => (
            <article className="card" key={post.id}>
              <span className="badge">{new Date(post.updatedAt).toLocaleDateString()}</span>
              <h2 style={{ fontSize: "1.45rem", marginTop: 18 }}>
                <span data-lang="ar">{post.titleAr}</span>
                <span data-lang="en">{post.titleEn}</span>
              </h2>
              <p className="muted">
                <span data-lang="ar">{post.excerptAr}</span>
                <span data-lang="en">{post.excerptEn}</span>
              </p>
              <a className="btn btn-primary" href={`/blog/${post.id}`} style={{ marginTop: 18 }}>
                <span data-lang="ar">قراءة المنشور</span>
                <span data-lang="en">Read post</span>
              </a>
            </article>
          ))}
        </div>

        {!posts.length && (
          <div className="card" style={{ marginTop: 34 }}>
            <h2>
              <span data-lang="ar">لا توجد منشورات منشورة بعد.</span>
              <span data-lang="en">No published posts yet.</span>
            </h2>
            <p className="muted">
              <span data-lang="ar">يمكن إضافة منشورات من لوحة الأدمن ثم تغيير حالتها إلى Published.</span>
              <span data-lang="en">Posts can be added from the admin dashboard and marked as Published.</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
