import { site } from "@/content/site";
import { home } from "@/content/home";
import { Brand } from "./brand";
import { Icon } from "@/components/ui/icon";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти до вмісту
      </a>
      <div className="announcement">{home.announcement}</div>
      <header className="site-header page-pad">
        <Brand />
        <nav aria-label="Головна навігація">
          {home.navigation.map((item) => (
            <a key={item.id} href={`${site.homePath}#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-call" href={`tel:${site.phones[0].value}`}>
          <Icon name="phone" />
          <span>{site.phones[0].label}</span>
        </a>
      </header>
    </>
  );
}
