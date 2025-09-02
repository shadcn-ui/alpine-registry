"use client"

import * as React from "react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/alpine/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/alpine/ui/revola"
import { ScrollArea } from "@/registry/alpine/ui/scroll-area"

export function RegistrySetup({
  className,
}: React.ComponentProps<typeof Button>) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="ghost" size="sm" className={cn(className)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-4"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></line>
          </svg>
          Registry
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="flex max-h-[85%] flex-col overflow-hidden rounded-t-xl sm:max-h-[min(640px,80dvh)] sm:max-w-xl sm:rounded-xl">
        <div className="space-y-4 overflow-y-auto p-6 pt-0 sm:pt-6">
          <ResponsiveDialogHeader className="text-left">
            <ResponsiveDialogTitle>Setup Registry</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              Use the code below to configure the @alpine registry for your
              project.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <div className="font-medium">
            Copy and paste the code into{" "}
            <code className="text-foreground font-mono">components.json</code>
          </div>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "bg-background absolute top-4 right-4 z-10 size-8 rounded-md",
                isCopied &&
                  "!bg-primary/15 border-primary/25 dark:!bg-primary/15 dark:border-primary/25"
              )}
              onClick={() => copyToClipboard(registrySetupCode)}
            >
              <CheckIcon
                className={cn(
                  "text-primary size-4 transition-transform dark:text-green-500",
                  !isCopied && "scale-0"
                )}
              />
              <CopyIcon
                className={cn(
                  "absolute size-4 transition-transform",
                  isCopied && "scale-0"
                )}
              />
            </Button>
            <ScrollArea
              viewportClassName="p-8"
              maskClassName="before:from-muted after:from-muted dark:before:from-card dark:after:from-card"
              className="bg-muted dark:bg-card min-h-[120px] overflow-x-auto rounded-md"
            >
              <pre>
                <code>{registrySetupCode}</code>
              </pre>
            </ScrollArea>
          </div>
          <div className="font-medium">
            Then use the following command to add components:
          </div>
          <ScrollArea
            viewportClassName="p-8"
            maskClassName="before:from-muted after:from-muted dark:before:from-card dark:after:from-card"
            className="bg-muted dark:bg-card min-h-[50px] rounded-md"
          >
            <pre>
              <code>npx shadcn@latest add @alpine/[component-name]</code>
            </pre>
          </ScrollArea>
          <div className="font-medium">
            To setup the MCP server, run the following command:
          </div>
          <ScrollArea
            viewportClassName="p-8"
            maskClassName="before:from-muted after:from-muted dark:before:from-card dark:after:from-card"
            className="bg-muted dark:bg-card min-h-[50px] rounded-md"
          >
            <pre>
              <code>npx shadcn@latest mcp init</code>
            </pre>
          </ScrollArea>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  )
}

const registrySetupCode = `"registries": {
  "@alpine": "${process.env.NEXT_PUBLIC_BASE_URL}/r/{name}.json"
}
`
