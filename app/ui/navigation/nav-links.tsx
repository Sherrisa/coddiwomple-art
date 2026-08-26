"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Enroll", href: "/enroll" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "block rounded-md px-3 py-2 text-sm font-medium",
            {
              "bg-gray-100": pathname === link.href,
            },
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}