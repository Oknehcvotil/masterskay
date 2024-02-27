import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n, type Locale } from "@/src/lib/utils/i18n-config";
import { getDictionary } from "@/src/lib/utils/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return { title: dict.meta.title, description: dict.meta.description };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <header>sakdsjfdkad</header>
        {children}
      </body>
    </html>
  );
}
