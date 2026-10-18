import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIVANTA — Học tiếng Anh theo cách của bạn",
  description: "Nền tảng học tiếng Anh cùng AI: bài học tương tác, luyện tập mỗi ngày và gia sư AI đồng hành.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}