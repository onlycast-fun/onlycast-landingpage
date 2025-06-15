"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND_ASSETS } from "@/lib/constants";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "About", id: "about" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "Ecosystem", id: "ecosystem" },
    { name: "Q&A", id: "qa" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={BRAND_ASSETS.logo || "/placeholder.svg"}
              alt="OnlyCast Logo"
              className="w-8 h-8 mr-3"
              crossOrigin="anonymous"
            />
            <h1
              className="text-2xl font-bold text-orange-500"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              OnlyCast
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="cursor-pointer text-stone-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-500"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 hover:text-orange-500 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="text-stone-700 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
