export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-semibold text-white">
            Robith Naufal
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Data Analyst focused on building reliable analytics and business
            insights.
          </p>
        </div>

        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Robith Naufal. Built with Next.js,
          TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}