import { cn } from "@/lib/utils"
import Image from "next/image"

export function Hero({
  heading,
  subheading,
  imageUrl,
  className,
  children,
}: {
  heading: string
  subheading: string
  imageUrl: string
} & React.ComponentProps<"section">) {
  return (
    <section className={cn("w-full py-8 md:py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={heading}
            width={1200}
            height={450}
            className="aspect-square w-full rounded-lg object-cover md:aspect-[120/45]"
          />
          <div className="flex items-center justify-center py-8 md:absolute md:inset-0 md:bg-black/50">
            <div className="mx-auto flex max-w-xl flex-col items-center gap-2 text-center text-balance md:text-white">
              <h2 className="text-shadow text-3xl font-bold tracking-tighter lg:text-5xl xl:text-6xl">
                {heading}
              </h2>
              <p className="text-shadow text-balance lg:text-xl">
                {subheading}
              </p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
