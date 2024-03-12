import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { i18n, type Locale } from "@/lib/utils/i18n-config";
import { getDictionary } from "@/lib/utils/dictionaries";
import Header from "../components/header";
import MenuProvider from "@/lib/context/menu-context";
import { Toaster } from "react-hot-toast";
import ModalProvider from "@/lib/context/modal-context";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={`${montserrat.className} bg-gray-50 text-gray-950`}>
        <MenuProvider>
          <ModalProvider>
            <Header lang={params.lang} />
            <main>{children}</main>
          </ModalProvider>
        </MenuProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
