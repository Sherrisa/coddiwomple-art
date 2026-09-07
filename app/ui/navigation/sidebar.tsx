"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import NavLinks from "./nav-links";

export default function SideBar() {
  // Mobile navigation state
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop navigation state
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(true);

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
      <aside
        className={`sticky top-0 hidden h-screen shrink-0 flex-col border-r py-8 transition-all duration-300 md:flex ${
          desktopMenuOpen ? "w-48 px-6" : "w-20 px-3"
        }`}
      >
        <button
          className="mb-12"
          onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
        >
          <Image
            src="/scooter_berry.svg"
            alt={desktopMenuOpen ? "Close navigation" : "Open navigation"}
            width={50}
            height={50}
          />
        </button>

        {desktopMenuOpen && (
          <nav className="flex flex-col gap-2">
            <NavLinks />
          </nav>
        )}
      </aside>

      {/* Mobile scooter — opens the menu */}
      {!menuOpen && (
        <button
          className="fixed left-4 top-4 z-50 md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Image
            src="/scooter_berry.svg"
            alt="Open navigation"
            width={50}
            height={50}
          />
        </button>
      )}

      {/* Mobile sidebar — open */}
      {menuOpen && (
        <aside className="fixed left-0 top-0 z-40 w-30 bg-white px-6 py-8">
          <button className="mb-12" onClick={() => setMenuOpen(false)}>
            <Image
              src="/scooter_berry.svg"
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
