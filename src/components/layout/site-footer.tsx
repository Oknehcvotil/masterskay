import { Brand } from "./brand";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer page-pad">
      <Brand compact />
      <p>{home.footer}</p>
      <span>
        {site.address.city} · {new Date().getFullYear()}
      </span>
    </footer>
  );
}
