import Image from "next/image";
import { home } from "@/content/home";
import { Icon } from "@/components/ui/icon";

export function Story() {
  return (
    <section
      className="story page-pad"
      id="story"
      aria-labelledby="story-title"
    >
      <figure>
        <div className="story-image">
          <Image
            src={home.story.image}
            alt={home.story.imageAlt}
            fill
            sizes="(max-width: 620px) 85vw, (max-width: 1200px) 37vw, 440px"
          />
        </div>
        <figcaption>{home.story.caption}</figcaption>
      </figure>
      <div className="story-copy">
        <p className="eyebrow">{home.story.eyebrow}</p>
        <h2 id="story-title">
          {home.story.title}
          <br />
          <em>{home.story.accent}</em>
        </h2>
        {home.story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a className="text-link" href="#contact">
          {home.story.action}
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
