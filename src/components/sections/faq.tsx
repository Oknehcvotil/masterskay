import { home } from "@/content/home";
import { Icon } from "@/components/ui/icon";

export function Faq() {
  return (
    <section className="page-pad faq" aria-labelledby="faq-title">
      <div data-reveal>
        <p className="eyebrow">{home.faq.eyebrow}</p>
        <h2 id="faq-title">{home.faq.title}</h2>
      </div>
      <div className="faq-list">
        {home.faq.items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <Icon name="plus" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
