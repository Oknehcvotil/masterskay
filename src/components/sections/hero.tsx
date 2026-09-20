import Image from "next/image";
import { home } from "@/content/home";
import { addressLine, site } from "@/content/site";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/icon";

export function Hero() {
  return (
    <>
      <section className="hero page-pad" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 id="hero-title">
            {home.hero.title}
            <br />
            <em>{home.hero.accent}</em>
          </h1>
          <p className="hero-intro">{home.hero.description}</p>
          <div className="actions">
            <a className="button button-primary" href="#request">
              {home.hero.action}
              <Icon name="arrow" />
            </a>
            <a className="text-link" href="#services">
              {home.hero.secondaryAction}
              <Icon name="down" />
            </a>
          </div>
          <a className="location-line" href="#contact">
            <Icon name="pin" />
            <span>{addressLine}</span>
          </a>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-image">
            <Image
              src={home.hero.image}
              alt={home.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 620px) 90vw, (max-width: 1200px) 44vw, 500px"
            />
          </div>
          <div className="experience">
            <strong>{site.experienceYears}</strong>
            <span>{home.hero.experienceCaption}</span>
          </div>
          <div className="image-caption">
            <span>{home.hero.imageCaption}</span>
            <Icon name="arrow" />
          </div>
        </div>
      </section>
      <div className="service-ribbon" aria-label="Напрями роботи">
        {services.map((service, index) => (
          <a key={service.id} href={`#${service.id}`}>
            {index > 0 && (
              <svg
                className="ribbon-star"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            )}
            {service.shortTitle}
          </a>
        ))}
      </div>
    </>
  );
}
