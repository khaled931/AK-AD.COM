import type { Metadata } from "next";
import "./globals.css";
import { LightThemeFix } from "@/components/light-theme-fix";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeScript } from "@/components/theme-script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ak-ad.com"),
  title: {
    default: "AK-AD media | تسويق إلكتروني للشركات السورية",
    template: "%s | AK-AD media"
  },
  description:
    "AK-AD media منصة تسويق إلكتروني تساعد الشركات السورية على بناء حضور رقمي احترافي، إدارة السوشال ميديا، إنشاء المحتوى، تشغيل الإعلانات، وتحويل الوجود الرقمي إلى عملاء حقيقيين.",
  openGraph: {
    title: "AK-AD media | Digital Presence. Real Growth.",
    description:
      "Digital marketing, social media management, branding, websites, ads, and growth systems for Syrian businesses.",
    type: "website",
    locale: "ar_SY",
    siteName: "AK-AD media"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" data-current-lang="ar" data-theme="dark">
      <body>
        <ThemeScript />
        <LightThemeFix />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
