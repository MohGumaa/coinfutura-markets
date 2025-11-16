import type { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"
import { GeneratePageMetadataProps } from "@/types"

const APP_NAME = process.env.APP_NAME || "CoinFutura"
const SITE_URL = process.env.SITE_URL || "https://market.coinfutura.com"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generatePageMetadata = ({
  title,
  description,
  path,
  image = "/og/og-image.jpg",
}: GeneratePageMetadataProps): Metadata => {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${title} | ${APP_NAME}`,
      description,
      url,
      siteName: APP_NAME,
      type: "website",
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${APP_NAME}`,
      description,
      images: [`${SITE_URL}${image}`],
    },
  }
}