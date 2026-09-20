import { site } from "@/content/site";
import { Icon } from "@/components/ui/icon";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className="brand"
      href={`${site.homePath}#top`}
      aria-label={`${site.name} — на початок`}
    >
      {!compact && (
        <span className="brand-symbol">
          <Icon name="spool" />
        </span>
      )}
      <span>
        <strong>{site.shortName}</strong>
        <small>{site.brandSuffix}</small>
      </span>
    </a>
  );
}
