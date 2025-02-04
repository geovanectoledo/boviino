"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SubmenuProps {
  menuItems: { id: number; label: string; link: string }[];
  isNavbarHidden: boolean;
}

export default function Submenu({ menuItems, isNavbarHidden }: SubmenuProps) {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-gray-50 border-b border-gray-200 transition-all duration-300 ${
        isFixed ? "fixed top-0 w-full z-40" : "relative mt-[64px]"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between overflow-x-auto">
        {/* Logo pequena aparece quando a navbar some */}
        {isNavbarHidden && (
          <Link href="/authenticated/dashboard">
            <Image
              src="/icons/logo-small-dark.svg"
              alt="Logo"
              width={18}
              height={24}
              className="h-auto mr-4"
            />
          </Link>
        )}

        {/* Menu de navegação */}
        <nav className="flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-sm px-3 py-2 rounded-md transition ${
                pathname === item.link
                  ? "text-[#1D3108] font-semibold border-b-2 border-[#1D3108]"
                  : "text-gray-600 hover:text-[#1D3108] hover:border-b-2 hover:border-[#A7E075]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}