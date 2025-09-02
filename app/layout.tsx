import type { Metadata } from "next"
import { DM_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Providers } from "@/components/providers"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/registry/alpine/ui/separator"
import Link from "next/link"
import { Logo } from "@/registry/alpine/branding/logo"
import { Toaster } from "@/registry/alpine/ui/sonner"
import { RegistrySetup } from "@/components/registry-setup"
import PageWideScrollMask from "@/components/page-wide-adaptive-mask"

const fontSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
})

const fontGeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const title = "Alpine"
const description = "A example registry for distributing code using shadcn."

export const metadata: Metadata = {
  title: {
    default: `${title} | ${description}`,
    template: "%s | Alpine",
  },
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  manifest: `${process.env.NEXT_PUBLIC_BASE_URL}/site.webmanifest`,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontGeistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <header>
            <div className="mx-auto flex max-w-7xl items-center px-4 py-6">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Logo /> <span className="sr-only">Alpine</span>
                </Link>
                <Separator orientation="vertical" className="!h-6" />
                <p className="text-muted-foreground line-clamp-1 hidden text-sm md:block">
                  An example registry for distributing code using shadcn.
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <RegistrySetup />
                <ModeToggle />
              </div>
            </div>
          </header>
          {children}
          <Toaster position="top-center" />
        </Providers>
        <Analytics />
        <PageWideScrollMask />
      </body>
    </html>
  )
}
