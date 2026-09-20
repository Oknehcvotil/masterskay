import { home } from "@/content/home";
import { site, addressLine, directionsUrl } from "@/content/site";
import { Icon } from "@/components/ui/icon";

export function Contact() {
  return (
    <section
      className="contact page-pad"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-info" data-reveal>
        <p className="eyebrow">{home.contact.eyebrow}</p>
        <h2 id="contact-title">
          {home.contact.title}
          <br />
          <em>{home.contact.accent}</em>
        </h2>
        <address>{addressLine}</address>
        <dl>
          {site.hours.map((hours) => (
            <div key={hours.label}>
              <dt>{hours.label}</dt>
              <dd>
                <time>{hours.opens}</time>–<time>{hours.closes}</time>
              </dd>
            </div>
          ))}
        </dl>
        <div className="contact-phones">
          {site.phones.map((phone) => (
            <a href={`tel:${phone.value}`} key={phone.value}>
              {phone.label}
            </a>
          ))}
        </div>
        <a
          className="button button-light"
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {home.contact.directions}
          <Icon name="arrow" />
        </a>
      </div>
      <div className="map">
        <iframe
          src={site.mapEmbedUrl}
          title={home.contact.mapTitle}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
