import Link from "next/link";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: LucideIcon;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon: Icon,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-200 active:scale-[0.98]",

    secondary:
      "border border-zinc-700 bg-transparent text-white hover:border-zinc-500 hover:bg-zinc-900 active:scale-[0.98]",
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}