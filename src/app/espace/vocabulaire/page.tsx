export default function Page() {
  return (
    <section className="flex flex-1 flex-col justify-center py-12">
      <div className="max-w-2xl space-y-3">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Bienvenue dans votre espace vocabulaire.
        </h1>
        <p className="text-muted-foreground">
          Retrouvez ici les mots et expressions étudiés pendant votre
          apprentissage.
        </p>
      </div>
    </section>
  )
}
