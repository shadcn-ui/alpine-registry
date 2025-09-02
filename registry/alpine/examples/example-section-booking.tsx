import { ListingBookingForm } from "@/registry/alpine/forms/booking-form"
import { Section } from "@/registry/alpine/marketing/section"
import Image from "next/image"

export function ExampleSectionWithBookingForm() {
  return (
    <Section
      heading="Wishlist-worthy cabins"
      subheading="From a hillside retreat overlooking the Smokies to a storybook cottage in California’s wine country."
    >
      <div className="relative flex flex-col-reverse items-start md:flex-row md:gap-8">
        <ListingBookingForm
          heading="Cabin Rentals"
          subheading="Spend some time in the great outdoors"
          className="-mt-12 md:absolute md:top-12 md:left-12 md:mt-0 md:w-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1634663476205-812f96a5705b"
          alt="Cabin"
          width={1200}
          height={600}
          className="aspect-square rounded-lg object-cover md:aspect-[2/1]"
        />
      </div>
    </Section>
  )
}
