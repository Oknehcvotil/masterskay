import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export default function SectionHeading({
  children,
  as: Component = "h2",
}: SectionHeadingProps) {
  return (
    <Component className="text-2xl font-medium capitalize mb-8 text-center">
      {children}
    </Component>
  );
}
