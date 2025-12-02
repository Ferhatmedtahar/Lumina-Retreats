import "@/app/_styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s / Lumina Retreats",
    default: "Welcome / Lumina Retreats",
  },
  description:
    "Luxurious cabin hotel , located in the heart of the Italian dolomites , surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased relative bg-primary-950 text-primary-100 min-h-screen flex flex-col selection:text-accent-400 selection:bg-primary-800 `}
      >
        <Header />
        <div className="flex-1  grid">
          <main className=" w-full">
            <ReservationProvider>
              {children}
              <Analytics />
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
