import image1 from "@/public/about-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";

export const metadata = { title: "About" };
export const revalidate = 86400;

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="px-8 py-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-x-24 lg:gap-y-32 text-base lg:text-lg">
      <div className="lg:col-span-3 order-1">
        <h1 className="text-3xl sm:text-4xl mb-6 lg:mb-10 text-accent-400 font-medium">
          Welcome to Lumina Retreats
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our{" "}
            <span className="font-semibold text-accent-400">
              {cabins.length}
            </span>{" "}
            luxury cabins provide a cozy base, but the real freedom and peace
            you&apos;ll find in the surrounding mountains. Wander through lush
            forests, breathe in the fresh air, and watch the stars twinkle above
            from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 order-2">
        <div className="relative h-64 sm:h-80 lg:h-auto lg:aspect-square">
          <Image
            src={image1}
            placeholder="blur"
            fill
            quality={95}
            className="object-cover rounded-lg"
            alt="Family sitting around a fire pit in front of cabin"
          />
        </div>
      </div>

      <div className="lg:col-span-2 order-4 lg:order-3">
        <div className="relative h-64 sm:h-80 lg:h-auto lg:aspect-square">
          <Image
            fill
            src="/about-2.jpg"
            className="object-cover rounded-lg"
            alt="Family that manages Lumina Retreats"
          />
        </div>
      </div>

      <div className="lg:col-span-3 order-3 lg:order-4">
        <h1 className="text-3xl sm:text-4xl mb-6 lg:mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Since 1962, Lumina Retreats has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of Lumina
            Retreats, blending the timeless beauty of the mountains with the
            personal touch only a family business can offer. Here, you&apos;re
            not just a guest; you&apos;re part of our extended family. So join
            us at The Wild Oasis soon, where tradition meets tranquility, and
            every visit is like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="w-full flex items-center justify-center t mt-4 bg-accent-500  py-2 sm:py-3 text-primary-800 text-sm sm:text-base md:text-lg font-semibold hover:bg-accent-600 transition-all rounded-lg"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
