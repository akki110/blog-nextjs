"use client";
import Link from "next/link";
import DarkModeToggle from "../ui/DarkMode";
import { Menu, X } from "@/lib/icons";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="flex justify-between items-center fixed top-0 w-full h-14 bg-space-indigo text-white z-50">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">MindSpill</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center gap-10">
              <ul className="flex items-center gap-5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
                <button className="bg-white text-black px-4 py-2 cursor-pointer border border-transparent hover:bg-space-indigo hover:text-white hover:border-flame hover:transition- hover:duration-300">
                  Subscribe
                </button>
              </ul>
              <DarkModeToggle />
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-60 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Off-canvas Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-space-indigo text-white z-70 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 left-4 p-2 hover:bg-white/10 rounded transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col h-full pt-20 px-6">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  onClick={closeMenu}
                  className="text-lg hover:text-flame transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="w-fit mt-8 bg-white text-black px-4 py-2 cursor-pointer border border-transparent hover:bg-flame hover:text-white hover:border-white transition-all duration-300">
            Subscribe
          </button>

          <div className="mt-8">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
