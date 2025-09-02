import { AddCommand } from "@/components/add-command"
import { OpenInV0 } from "@/components/open-in-v0"
import * as React from "react"

import { blocks } from "@/components/blocks"
import registry from "@/registry.json"
import { Separator } from "@/registry/alpine/ui/separator"
import { registryItemSchema } from "shadcn/schema"

const getRegistryItemFromJson = React.cache((name: string) => {
  const registryItem = registry.items.find((item) => item.name === name)

  const result = registryItemSchema.safeParse(registryItem)
  if (!result.success) {
    return null
  }

  return result.data
})

export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-1 flex-col gap-8 px-4 py-8 md:gap-12">
      {blocks.map((block) => {
        const registryItem = getRegistryItemFromJson(block.name)
        if (!registryItem) {
          return null
        }

        return (
          <div key={registryItem.name} className="flex flex-col gap-4">
            <div className="flex min-w-0 flex-wrap items-center justify-between gap-y-2">
              <div className="flex items-center gap-2">
                <div className="line-clamp-1 text-sm font-medium">
                  {registryItem.title}
                </div>
                <Separator
                  orientation="vertical"
                  className="hidden !h-4 lg:flex"
                />
                <div className="text-muted-foreground line-clamp-1 hidden text-sm lg:flex">
                  {registryItem.description}
                </div>
              </div>
              <div className="flex gap-2">
                <AddCommand registryItem={registryItem} />
                <OpenInV0 name={registryItem.name} className="w-fit" />
              </div>
            </div>
            <div className="bg-muted/30 relative flex min-h-[400px] items-center justify-center rounded-lg border p-4 md:p-10">
              <block.component />
            </div>
          </div>
        )
      })}
    </main>
  )
}
