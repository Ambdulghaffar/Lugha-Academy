import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col">
      <header className="border-b border-border/70">
        <div className="mx-auto flex w-full max-w-(--container-width) items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <Link className="text-sm font-semibold tracking-tight" href="/">
            Lugha Academy
          </Link>
          <nav aria-label="Navigation principale" className="flex items-center gap-1">
            <div className="hidden items-center gap-1 sm:flex">
              <Link
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                href="/"
              >
                Accueil
              </Link>
              <Link
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                href="#"
              >
                Programme
              </Link>
            </div>
            <ThemeToggle />
            <Link
              className="ml-1 inline-flex h-8 items-center justify-center rounded-md bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
              href="/dashboard"
            >
              <span className="hidden sm:inline">Accéder à l’espace</span>
              <span className="sm:hidden">Espace</span>
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-(--container-width) flex-1 items-center px-6 py-[var(--space-section)] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-primary">
            APPRENDRE · PROGRESSER · MAÎTRISER
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Apprenez une nouvelle langue, à votre rythme.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Un espace d&apos;apprentissage structuré pour comprendre les langues,
            développer vos compétences et progresser durablement.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
              href="/dashboard"
            >
              Commencer à apprendre
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-muted"
              href="#"
            >
              Découvrir le programme
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
