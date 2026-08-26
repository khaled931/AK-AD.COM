"use client";

import { useRef, type FormEvent } from "react";
import styles from "./before-after-slider.module.css";

type Example = {
  id: string;
  categoryAr: string;
  categoryEn: string;
  account: string;
  handle: string;
  beforeFollowers: string;
  afterFollowers: string;
};

const examples: Example[] = [
  {
    id: "cafe",
    categoryAr: "مقهى محلي — نموذج تجريبي",
    categoryEn: "Local café — fictional demo",
    account: "مقهى عربي",
    handle: "@demo.cafe",
    beforeFollowers: "128",
    afterFollowers: "2.4K"
  },
  {
    id: "clinic",
    categoryAr: "عيادة — نموذج تجريبي",
    categoryEn: "Clinic — fictional demo",
    account: "عيادة عربية",
    handle: "@demo.clinic",
    beforeFollowers: "74",
    afterFollowers: "1.8K"
  },
  {
    id: "store",
    categoryAr: "متجر — نموذج تجريبي",
    categoryEn: "Store — fictional demo",
    account: "متجر عربي",
    handle: "@demo.store",
    beforeFollowers: "211",
    afterFollowers: "3.1K"
  }
];

const improvedPosts = ["خدمة", "عرض", "نصيحة", "من نحن", "تقييم", "تواصل"];

function SocialProfileMock({ example, improved }: { example: Example; improved: boolean }) {
  return (
    <div className={`${styles.mockProfile} ${improved ? styles.improved : styles.before}`} dir="rtl" aria-hidden="true">
      <div className={styles.profileTop}>
        <div className={styles.avatar}>{improved ? "A" : "•"}</div>
        <div className={styles.profileIdentity}>
          <strong>{example.account}</strong>
          <span>{example.handle}</span>
        </div>
        <div className={styles.followButton}>{improved ? "متابعة" : "حساب"}</div>
      </div>

      <div className={styles.stats}>
        <div><strong>{improved ? "24" : "2"}</strong><span>منشور</span></div>
        <div><strong>{improved ? example.afterFollowers : example.beforeFollowers}</strong><span>متابع</span></div>
        <div><strong>{improved ? "18" : "7"}</strong><span>يتابع</span></div>
      </div>

      <div className={styles.bio}>
        <span className={styles.bioLine}>{improved ? "هوية واضحة • محتوى منظم" : "وصف غير مكتمل"}</span>
        <span className={styles.bioLineShort}>{improved ? "خدماتنا • موقعنا • تواصل معنا" : "رابط غير مضاف"}</span>
      </div>

      <div className={styles.postsGrid}>
        {improvedPosts.map((label, index) => (
          <div
            className={`${styles.post} ${improved ? styles.postFilled : index === 0 ? styles.postSparse : styles.postEmpty}`}
            key={label}
          >
            {improved ? <span>{label}</span> : index === 0 ? <span>منشور</span> : <span>+</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonCard({ example }: { example: Example }) {
  const comparisonRef = useRef<HTMLDivElement>(null);

  const updateSplit = (event: FormEvent<HTMLInputElement>) => {
    comparisonRef.current?.style.setProperty("--split", `${event.currentTarget.value}%`);
  };

  return (
    <article className={`card ${styles.exampleCard}`}>
      <div className={styles.cardHeader}>
        <div>
          <strong data-lang="ar">{example.categoryAr}</strong>
          <strong data-lang="en">{example.categoryEn}</strong>
        </div>
        <span className={styles.demoBadge}><span data-lang="ar">بيانات وهمية</span><span data-lang="en">Demo data</span></span>
      </div>

      <div className={styles.comparison} ref={comparisonRef}>
        <div className={`${styles.layer} ${styles.afterLayer}`}>
          <SocialProfileMock example={example} improved />
        </div>
        <div className={`${styles.layer} ${styles.beforeLayer}`}>
          <SocialProfileMock example={example} improved={false} />
        </div>

        <span className={`${styles.stateLabel} ${styles.beforeLabel}`}><span data-lang="ar">قبل</span><span data-lang="en">Before</span></span>
        <span className={`${styles.stateLabel} ${styles.afterLabel}`}><span data-lang="ar">بعد</span><span data-lang="en">After</span></span>

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.handle}>↔</span>
        </div>

        <input
          className={styles.range}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onInput={updateSplit}
          aria-label={`Before and after comparison: ${example.account}`}
        />
      </div>
    </article>
  );
}

export function BeforeAfterShowcase() {
  return (
    <div className={styles.showcase}>
      {examples.map((example) => <ComparisonCard example={example} key={example.id} />)}
    </div>
  );
}
