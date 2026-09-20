"use client";

import { useInquiry } from "./inquiry-provider";
import { Icon } from "@/components/ui/icon";

export function ServiceLink({
  title,
  featured = false,
}: {
  title: string;
  featured?: boolean;
}) {
  const { chooseService } = useInquiry();
  return (
    <a
      className={featured ? "service-cta" : "text-link"}
      href="#request"
      onClick={() => chooseService(title)}
    >
      {featured ? "Обговорити ремонт" : "Запитати майстра"}
      <Icon name="arrow" />
    </a>
  );
}
