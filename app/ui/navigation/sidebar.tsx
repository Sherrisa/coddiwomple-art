"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu when the viewport reaches the desktop breakpoint
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden h-screen w-48 flex-col border-r px-6 py-8 md:flex">
        <Link href="/" className="mb-12">
          <Image
            src="/scooter.svg"
            alt="Coddiwomple Art"
            width={100}
            height={100}
          />
        </Link>

        <nav className="flex flex-col gap-2">
          <NavLinks />
        </nav>
      </aside>

      {/* Mobile scooter — opens the menu */}
      {!menuOpen && (
        <button
          className="fixed left-4 top-4 z-50 md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Image
            src="/scooter.svg"
            alt="Open navigation"
            width={50}
            height={50}
          />
        </button>
      )}

      {/* Mobile sidebar — open */}
      {menuOpen && (
        <aside className=" h-screen w-30 shrink-0 border-r bg-white px-6 py-8">
          <button
            className="mb-12"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/scooter.svg"
              alt="Close navigation"
              width={50}
              height={50}
            />
          </button>

          <nav className="flex flex-col gap-2">
            <NavLinks />
          </nav>
        </aside>
      )}
    </>
  );
}