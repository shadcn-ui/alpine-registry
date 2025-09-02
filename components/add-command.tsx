"use client"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/alpine/ui/button"
import { CheckIcon } from "lucide-react"
import { registryItemSchema } from "shadcn/schema"
import { toast } from "sonner"
import { z } from "zod"

export function AddCommand({
  registryItem,
}: {
  registryItem: z.infer<typeof registryItemSchema>
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "rounded-sm !pl-2",
        isCopied &&
          "text-primary !bg-primary/15 border-primary/25 dark:!bg-primary/15 dark:border-primary/25 dark:text-green-500"
      )}
      onClick={() => {
        copyToClipboard(`npx shadcn@latest add @alpine/${registryItem.name}`)
        toast.success(`npx command copied to clipboard`)
      }}
    >
      <div className="relative size-4">
        <CheckIcon
          className={cn(
            "text-primary size-4 transition-transform dark:text-green-500",
            !isCopied && "scale-0"
          )}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className={cn(
            "absolute inset-0 size-4 transition-transform",
            isCopied && "scale-0"
          )}
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
      </div>
      {`@alpine/${registryItem.name}`}
    </Button>
  )
}
