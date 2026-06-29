import type { Metadata } from "next";
import { getCmsState } from "@/lib/cms";

export const dynamic = "force-dynamic";

type BlogPostPageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const cms = await getCmsState();
  const post = cms.posts.find((item) => item.id === params.id);

  return {
    title: post?.titleAr || "منشور",
    description: post?.excerptAr || "منشور من AK-AD media."
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const cms = await getCmsState();
  const post = cms.posts.find((item) => item.id === params.id);

  if (!post) {
    return (
      <section className="section">
        <div className="container card">
          <h1>
            <span data-lang="ar">المنشور غير موجود</span>
            <span data-lang="en">Post not found</span>
          </h1>
          <a className="btn btn-primary" href="/blog">
            <span data-lang="ar">العودة إلى المنشورات</span>
            <span data-lang="en">Back to posts</span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <p className="eyebrow">AK-AD media Blog</p>
        <h1>
          <span data-lang="ar">{post.titleAr}</span>
          <span data-lang="en">{post.titleEn}</span>
        </h1>
        <p className="lead">
          <span data-lang="ar">{post.excerptAr}</span>
          <span data-lang="en">{post.excerptEn}</span>
        </p>
        <div className="card" style={{ marginTop: 34 }}>
          <p className="muted" style={{ whiteSpace: "pre-wrap" }}>
            <span data-lang="ar">{post.contentAr}</span>
            <span data-lang="en">{post.contentEn}</span>
          </p>
        </div>
        <a className="btn btn-secondary" href="/blog" style={{ marginTop: 24 }}>
          <span data-lang="ar">العودة إلى المنشورات</span>
          <span data-lang="en">Back to posts</span>
        </a>
      </div>
    </article>
  );
}
