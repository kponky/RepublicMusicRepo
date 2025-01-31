import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import TawkMessenger from "@/components/shared/TawkMessenger";
import type { Metadata } from "next";
import { Suspense } from "react";
import "../styles/index.scss";
import "./globals.css";
import Loading from "./loading";
import { config } from "@/utils/config";
import { getSiteInformation } from "@/lib/data";
import { ISiteInfo } from "@/interfaces/app.interface";

// Use generateMetadata to fetch dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  // Fetch site information
  const res = await getSiteInformation();
  const siteInformation: ISiteInfo = res?.data?.data || {};

  return {
    title: {
      default: siteInformation?.title_name || config.SITE_NAME,
      template: `%s | ${siteInformation?.title_name || config.SITE_NAME}`,
    },
    description: siteInformation?.description || config.SITE_DESCRIPTION,
    metadataBase: new URL(
      siteInformation?.entity_featured_url || config.SITE_URL
    ),
    keywords: [],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteInformation?.entity_featured_url || config.SITE_URL,
      title: siteInformation?.title_name || config.SITE_NAME,
      siteName: siteInformation?.title_name || config.SITE_NAME,
      description: siteInformation?.description || config.SITE_DESCRIPTION,
      images: [
        {
          url: config.SITE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: siteInformation?.title_name || config.SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteInformation?.meta_data?.x_url || config.SITE_TWITTER_HANDLE,
      title: siteInformation?.title_name || config.SITE_NAME,
      description: siteInformation?.description || config.SITE_DESCRIPTION,
      images: [config.SITE_OG_IMAGE],
      creator: "@onidev",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch site information
  const res = await getSiteInformation();
  const siteInformation: ISiteInfo = res?.data?.data || {};

  return (
    <html lang="en">
      <body className="roboto-regular roboto-medium roboto-bold bg-black">
        <Suspense fallback={<Loading />}>
          <Navbar siteInformation={siteInformation} />
          <main>{children}</main>
          <Footer siteInformation={siteInformation} />
        </Suspense>

        <TawkMessenger />
      </body>
    </html>
  );
}
