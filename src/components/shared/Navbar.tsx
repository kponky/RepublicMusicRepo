"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Menu {
  name: string;
  to: string;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlist: Menu[] = [
    {
      name: "artists",
      to: "/artists",
    },
    {
      name: "videos",
      to: "/videos",
    },
    {
      name: "shop",
      to: "/shop",
    },
    {
      name: "subscribe",
      to: "/subscribe",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 
      ${scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-primary font-bold text-3xl">
            Public Records
          </Link>
          <ul className="flex items-center p-[10px]">
            {navlist.map(({ name, to }, i) => {
              return (
                <li key={i}>
                  <Link
                    href={to}
                    className="text-primary hover:text-white transition text-2xl font-medium mx-4 "
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
