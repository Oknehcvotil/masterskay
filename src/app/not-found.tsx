import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Сторінку не знайдено",
  robots: { index: false, follow: true },
};
export default function NotFound() {
  return (
    <main id="main" className="page-pad section not-found">
      <p className="eyebrow">404</p>
      <h1>Сторінку не знайдено</h1>
      <p>Перейдіть на головну, щоб переглянути послуги й контакти майстерні.</p>
      <a className="button button-primary" href={site.homePath}>
        На головну
      </a>
    </main>
  );
}
