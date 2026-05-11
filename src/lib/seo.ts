import type { Metadata } from "next";
import { BUSINESS, SITE } from "./constants";

interface BuildMetaArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

function absolute(path: string): string {
  if (path === "/" || path === "") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: BuildMetaArgs): Metadata {
  const url = absolute(path);
  const ogImage = image ?? SITE.defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: BUSINESS.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: BUSINESS.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : undefined,
  };
}
