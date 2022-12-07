import { ReactElement, ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  heading: string;
  text: string;
}

export function AboutCard({
  icon,
  heading,
  text,
}: AboutCardProps): ReactElement {
  return (
    <div className="border text-left rounded-2xl px-8 py-12 transform transition duration-300 active:scale-105 hover:scale-105">
      {/* https://codepen.io/muratbenli/pen/jOWJaZy */}
      <div className="bg-[var(--primary-blue)] inline-flex p-2 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold py-4">{heading}</h3>
      <p>{text}</p>
    </div>
  );
}
