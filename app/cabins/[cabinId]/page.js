import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  try {
    const { name } = await getCabin(params.cabinId);
    return { title: `Cabin ${name}` };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Cabin" };
  }
}

export async function generateStaticParams() {
  try {
    const cabins = await getCabins();
    const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
    return ids;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-4 sm:mt-8 px-4 sm:px-8 py-8 sm:py-12">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-6 sm:mb-10 text-accent-300">
          Reserve {name} today.{" "}
          <span className="block sm:inline">Pay on arrival.</span>
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
