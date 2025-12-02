import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextExpander from "./TextExpander";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-20 border border-primary-800 py-3 px-6 md:px-10 mb-12 md:mb-24">
      <div className="relative h-64 sm:h-80 md:h-auto md:scale-[1.10] md:-translate-x-3">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover object-center md:object-top"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h3
          className="text-accent-100 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          mb-6 md:mb-8 
          md:translate-x-[-254px] 
          md:bg-primary-950 
          md:p-6 md:pb-1 
          md:w-[150%]"
        >
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
