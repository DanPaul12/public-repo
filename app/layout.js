import { Inter, Roboto } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Unforgotten Collection",
  description: "An archive of Ukrainian poetry from TikTok.",
  image: "/og-image.jpg",
  url: "http://localhost:3000",
  type: "website",
  keywords: ["Ukrainian", "poetry", "archive"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
