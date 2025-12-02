import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { auth } from "@/app/_lib/auth";

async function Header() {
  const session = await auth();

  return (
    <header className="border-b border-primary-800 px-4 sm:px-6 md:px-8 py-2 sm:py-3  sticky top-0 bg-primary-950/90 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation session={session} />
      </div>
    </header>
  );
}

export default Header;
