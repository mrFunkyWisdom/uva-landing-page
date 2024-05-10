import { SiteConfig } from "types"
import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "uva",
  description:
    "Gain the ability to speak English like a native in just a few weeks with our AI pronunciation App.",
  url: env.SITE_URL,
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/ensarbavrk",
  },
}
