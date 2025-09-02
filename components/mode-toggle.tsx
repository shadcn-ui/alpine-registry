"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/alpine/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn("size-8", className)}
      {...props}
    >
      <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
