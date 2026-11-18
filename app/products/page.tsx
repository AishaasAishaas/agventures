"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Droplets,
  Palette,
  Search,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

type CategoryId = "all" | "perfume" | "skin" | "beauty-cosmetics";

interface BrandItem {
  name: string;
  origin: string;
  segment: string;
  category: Exclude<CategoryId, "all">;
}

// Replace or expand these arrays with the exact brands A G Ventures distributes
const BRAND_DATA: BrandItem[] = [
  // Perfume Brands
  { name: "Maison Lumière Paris", origin: "France", segment: "Luxury Eau de Parfum", category: "perfume" },
  { name: "Al Oud Al Malaki", origin: "UAE", segment: "Oriental & Niche Oud", category: "perfume" },
  { name: "Atelier Milano Profumi", origin: "Italy", segment: "Designer Fragrances", category: "perfume" },
  { name: "Velours & Ambre", origin: "France", segment: "Prestige Collections", category: "perfume" },
  { name: "Qasr Al Musk", origin: "GCC", segment: "Traditional Attar & Oils", category: "perfume" },
  { name: "Eau Royale Genève", origin: "Switzerland", segment: "Artisanal Perfumery", category: "perfume" },

  // Skin Care Brands
  { name: "DermaPure Clinical", origin: "Switzerland", segment: "Dermo-Cosmetic Care", category: "skin" },
  { name: "Botanica Hydra", origin: "France", segment: "Daily Hydration & Serums", category: "skin" },
  { name: "K-Glow Laboratories", origin: "South Korea", segment: "Advanced Skin Treatments", category: "skin" },
  { name: "BioCellular Skincare", origin: "Germany", segment: "Anti-Aging & Repair", category: "skin" },
  { name: "Solis Shield", origin: "Spain", segment: "Sun Protection & Care", category: "skin" },
  { name: "AquaVita Organics", origin: "Italy", segment: "Botanical Cleansing Lines", category: "skin" },

  // Beauty & Cosmetics Brands
  { name: "VoguePalette Milano", origin: "Italy", segment: "Color Cosmetics & Face", category: "beauty-cosmetics" },
  { name: "Rouge Éclat Paris", origin: "France", segment: "Lip & Eye Collections", category: "beauty-cosmetics" },
  { name: "ProStudio Artistry", origin: "USA", segment: "Professional Makeup Lines", category: "beauty-cosmetics" },
  { name: "Lumière Velvet", origin: "UK", segment: "Complexion & Foundations", category: "beauty-cosmetics" },
  { name: "Nails & Couture", origin: "France", segment: "Nail Care & Enamels", category: "beauty-cosmetics" },
  { name: "GlamEssence", origin: "Germany", segment: "Everyday Beauty Essentials", category: "beauty-cosmetics" },
];

