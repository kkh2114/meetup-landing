import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "경영자의 AI 밋업 — 당신이 아는 AI는, 경영자의 AI가 아닙니다.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://meetup-landing.vercel.app"),
  title: "경영자의 AI 밋업 | 백문이 불여 일견",
  description:
    "당신이 아는 AI는, 경영자의 AI가 아닙니다. 2026.05.30, 하루 만에 직접 보세요 — 경영자를 위한 비공개 AI 밋업.",
  openGraph: {
    title: "경영자의 AI 밋업 | 백문이 불여 일견",
    description:
      "실무자의 AI와 경영자의 AI는 다릅니다. 조직 재설계와 올바른 AX 설계의 눈을 갖는 하루.",
    url: "https://meetup-landing.vercel.app",
    siteName: "경영자의 AI 밋업",
    type: "website",
    locale: "ko_KR",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "경영자의 AI 밋업 | 백문이 불여 일견",
    description:
      "당신이 아는 AI는, 경영자의 AI가 아닙니다. 2026.05.30, 비공개 AI 밋업.",
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistMono.variable} grain`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="break-keep break-words">{children}</body>
    </html>
  );
}
