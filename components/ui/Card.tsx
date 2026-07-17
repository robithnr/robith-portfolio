import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        group
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        p-8
        transition-all
        duration-300
        ${
        hover
            ? "hover:-translate-y-1 hover:border-blue-500/50"
            : ""
        }
        ${className}
    `}
    >
      {children}
    </div>
  );
}