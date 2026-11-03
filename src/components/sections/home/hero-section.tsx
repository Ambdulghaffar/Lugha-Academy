
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-section relative isolate flex min-h-[calc(100svh-81px)] w-full items-center overflow-hidden">
      <div className="hero-visual" aria-hidden="true">
        <Image
          src="/image-hero1.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="hero-image"
        />
      </div>

      <div className="hero-container relative z-10 mx-auto w-full">
        <div className="hero-content">
          <p className="mb-7 text-xs font-semibold tracking-[0.18em] text-primary sm:text-sm">
            APPRENDRE · PROGRESSER · MAÎTRISER
          </p>

          <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[5.1rem]">
            Apprenez une nouvelle langue, à votre rythme.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Un espace d&apos;apprentissage structuré pour comprendre les langues,
            développer vos compétences et progresser durablement.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
              href="/espace"
            >
              Commencer à apprendre
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>

            <Link
              className="inline-flex h-14 items-center justify-center rounded-xl border border-primary px-7 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              href="/programme"
            >
              Découvrir le programme
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
