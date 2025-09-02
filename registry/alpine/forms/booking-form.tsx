"use client"

import * as React from "react"
import { Button } from "@/registry/alpine/ui/button"
import { Input } from "@/registry/alpine/ui/input"
import { Label } from "@/registry/alpine/ui/label"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/alpine/ui/popover"
import { Calendar } from "@/registry/alpine/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"

export function ListingBookingForm({
  heading,
  subheading,
  className,
  ...props
}: {
  heading: string
  subheading: string
  className?: string
} & React.ComponentProps<"form">) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<DateRange>()

  const dateDisplay = React.useMemo(() => {
    if (!date?.from) {
      return "Select date"
    }

    if (date.from === date.to) {
      return format(date.from, "MMM d, yyyy")
    }

    if (!date.to) {
      return format(date.from, "MMM d, yyyy")
    }

    return `${format(date.from, "MMM d, yyyy")} - ${format(date.to, "MMM d, yyyy")}`
  }, [date])

  return (
    <form
      className={cn(
        "bg-background ring-border flex max-w-sm flex-col gap-4 rounded-lg p-6 shadow-lg ring md:shadow-2xl",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tighter">{heading}</h2>
        <p className="text-muted-foreground text-sm">{subheading}</p>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="location">Location</Label>
        <Input id="location" type="text" placeholder="United States" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="date">Date</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon />
              {dateDisplay}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="range"
              selected={date}
              onSelect={setDate}
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="guests">Guests</Label>
        <Input id="guests" type="number" placeholder="2" />
      </div>
      <div>
        <Button className="w-full">Search</Button>
      </div>
    </form>
  )
}
