import background from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={background}
          fill
          quality={95}
          placeholder="blur"
          alt="Mountains and forests with two cabins"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/30 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-6 sm:mb-8 md:mb-10 tracking-tight font-normal drop-shadow-lg">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="inline-block bg-accent-500 px-8 py-4 text-primary-950 text-base sm:text-lg font-semibold hover:bg-accent-400 transition-all shadow-xl"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
