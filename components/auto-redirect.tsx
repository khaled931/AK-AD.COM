"use client";

import { useEffect, useState } from "react";

type AutoRedirectProps = {
  to?: string;
  seconds?: number;
};

export function AutoRedirect({ to = "/", seconds = 6 }: AutoRedirectProps) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setRemaining((value) => Math.max(value - 1, 0));
    }, 1000);

    const redirect = window.setTimeout(() => {
      window.location.href = to;
    }, seconds * 1000);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(redirect);
    };
  }, [seconds, to]);

  return (
    <p className="muted" style={{ marginTop: 18 }}>
      <span data-lang="ar">سيتم إعادتك تلقائيًا إلى الموقع خلال {remaining} ثوانٍ.</span>
      <span data-lang="en">You will be redirected back to the website in {remaining} seconds.</span>
    </p>
  );
}
