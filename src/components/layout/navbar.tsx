import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-14 lg:py-6">
        <Link className="text-lg font-semibold tracking-[-0.04em]" href="/">
          Lugha <span className="text-primary">Academy</span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-1"
        >
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              className="relative rounded-md px-3 py-2 text-sm font-medium text-primary after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-primary"
              href="/"
            >
              Accueil
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              href="/programme"
            >
              Programme
            </Link>
          </div>
          <div
            aria-hidden="true"
            className="mx-3 hidden h-7 w-px bg-border sm:block"
          />
          <ThemeToggle />
          <Link
            className="ml-1 inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            href="/espace"
          >
            <span className="hidden sm:inline">Accéder à l&apos;espace</span>
            <span className="sm:hidden">Espace</span>
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
