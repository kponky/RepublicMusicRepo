"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface Menu {
  name: string;
  to: string;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    // <nav
    //   className={`fixed top-0 w-full transition-all duration-300 z-50
    //   ${scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}
    // `}
    // >
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <Link href="/" className="text-primary font-bold text-3xl">
    //         Public Records
    //       </Link>
    //       <ul className="flex items-center p-[10px]">
    //         {navlist.map(({ name, to }, i) => {
    //           return (
    //             <li key={i}>
    //               <Link
    //                 href={to}
    //                 className="text-primary hover:text-white transition text-2xl font-medium mx-4 "
    //               >
    //                 {name}
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 
    ${scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-3xl">
            Public Records
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-primary focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul
            className={`flex-col md:flex-row flex md:flex items-center p-[10px]  md:items-center absolute md:static left-0 w-full md:w-auto transition-all duration-300 ${
              menuOpen ? "h-screen top-16 gap-10 flex items-center justify-center" : "top-[-200px]" // this is to Adjust to show/hide the menu
            } md:top-0 bg-black md:bg-transparent`}
          >
            {navlist.map(({ name, to }, i) => (
              <li key={i}>
                <Link
                  href={to}
                  className="text-primary hover:text-white transition text-2xl font-bold mx-4"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
