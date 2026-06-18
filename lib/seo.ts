export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tempmail-nextjs-three.vercel.app";

export const SEO = {
  siteName: "TempMail",
  defaultTitle: "TempMail – Free Disposable Email Address",
  defaultDescription:
    "Generate a free temporary email instantly. No registration required. Real-time inbox with SSE streaming. 1,200+ available domains.",
  ogImage: `${SITE_URL}/og-image.svg`,
  twitterHandle: "",
};

export function pageUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
