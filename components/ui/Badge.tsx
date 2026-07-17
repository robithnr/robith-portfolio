interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700",

    outline:
      "border-zinc-700 bg-transparent text-zinc-400 hover:border-blue-500 hover:text-white",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1.5
        text-xs
        font-medium
        tracking-wide
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}