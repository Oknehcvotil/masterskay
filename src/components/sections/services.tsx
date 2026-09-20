import Image from "next/image";
import { home } from "@/content/home";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/icon";
import { ServiceLink } from "@/components/contact/service-link";

export function Services() {
  return (
    <section
      className="page-pad section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow">{home.services.eyebrow}</p>
          <h2 id="services-title">
            {home.services.title}
            <br />
            <em>{home.services.accent}</em>
          </h2>
        </div>
        <p>{home.services.description}</p>
      </div>
      <div className="main-services">
        {services
          .filter((service) => service.image)
          .map((service, index) => (
            <article
              className="service"
              data-reveal
              data-reveal-delay={index * 90}
              id={service.id}
              key={service.id}
            >
              <div className="service-photo">
                <Image
                  src={service.image!}
                  alt={service.imageAlt!}
                  fill
                  sizes="(max-width: 620px) 90vw, (max-width: 1200px) 44vw, 500px"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details?.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <ServiceLink title={service.title} featured />
              </div>
            </article>
          ))}
      </div>
      <div className="extra-services">
        {services
          .filter((service) => !service.image)
          .map((service) => (
            <article data-reveal id={service.id} key={service.id}>
              <Icon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ServiceLink title={service.title} />
            </article>
          ))}
      </div>
      <p className="price-note">
        <Icon name="message" />
        {home.services.note}
      </p>
    </section>
  );
}
