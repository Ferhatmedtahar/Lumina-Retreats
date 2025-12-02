import background from "@/public/bg.png";
import Image from "next/image";

export default function page() {
  return (
    <main className="mt-16 sm:mt-20 md:mt-24">
      <Image
        src={background}
        fill
        quality={95}
        placeholder="blur"
        alt="Mountains and forests with two cabins"
        className="object-cover object-center object-bottom"
      />

      {/* <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-6 sm:mb-8 md:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="inline-block bg-accent-500 px-6 py-4 sm:px-8 sm:py-6 text-primary-800 text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div> */}
    </main>
  );
}
