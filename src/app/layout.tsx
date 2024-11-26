import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import TawkMessenger from "@/components/shared/TawkMessenger";
import type { Metadata } from "next";
import { Suspense } from "react";
import "../styles/index.scss";
import "./globals.css";
import Loading from "./loading";
import { config } from "@/utils/config";

export const metadata: Metadata = {
  title: {
    default: `${config.SITE_NAME}`,
    template: `%s | ${config.SITE_NAME}`,
  },
  description: config.SITE_DESCRIPTION,
  metadataBase: new URL(config.SITE_URL),
  keywords: [],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.SITE_URL,
    title: config.SITE_NAME,
    siteName: config.SITE_NAME,
    description: config.SITE_DESCRIPTION,
    images: [
      {
        url: config.SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: config.SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: config.SITE_TWITTER_HANDLE,
    title: config.SITE_NAME,
    description: config.SITE_DESCRIPTION,
    images: [config.SITE_OG_IMAGE],
    creator: "@onidev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="roboto-regular roboto-medium roboto-bold bg-black">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Suspense>

        <TawkMessenger />
      </body>
    </html>
  );
}
