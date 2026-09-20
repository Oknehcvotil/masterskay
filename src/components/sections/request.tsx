import { home } from "@/content/home";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/icon";
import { ContactForm } from "@/components/contact/contact-form";

export function RequestSection() {
  return (
    <section
      className="page-pad section request"
      id="request"
      aria-labelledby="request-title"
    >
      <div>
        <p className="eyebrow">{home.request.eyebrow}</p>
        <h2 id="request-title">
          {home.request.title}
          <br />
          <em>{home.request.accent}</em>
        </h2>
        <p className="request-copy">{home.request.description}</p>
        <div className="call-block">
          <span>{home.request.callLabel}</span>
          <a href={`tel:${site.phones[0].value}`}>
            {site.phones[0].label}
            <Icon name="arrow" />
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
