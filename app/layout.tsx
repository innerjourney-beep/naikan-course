import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "もう、自分の感覚に嘘をつかない。| 自己一致し、内観を一生使える技術にする3ヶ月",
  description: "ブロック外しセラピスト なるいまい による内観講座。内観を「技術」にする3ヶ月講座。先着5名限定、ブロック外しセッション1回分付き。",
  openGraph: {
    title: "もう、自分の感覚に嘘をつかない。",
    description: "自己一致し、内観を一生使える技術にする3ヶ月。ブロック外しセラピスト なるいまい",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
