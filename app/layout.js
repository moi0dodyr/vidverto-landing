import { Inter, Oranienbaum } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const oranienbaum = Oranienbaum({
  variable: "--font-oranienbaum",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export const metadata = {
  title: "Vidverto — Платформа для онлайн-терапевтів",
  description:
    "Простий інструмент для онлайн-терапевта: розклад, відеодзвінки, оплата та клієнти — в одному місці. Прозора тарифікація, без прихованих комісій.",
  openGraph: {
    title: "Vidverto — Платформа для онлайн-терапевтів",
    description: "Ведіть практику онлайн. Без прихованих комісій.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${inter.variable} ${oranienbaum.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
