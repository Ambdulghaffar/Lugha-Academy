import Link from "next/link"
import {
  ArrowRightIcon,
  BookOpenIcon,
  BrainIcon,
  CheckIcon,
  LanguagesIcon,
  LibraryIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const quickAccessItems = [
  {
    title: "Mon parcours",
    description: "Suivez votre évolution dans le programme.",
    href: "/espace/parcours",
    icon: BookOpenIcon,
  },
  {
    title: "Programme",
    description: "Explorez les phases et les chapitres.",
    href: "/espace/programme",
    icon: LibraryIcon,
  },
  {
    title: "Révisions",
    description: "Consolidez vos connaissances.",
    href: "/espace/revisions",
    icon: BrainIcon,
  },
  {
    title: "Vocabulaire",
    description: "Retrouvez les mots étudiés.",
    href: "/espace/vocabulaire",
    icon: LanguagesIcon,
  },
]

export default function Page() {
  return (
    <main className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Votre espace d&apos;apprentissage
        </p>
        <div className="max-w-3xl space-y-2">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Bonjour et bienvenue !
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Prêt à poursuivre votre apprentissage de l&apos;arabe ? Chaque
            leçon vous rapproche de votre objectif.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
        <Card className="h-full">
          <CardHeader className="gap-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-xl">Votre apprentissage</CardTitle>
                <CardDescription className="mt-1">
                  Le cadre actuel de votre parcours.
                </CardDescription>
              </div>
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <LanguagesIcon aria-hidden="true" className="size-5" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-muted/60 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Langue étudiée
                </p>
                <p className="mt-2 font-heading text-lg font-semibold">
                  Arabe <span className="font-arabic text-base">العربية</span>
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  Phase actuelle
                </p>
                <p className="mt-2 font-heading text-lg font-semibold">
                  Phase 1 — Fondations
                </p>
              </div>
              <div className="rounded-lg bg-muted/60 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Programme
                </p>
                <p className="mt-2 font-heading text-lg font-semibold">
                  8 chapitres
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="font-medium">Phase 1 — Fondations</span>
                <span className="text-muted-foreground">
                  Suivi bientôt disponible
                </span>
              </div>
              <div
                aria-label="Suivi de progression bientôt disponible"
                className="h-2 rounded-full bg-primary/10 ring-1 ring-inset ring-primary/20"
              >
                <div className="h-full w-full rounded-full bg-primary/10" />
              </div>
              <p className="text-xs text-muted-foreground">
                Votre progression détaillée sera disponible prochainement.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/4">
          <CardHeader>
            <CardTitle className="text-xl">Votre prochaine étape</CardTitle>
            <CardDescription className="mt-1">
              Commencez par les bases essentielles de l&apos;arabe.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckIcon aria-hidden="true" className="size-5" />
              </div>
              <h2 className="font-heading text-2xl font-semibold">
                Les catégories de mots
              </h2>
              <p className="leading-7 text-muted-foreground">
                Découvrez les trois grandes catégories de mots en arabe : le
                nom, le verbe et la particule.
              </p>
            </div>
            <Button className="w-full sm:w-fit" render={<Link href="/espace/programme" />}>
              Commencer la première leçon
              <ArrowRightIcon aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="font-heading text-2xl font-semibold">Accès rapides</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Retrouvez rapidement les ressources de votre espace.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickAccessItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl bg-card p-5 ring-1 ring-foreground/10 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
