import Image from "next/image";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideBar() {
  return (
    <aside className="flex h-screen w-48 flex-col border-r px-6 py-8">
      <Link href="/" className="mb-12">
        <Image
          src="/scooter.svg"
          alt="Coddiwomple Art"
          width={149}
          height={150}
        />
      </Link>

      <nav className="flex flex-col gap-2">
        <NavLinks />
      </nav>
    </aside>
  );
}
