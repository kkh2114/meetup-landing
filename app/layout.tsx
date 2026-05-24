import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "경영자의 AI 밋업 | 백문이 불여 일견",
  description:
    "당신이 아는 AI는, 경영자의 AI가 아니다. 2026.05.30, 하루 만에 직접 본다 — 경영자를 위한 비공개 AI 밋업.",
  openGraph: {
    title: "경영자의 AI 밋업 | 백문이 불여 일견",
    description:
      "실무자의 AI와 경영자의 AI는 다르다. 조직 재설계와 올바른 AX 설계의 눈을 갖는 하루.",
    type: "website",
    locale: "ko_KR",
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
      <body>{children}</body>
    </html>
  );
}
