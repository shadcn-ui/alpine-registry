"use client"

import * as React from "react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/alpine/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/alpine/ui/dialog"
import { CheckIcon, CopyIcon } from "lucide-react"

export function RegistrySetup({
  className,
}: React.ComponentProps<typeof Button>) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className="md:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Setup Registry</DialogTitle>
          <DialogDescription>
            Use the code below to configure the @alpine registry for your
            project.
          </DialogDescription>
        </DialogHeader>
        <div className="font-medium">
          Copy and paste the code into{" "}
          <code className="font-mono text-foreground">components.json</code>
        </div>
        <div className="relative min-w-0">
          <Button
            variant="outline"
            size="icon"
            className="absolute bg-background right-4 z-10 top-4 size-8 rounded-md"
            onClick={() => copyToClipboard(registrySetupCode)}
          >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
          </Button>
          <div className="overflow-x-auto bg-muted p-8 rounded-md min-h-[120px]">
            <pre className="text-sm font-mono">
              <code>{registrySetupCode}</code>
            </pre>
          </div>
        </div>
        <div className="font-medium">
          Then use the following command to add components:
        </div>
        <div className="overflow-x-auto bg-muted p-8 rounded-md min-h-[50px]">
          <pre className="text-sm font-mono">
            <code>npx shadcn@latest add @alpine/[component-name]</code>
          </pre>
        </div>
        <div className="font-medium">
          To setup the MCP server, run the following command:
        </div>
        <div className="overflow-x-auto bg-muted p-8 rounded-md min-h-[50px]">
          <pre className="text-sm font-mono">
            <code>npx shadcn@latest mcp init</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const registrySetupCode = `"registries": {
  "@alpine": "${process.env.NEXT_PUBLIC_BASE_URL}/r/{name}.json"
}
`
