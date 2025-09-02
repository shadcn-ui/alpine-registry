import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/alpine/ui/card"
import { StarIcon } from "lucide-react"
import Image from "next/image"

export function ListingCard({
  name,
  location,
  imageUrl,
  rating,
  reviewCount,
  className,
}: {
  name: string
  location: string
  imageUrl: string
  rating: number
  reviewCount: number
} & React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "aspect-square w-full min-w-0 gap-4 border-0 bg-transparent p-0",
        className
      )}
    >
      <CardContent className="p-0">
        <Image
          src={imageUrl}
          alt={name}
          width={600}
          height={600}
          className="aspect-square w-full rounded-lg object-cover"
        />
      </CardContent>
      <CardHeader className="gap-0 p-0">
        <CardTitle className="flex items-center gap-2 text-sm font-medium tracking-tight">
          {name}{" "}
          <div className="ml-auto flex items-center gap-1">
            <StarIcon className="fill-foreground size-3" /> {rating} (
            {reviewCount})
          </div>
        </CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
    </Card>
  )
}
