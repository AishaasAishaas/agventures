"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MapPin,
  ChevronDown,
  Sparkles,
  Droplets,
  Palette,
  ArrowUpRight,
  Clock,
} from "lucide-react";

const PRODUCT_CATEGORIES = [
  {
    name: "Perfume Brands",
    description: "Designer, niche & oriental fragrance houses",
    href: "/products#perfume",
    icon: Sparkles,
    tag: "01",
    badgeBg: "bg-amber-100 text-amber-800 border-amber-200",
    iconBg: "bg-amber-50 text-amber-700 group-hover/item:bg-amber-600 group-hover/item:text-white",
    hoverBorder: "hover:border-amber-300/80 hover:bg-amber-50/40",
  },
  {
    name: "Skin Care Brands",
    description: "Clinical, botanical & luxury daily care lines",
    href: "/products#skin",
    icon: Droplets,
    tag: "02",
    badgeBg: "bg-teal-100 text-teal-800 border-teal-200",
    iconBg: "bg-teal-50 text-teal-700 group-hover/item:bg-teal-700 group-hover/item:text-white",
    hoverBorder: "hover:border-teal-300/80 hover:bg-teal-50/40",
  },
  {
    name: "Beauty & Cosmetics",
    description: "Color cosmetics, palettes & beauty essentials",
    href: "/products#beauty-cosmetics",
    icon: Palette,
    tag: "03",
    badgeBg: "bg-rose-100 text-rose-800 border-rose-200",
    iconBg: "bg-rose-50 text-rose-700 group-hover/item:bg-rose-700 group-hover/item:text-white",
    hoverBorder: "hover:border-rose-300/80 hover:bg-rose-50/40",
  },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Rich Emerald-to-Teal Gradient Utility Ribbon */}
      <div
        className={`bg-gradient-to-r from-[#0B2520] via-[#134E4A] to-[#0B2520] text-[#F7F9F8] transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 py-0" : "max-h-14 opacity-100 py-2"
        } px-4 sm:px-6 lg:px-8 border-b border-[#C8A252]/30`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] tracking-wide">
         

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-emerald-100/70 uppercase tracking-[0.15em] text-[10px]">
              B2B Wholesale Contact:
            </span>
            <a
              href="tel:+97143470618"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 font-semibold text-amber-300 hover:bg-amber-400 hover:text-[#0B2520] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+97143470618</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md py-3 border-b border-[#E2E8E5]"
            : "bg-gradient-to-b from-white to-[#F7F9F8] py-4 border-b border-[#E2E8E5]"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        >
          {/* Brand Crest & Multi-Tone Wordmark */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-500/30 via-teal-500/20 to-rose-500/20 blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative transition-transform duration-300 group-hover:scale-105"
              >
                <defs>
                  <linearGradient id="crestGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0B2520" />
                    <stop offset="100%" stopColor="#134E4A" />
                  </linearGradient>
                  <linearGradient id="goldBorder" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#C8A252" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
                <polygon
                  points="24,2 44,13.5 44,34.5 24,46 4,34.5 4,13.5"
                  stroke="url(#goldBorder)"
                  strokeWidth="1.8"
                  fill="url(#crestGrad)"
                />
                <polygon
                  points="24,6.5 39.5,15.5 39.5,32.5 24,41.5 8.5,32.5 8.5,15.5"
                  stroke="#FCD34D"
                  strokeWidth="0.6"
                  strokeOpacity="0.45"
                />
                <text
                  x="24"
                  y="28"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="Georgia, serif"
                  fontSize="13.5"
                  fontWeight="600"
                  letterSpacing="1.2"
                >
                  AGV
                </text>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#0B2520] leading-none">
                A G VENTURES
              </span>
              <div className="flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.22em] mt-1.5 font-semibold">
                <span className="text-amber-700">Perfumes</span>
                <span className="text-[#C8A252]">•</span>
                <span className="text-teal-700">Skin</span>
                <span className="text-[#C8A252]">•</span>
                <span className="text-rose-700">Cosmetics</span>
              </div>
            </div>
          </Link>

          {/* Center Floating Pill Navigation (Desktop) */}
          <div className="hidden lg:flex items-center bg-[#F7F9F8] border border-[#E2E8E5] rounded-full p-1.5 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#0B2520] to-[#134E4A] text-white shadow-sm"
                          : "text-[#52605C] hover:text-[#0B2520] hover:bg-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                          isActive ? "text-amber-300" : "text-amber-600"
                        }`}
                      />
                    </Link>

                    {/* Jewel-Toned Architectural Mega-Dropdown */}
                    <div className="invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[560px]">
                      <div className="bg-white border border-[#E2E8E5] rounded-2xl shadow-2xl overflow-hidden">
                        {/* Gradient Header Strip */}
                        <div className="bg-gradient-to-r from-[#0B2520] via-[#134E4A] to-[#0B2520] px-6 py-3.5 flex items-center justify-between">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                            Authorized Brand Portfolio
                          </span>
                          <Link
                            href="/products"
                            className="text-[11px] text-white/90 hover:text-amber-300 flex items-center gap-1 transition-colors"
                          >
                            <span>View All Categories</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* 3 Color-Coded Category Cards */}
                        <div className="p-4 grid grid-cols-1 gap-2.5">
                          {PRODUCT_CATEGORIES.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <Link
                                key={cat.name}
                                href={cat.href}
                                className={`flex items-center justify-between p-3.5 rounded-xl border border-transparent transition-all group/item ${cat.hoverBorder}`}
                              >
                                <div className="flex items-center gap-4">
                                  <div
                                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shadow-xs ${cat.iconBg}`}
                                  >
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2.5">
                                      <span className="font-serif text-base font-bold text-[#0B2520]">
                                        {cat.name}
                                      </span>
                                      <span
                                        className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${cat.badgeBg}`}
                                      >
                                        {cat.tag}
                                      </span>
                                    </div>
                                    <p className="text-xs text-[#52605C] mt-0.5">
                                      {cat.description}
                                    </p>
                                  </div>
                                </div>

                                <ArrowUpRight className="w-4 h-4 text-[#52605C] group-hover/item:text-[#0B2520] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#0B2520] to-[#134E4A] text-white shadow-sm"
                      : "text-[#52605C] hover:text-[#0B2520] hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Area (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+97143470618"
              className="p-2.5 rounded-full border border-teal-200 bg-teal-50/70 text-teal-800 hover:bg-teal-700 hover:text-white transition-colors"
              title="Call +97143470618"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C8A252] to-[#B45309] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:from-[#0B2520] hover:to-[#134E4A] transition-all shadow-sm group"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-amber-300/70 bg-amber-50/60 text-[#0B2520] text-xs font-semibold uppercase tracking-wider hover:bg-amber-100/60 transition-colors"
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-rose-600" />
            ) : (
              <Menu className="w-4 h-4 text-amber-700" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8E5] shadow-2xl px-4 pt-4 pb-7 space-y-5">
          <div className="space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="rounded-xl border border-[#E2E8E5] overflow-hidden"
                  >
                    <div className="flex items-center justify-between bg-[#F7F9F8]">
                      <Link
                        href={link.href}
                        className={`flex-1 px-4 py-3 text-sm font-semibold uppercase tracking-wider ${
                          isActive ? "text-[#0B2520]" : "text-[#52605C]"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                        aria-label="Expand Product Categories"
                        className="px-4 py-3 text-[#0B2520] border-l border-[#E2E8E5]"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-amber-600 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileProductsOpen && (
                      <div className="bg-white p-2.5 space-y-1.5 border-t border-[#E2E8E5]">
                        {PRODUCT_CATEGORIES.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <Link
                              key={cat.name}
                              href={cat.href}
                              className={`flex items-center gap-3 p-2.5 rounded-lg border border-transparent transition-colors ${cat.hoverBorder}`}
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${cat.iconBg}`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-[#0B2520]">
                                  {cat.name}
                                </div>
                                <div className="text-[11px] text-[#52605C]">
                                  {cat.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#0B2520] to-[#134E4A] text-white"
                      : "text-[#52605C] hover:bg-[#F7F9F8] hover:text-[#0B2520]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Office Contact Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B2520] to-[#134E4A] text-white space-y-3">
            <div className="flex items-center gap-2 text-xs text-emerald-50/90">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span> 104 Al Qasmi Building Naif Deira Dubai UAE.</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="tel:+97143470618"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B2520] text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+97143470618</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/20"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}