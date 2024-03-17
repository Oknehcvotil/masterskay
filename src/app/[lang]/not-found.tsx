"use client";

import Link from "next/link";
import React from "react";
import { useLang } from "@/lib/hooks/use-lang";

export default function NotFound() {
  const { lang } = useLang();

  return (
    <section className="px-2">
      <div className="pt-[4.5rem] flex items-center justify-center">
        <h1 className="text-center">
          Ой... Такой страницы нет!{" "}
          <Link href={`/${lang}`} className="underline text-blue-600">
            Перейти на главную
          </Link>
        </h1>
      </div>
    </section>
  );
}
