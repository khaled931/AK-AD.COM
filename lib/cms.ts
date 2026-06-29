export type CmsPost = {
  id: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
};

export type CmsPage = {
  id: "home" | "services" | "portfolio" | "about" | "contact";
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  updatedAt: string;
};

export type CmsSiteInfo = {
  companyName: string;
  slogan: string;
  email: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  updatedAt: string;
};

export type CmsState = {
  posts: CmsPost[];
  pages: CmsPage[];
  siteInfo: CmsSiteInfo;
};

export const defaultCmsState: CmsState = {
  posts: [],
  pages: [
    {
      id: "home",
      titleAr: "الرئيسية",
      titleEn: "Home",
      descriptionAr: "الصفحة الرئيسية لموقع AK-AD media.",
      descriptionEn: "Main landing page for AK-AD media.",
      updatedAt: new Date(0).toISOString()
    },
    {
      id: "services",
      titleAr: "الخدمات",
      titleEn: "Services",
      descriptionAr: "صفحة عرض خدمات التسويق الإلكتروني.",
      descriptionEn: "Digital marketing services page.",
      updatedAt: new Date(0).toISOString()
    },
    {
      id: "portfolio",
      titleAr: "أعمالنا",
      titleEn: "Portfolio",
      descriptionAr: "صفحة نماذج الأعمال والمشاريع.",
      descriptionEn: "Portfolio and case examples page.",
      updatedAt: new Date(0).toISOString()
    },
    {
      id: "about",
      titleAr: "من نحن",
      titleEn: "About",
      descriptionAr: "صفحة تعريفية عن الشركة والرؤية والقيم.",
      descriptionEn: "Company profile, vision, and values page.",
      updatedAt: new Date(0).toISOString()
    },
    {
      id: "contact",
      titleAr: "تواصل معنا",
      titleEn: "Contact",
      descriptionAr: "صفحة التواصل ونموذج طلب الخدمة.",
      descriptionEn: "Contact page and service request form.",
      updatedAt: new Date(0).toISOString()
    }
  ],
  siteInfo: {
    companyName: "AK-AD media",
    slogan: "Digital Presence. Real Growth.",
    email: "contact@ak-ad.com",
    whatsapp: "https://wa.me/4740381834",
    facebook: "https://www.facebook.com/profile.php?id=61589601436614",
    instagram: "https://www.instagram.com/akad.media0?igsh=eWx1dGhqY3oyenhs",
    updatedAt: new Date(0).toISOString()
  }
};

const memory = {
  cms: defaultCmsState
};

async function getKv() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) return null;
  const mod = await import("@vercel/kv");
  return mod.kv;
}

function normalizeCmsState(value: Partial<CmsState> | null | undefined): CmsState {
  return {
    posts: Array.isArray(value?.posts) ? value.posts : defaultCmsState.posts,
    pages: Array.isArray(value?.pages) ? value.pages : defaultCmsState.pages,
    siteInfo: value?.siteInfo ? { ...defaultCmsState.siteInfo, ...value.siteInfo } : defaultCmsState.siteInfo
  };
}

export async function getCmsState(): Promise<CmsState> {
  const kv = await getKv();
  if (kv) {
    const state = await kv.get<CmsState>("akad:cms");
    return normalizeCmsState(state);
  }

  return normalizeCmsState(memory.cms);
}

export async function saveCmsState(state: CmsState): Promise<CmsState> {
  const normalized = normalizeCmsState(state);
  const kv = await getKv();

  if (kv) {
    await kv.set("akad:cms", normalized);
    return normalized;
  }

  memory.cms = normalized;
  return normalized;
}

export function createEmptyPost(): CmsPost {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    titleAr: "منشور جديد",
    titleEn: "New Post",
    excerptAr: "ملخص قصير للمنشور.",
    excerptEn: "Short post excerpt.",
    contentAr: "اكتب محتوى المنشور هنا.",
    contentEn: "Write the post content here.",
    status: "draft",
    createdAt: now,
    updatedAt: now
  };
}
