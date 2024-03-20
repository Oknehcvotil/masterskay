import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import MenuProvider from "@/lib/context/menu-context";
import { Toaster } from "react-hot-toast";
import ModalProvider from "@/lib/context/modal-context";
import LangProvider from "@/lib/context/lang-context";
import Footer from "../components/footer";
import { locales } from "@/config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n";
import { NextIntlClientProvider, useMessages } from "next-intl";

const montserrat = Montserrat({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ lang });
  return { title: t("meta.title"), description: t("meta.description") };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const messages = useMessages();

  return (
    <html lang={params.lang}>
      <body
        className={`${montserrat.className} bg-gray-50 text-gray-800 h-screen flex flex-col flex-1`}
      >
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          <LangProvider lang={params.lang}>
            <MenuProvider>
              <ModalProvider>
                <Header />
                <main className="flex-grow flex-shrink flex-auto">
                  {children}
                </main>
                <Footer />
              </ModalProvider>
            </MenuProvider>
            <Toaster position="top-right" />
          </LangProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
