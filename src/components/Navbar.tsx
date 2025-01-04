"use client";

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="text-[#000000] bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <h1 className="text-5xl font-bold text-black ml-12">Hekto</h1>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex flex-wrap items-center text-gray-500 text-[17px] space-x-6 font-semibold">
          <Link href="/" className="hover:text-[#FB2E86]">Home</Link>
          <Link href="/productsPage" className="hover:text-[#FB2E86]">Products</Link> {/* Updated from "ProductsPage" */}
          <Link href="/blog" className="hover:text-[#FB2E86]">Blog</Link>
          <Link href="/shop" className="hover:text-[#FB2E86]">Shop</Link>
          <Link href="/about" className="hover:text-[#FB2E86]">About</Link> {/* Renamed as per your changes */}
          <Link href="/contact" className="hover:text-[#FB2E86]">Contact</Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-[300px] px-4 py-2 rounded-md border focus:outline-none focus:ring-2"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FB2E86] p-2">
              <RiSearchLine className="text-white text-2xl" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 space-y-2">
          <Link href="/" className="block text-gray-500 hover:text-[#FB2E86]">Home</Link>
          <Link href="/about" className="block text-gray-500 hover:text-[#FB2E86]">About</Link>
          <Link href="/products" className="block text-gray-500 hover:text-[#FB2E86]">Products</Link>
          <Link href="/blog" className="block text-gray-500 hover:text-[#FB2E86]">Blog</Link>
          <Link href="/shop" className="block text-gray-500 hover:text-[#FB2E86]">Shop</Link>
          <Link href="/contact" className="block text-gray-500 hover:text-[#FB2E86]">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;