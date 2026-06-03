import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060606",
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_IMAGE = {
  url: "/og.png?v=2",
  width: 1200,
  height: 630,
  alt: "경영자의 AI 밋업 · 백문이 불여 일견 · 강의 계획안 — 김길호 · 허세임 · 유니",
};

const SHARE_TITLE = "경영자의 AI 밋업 · 백문이 불여 일견 · 강의 계획안";
const SHARE_DESC =
  "경영자만을 위한 비공개 AI 밋업 — 김길호 · 허세임 · 유니, 3개 셀의 하루 강의 계획안.";

export const metadata: Metadata = {
  metadataBase: new URL("https://meetup-landing.vercel.app"),
  title: "경영자의 AI 밋업 | 백문이 불여 일견",
  description:
    "당신이 아는 AI는, 경영자의 AI가 아닙니다. 2026.05.30, 하루 만에 직접 보세요 — 경영자를 위한 비공개 AI 밋업.",
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESC,
    url: "https://meetup-landing.vercel.app",
    siteName: "경영자의 AI 밋업",
    type: "website",
    locale: "ko_KR",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESC,
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
