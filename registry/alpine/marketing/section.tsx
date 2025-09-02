import { cn } from "@/lib/utils"

export function Section({
  heading,
  subheading,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  heading: string
  subheading: string
}) {
  return (
    <section
      className={cn("w-full gap-6 py-10 lg:py-24", className)}
      {...props}
    >
      <div className="container mx-auto flex w-full flex-col gap-8 px-4">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-2 text-center text-balance">
          <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl xl:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground text-balance lg:text-xl">
            {subheading}
          </p>
        </div>
        {children}
      </div>
    </section>
  )
}
