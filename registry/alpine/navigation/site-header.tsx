import { Logo } from "@/registry/alpine/branding/logo"
import { MainNav } from "@/registry/alpine/navigation/main-nav"
import { Button } from "@/registry/alpine/ui/button"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <Link href="/">
          <Logo /> <span className="sr-only">Alpine</span>
        </Link>
        <MainNav />
        <div className="ml-auto flex items-center gap-4">
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}
