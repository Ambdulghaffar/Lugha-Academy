import type { LucideIcon } from "lucide-react"
import {
  BookOpenIcon,
  BrainIcon,
  HouseIcon,
  LanguagesIcon,
  LibraryIcon,
  Settings2Icon,
  Undo2Icon,
} from "lucide-react"

export type NavigationItem = {
  title: string
  url: string
  icon: LucideIcon
}

export type NavigationGroup = {
  title: string
  items: NavigationItem[]
}

export const navigation = {
  main: [
    {
      title: "ESPACE PERSONNEL",
      items: [
        {
          title: "Vue d'ensemble",
          url: "/espace",
          icon: HouseIcon,
        },
      ],
    },
    {
      title: "APPRENTISSAGE",
      items: [
        {
          title: "Mon parcours",
          url: "/espace/parcours",
          icon: BookOpenIcon,
        },
        {
          title: "Programme",
          url: "/espace/programme",
          icon: LibraryIcon,
        },
        {
          title: "Révisions",
          url: "/espace/revisions",
          icon: BrainIcon,
        },
        {
          title: "Vocabulaire",
          url: "/espace/vocabulaire",
          icon: LanguagesIcon,
        },
      ],
    },
  ] satisfies NavigationGroup[],
  secondary: [
    {
      title: "AUTRES",
      items: [
        {
          title: "Paramètres",
          url: "/espace/parametres",
          icon: Settings2Icon,
        },
        {
          title: "Retour au site",
          url: "/",
          icon: Undo2Icon,
        },
      ],
    },
  ] satisfies NavigationGroup[],
}
