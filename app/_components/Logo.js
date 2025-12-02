import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-10">
      <Image src={logo} height={50} width={50} alt="desc" quality={95} />
      <span className="text-sm lg:text-xl font-semibold text-primary-100">
        Lumina Retreats
      </span>
    </Link>
  );
}

export default Logo;