const SECTIONS = [
  {
    id: "perfume" as const,
    tag: "Division 01",
    title: "Perfume Brands",
    description:
      "Authorized wholesale brand portfolio spanning French and Italian designer fragrance houses, niche perfumery, and luxury Arabian oud collections.",
    icon: Sparkles,
    badgeStyle: "bg-amber-50 text-amber-800 border-amber-200",
    iconStyle: "bg-amber-600 text-white",
    cardHover: "hover:border-amber-400",
    originBadge: "bg-amber-50/80 text-amber-900 border-amber-200/70",
  },
  {
    id: "skin" as const,
    tag: "Division 02",
    title: "Skin Care Brands",
    description:
      "Trusted international skincare labels covering clinical dermo-cosmetics, targeted serums, hydration regimens, and dermatological sun protection.",
    icon: Droplets,
    badgeStyle: "bg-teal-50 text-teal-800 border-teal-200",
    iconStyle: "bg-teal-700 text-white",
    cardHover: "hover:border-teal-500",
    originBadge: "bg-teal-50/80 text-teal-900 border-teal-200/70",
  },
  {
    id: "beauty-cosmetics" as const,
    tag: "Division 03",
    title: "Beauty & Cosmetics Brands",
    description:
      "High-demand international makeup and beauty houses supplied in bulk to department stores, beauty retailers, salons, and regional distributors.",
    icon: Palette,
    badgeStyle: "bg-rose-50 text-rose-800 border-rose-200",
    iconStyle: "bg-rose-700 text-white",
    cardHover: "hover:border-rose-400",
    originBadge: "bg-rose-50/80 text-rose-900 border-rose-200/70",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const visibleSections = SECTIONS.filter(
    (sec) => selectedCategory === "all" || sec.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0B2520] via-[#134E4A] to-[#0B2520] text-white py-16 lg:py-20 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Wholesale Brand Directory</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Distributed <span className="italic text-amber-300">Brand Portfolio</span>
          </h1>

          <p className="text-sm sm:text-base text-emerald-50/85 max-w-2xl leading-relaxed">
            A G Ventures operates as a dedicated wholesale brand distributor in Dubai. Browse the international brands we represent across Perfumes, Skin Care, and Beauty & Cosmetics.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E2E8E5] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Categories" },
              { id: "perfume", label: "Perfume" },
              { id: "skin", label: "Skin Care" },
              { id: "beauty-cosmetics", label: "Beauty & Cosmetics" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as CategoryId)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-[#0B2520] text-white shadow-xs"
                    : "bg-[#F7F9F8] text-[#52605C] hover:text-[#0B2520] border border-[#E2E8E5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Brand Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#52605C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search brand name or origin..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F7F9F8] border border-[#E2E8E5] text-xs text-[#0B2520] placeholder:text-[#52605C] focus:outline-none focus:border-[#C8A252]"
            />
          </div>
        </div>
      </section>

      {/* Category Brand Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {visibleSections.map((section) => {
          const Icon = section.icon;
          const sectionBrands = BRAND_DATA.filter(
            (b) =>
              b.category === section.id &&
              (b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.segment.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-36 space-y-8"
            >
              {/* Section Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2E8E5] pb-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs ${section.iconStyle}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${section.badgeStyle}`}
                    >
                      {section.tag}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2520]">
                    {section.title}
                  </h2>

                  <p className="text-sm text-[#52605C] leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#52605C]">
                  Showing {sectionBrands.length}{" "}
                  {sectionBrands.length === 1 ? "Brand" : "Brands"}
                </div>
              </div>

              {/* Brands Grid (Brands Only — No Individual Products) */}
              {sectionBrands.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectionBrands.map((brand) => (
                    <div
                      key={brand.name}
                      className={`bg-white rounded-2xl p-6 border border-[#E2E8E5] ${section.cardHover} shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${section.originBadge}`}
                          >
                            Origin: {brand.origin}
                          </span>
                          <Building2 className="w-4 h-4 text-[#52605C]/50 group-hover:text-[#0B2520] transition-colors" />
                        </div>

                        <div>
                          <h3 className="font-serif text-2xl font-bold text-[#0B2520] group-hover:text-[#134E4A] transition-colors">
                            {brand.name}
                          </h3>
                          <p className="text-xs text-[#52605C] mt-1 font-medium">
                            {brand.segment}
                          </p>
                        </div>
                      </div>

                      <div className="pt-5 mt-5 border-t border-[#E2E8E5]/70 flex items-center justify-between">
                        <span className="text-[11px] text-[#52605C]">
                          Wholesale Supply Available
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0B2520] hover:text-amber-700 transition-colors"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-10 text-center border border-[#E2E8E5] text-sm text-[#52605C]">
                  No brands matched “{searchQuery}” in this category.
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Bottom Wholesale Brand List Inquiry CTA */}
      <section className="bg-white border-t border-[#E2E8E5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-serif text-3xl font-bold text-[#0B2520]">
            Looking for a Specific International Brand?
          </h2>
          <p className="text-sm text-[#52605C] max-w-xl mx-auto leading-relaxed">
            Our brand roster in Dubai is continuously updated. Contact our wholesale desk directly for current brand availability and trade distribution terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+97143470618"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0B2520] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#134E4A] transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: +97143470618</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F7F9F8] text-[#0B2520] border border-[#E2E8E5] text-xs font-semibold uppercase tracking-[0.15em] hover:border-amber-400 transition-colors"
            >
              <span>Contact Dubai Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}