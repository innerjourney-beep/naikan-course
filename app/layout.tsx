import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "もう、自分の感覚に嘘をつかない。| 内観講座 0期生",
  description:
    "自己一致し、内観を一生使える技術にする3ヶ月。ブロック外しセラピスト なるいまいによる0期生プログラム。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script id="scroll-reveal" strategy="afterInteractive">{`
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) entry.target.classList.add('visible');
            });
          }, { threshold: 0.1 });
          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        `}</Script>
      </body>
    </html>
  );
}
