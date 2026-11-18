import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import {
  ArrowRight,
  Sparkles,
  Droplets,
  Palette,
  Building2,
  PackageCheck,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Globe2,
  Truck,
  CheckCircle2,
  Clock,
  Layers,
  Award,
  Handshake,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Executive Trust Strip */}
      <section className="bg-gradient-to-r from-[#0B2520] via-[#134E4A] to-[#0B2520] text-white py-8 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white">100% Genuine</div>
                <div className="text-xs text-emerald-100/75">Direct Brand Sourcing</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-400/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white">Dubai</div>
                <div className="text-xs text-emerald-100/75">Strategic UAE Trade Hub</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-400/30 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5 text-rose-300" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white">GCC & Global</div>
                <div className="text-xs text-emerald-100/75">Import & Export Network</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Handshake className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white">B2B Dedicated</div>
                <div className="text-xs text-emerald-100/75">Wholesale & Retail Supply</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Overview & Strategic Positioning */}
      <section className="py-24 bg-white border-b border-[#E2E8E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>About A G Ventures</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B2520] tracking-tight leading-[1.15]">
                Bridging Global Beauty Houses with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-[#C8A252] to-teal-800 italic">
                  Regional Wholesale Markets
                </span>
              </h2>

              <p className="text-[#52605C] text-base leading-relaxed">
                Operating from <strong className="text-[#0B2520]">Dubai</strong>—the historic epicenter of Middle Eastern fragrance and beauty commerce—<strong className="text-[#0B2520]">A G Ventures</strong> is an established trading and distribution enterprise dedicated to high-demand perfumes, skincare, and cosmetics brands.
              </p>

              <p className="text-[#52605C] text-sm leading-relaxed">
                We focus exclusively on B2B brand representation and wholesale supply. By maintaining strong relationships with international brand owners and authorized regional suppliers, we ensure consistent stock availability, transparent documentation, and reliable order fulfillment for retail chains, pharmacies, duty-free operators, and sub-distributors.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E2E8E5]">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2520]">03</h3>
                  <p className="text-[11px] text-amber-800 font-semibold uppercase tracking-wider mt-1">
                    Core Verticals
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2520]">100%</h3>
                  <p className="text-[11px] text-teal-800 font-semibold uppercase tracking-wider mt-1">
                    Authentic Brands
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2520]">UAE</h3>
                  <p className="text-[11px] text-rose-800 font-semibold uppercase tracking-wider mt-1">
                    104 Al Qasmi Building Naif Deira Dubai UAE.
                  </p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B2520] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#134E4A] transition-all shadow-sm group"
                >
                  <span>Discover Our Company</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0B2520] hover:text-amber-700 transition-colors"
                >
                  <span>Browse Brand Portfolio →</span>
                </Link>
              </div>
            </div>

            {/* Right 2x2 Jewel-Toned Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-7 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-[#F7F9F8] border border-amber-200/70 space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                  Fine Fragrance Trading
                </h3>
                <p className="text-xs text-[#52605C] leading-relaxed">
                  Curated wholesale distribution of prestigious European designer perfumes, niche artisanal scents, and Arabian oriental fragrance houses.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-[#F7F9F8] border border-teal-200/70 space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-xs">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                  Skincare & Cosmetics
                </h3>
                <p className="text-xs text-[#52605C] leading-relaxed">
                  Comprehensive brand portfolio covering clinical dermo-cosmetics, daily hydration skincare, and high-turnover color cosmetics.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-gradient-to-br from-rose-50/70 via-white to-[#F7F9F8] border border-rose-200/70 space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-rose-700 text-white flex items-center justify-center shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                  Dubai Logistics Advantage
                </h3>
                <p className="text-xs text-[#52605C] leading-relaxed">
                  Positioned near Dubai's major ports, air cargo hubs, and wholesale souks for rapid local delivery and international re-export.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-[#F7F9F8] border border-emerald-200/70 space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#0B2520] text-amber-400 flex items-center justify-center shadow-xs">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                  Direct Trade Desk
                </h3>
                <p className="text-xs text-[#52605C] leading-relaxed">
                  Personalized account coordination, brand availability verification, and direct consultation at our Dubai office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Core Distribution Divisions (Color-Coded) */}
      <section className="py-24 bg-[#F7F9F8] border-b border-[#E2E8E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Brand Portfolio Divisions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2520]">
              Three Specialized Beauty Verticals
            </h2>
            <p className="text-sm sm:text-base text-[#52605C] leading-relaxed">
              A G Ventures focuses on brand-level wholesale distribution across three dedicated categories. Explore our authorized brand roster within each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Division 01: Perfume */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8E5] shadow-sm hover:border-amber-400 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="h-2 bg-gradient-to-r from-amber-500 via-[#C8A252] to-amber-700" />
                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Division 01
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2520]">
                    Perfume Brands
                  </h3>

                  <p className="text-sm text-[#52605C] leading-relaxed">
                    Wholesale distribution of internationally acclaimed fragrance houses, spanning luxury Eau de Parfums, classic designer scents, and rich Arabian oud collections.
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs text-[#0B2520] font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>European & International Designer Houses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Arabic Luxury, Oud & Niche Perfumery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Gift Sets, Body Mists & Travel Editions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-8 py-5 bg-amber-50/40 border-t border-[#E2E8E5]">
                <Link
                  href="/products#perfume"
                  className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-[0.15em] text-amber-900 group-hover:text-amber-700 transition-colors"
                >
                  <span>Explore Perfume Brands</span>
                  <ArrowRight className="w-4 h-4 text-amber-600 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Division 02: Skin Care */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8E5] shadow-sm hover:border-teal-500 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="h-2 bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-700" />
                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      Division 02
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      <Droplets className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2520]">
                    Skin Care Brands
                  </h3>

                  <p className="text-sm text-[#52605C] leading-relaxed">
                    Trusted wholesale supply of globally recognized skincare brands, formulated for clinical efficacy, daily hydration, sun protection, and dermatological care.
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs text-[#0B2520] font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Dermo-Cosmetic & Pharmacy Skincare Lines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Serums, Moisturizers & Anti-Aging Ranges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Cleansers, Sun Care & Botanical Treatments</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-8 py-5 bg-teal-50/40 border-t border-[#E2E8E5]">
                <Link
                  href="/products#skin"
                  className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-[0.15em] text-teal-900 group-hover:text-teal-700 transition-colors"
                >
                  <span>Explore Skin Care Brands</span>
                  <ArrowRight className="w-4 h-4 text-teal-600 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Division 03: Beauty & Cosmetics */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8E5] shadow-sm hover:border-rose-400 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="h-2 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-700" />
                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      Division 03
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center group-hover:bg-rose-700 group-hover:text-white transition-colors">
                      <Palette className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2520]">
                    Beauty & Cosmetics
                  </h3>

                  <p className="text-sm text-[#52605C] leading-relaxed">
                    High-velocity international makeup and beauty brands tailored for department stores, beauty boutiques, salons, and regional retail distributors.
                  </p>

                  <ul className="space-y-2.5 pt-2 text-xs text-[#0B2520] font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Face, Lip & Eye Color Cosmetics Brands</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Professional Salon & Makeup Artist Lines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Nail Care & Beauty Essentials</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-8 py-5 bg-rose-50/40 border-t border-[#E2E8E5]">
                <Link
                  href="/products#beauty-cosmetics"
                  className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-[0.15em] text-rose-900 group-hover:text-rose-700 transition-colors"
                >
                  <span>Explore Cosmetics Brands</span>
                  <ArrowRight className="w-4 h-4 text-rose-600 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Who We Serve (B2B Trade Partners) */}
      <section className="py-24 bg-white border-b border-[#E2E8E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Wholesale Distribution Network
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2520]">
                Built for Trade & Retail Partners
              </h2>
            </div>
            <p className="text-sm text-[#52605C] max-w-md">
              We tailor our brand supply solutions to meet the volume, authenticity, and scheduling demands of commercial buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Retail Chains & Boutiques",
                desc: "Consistent brand replenishment for multi-branch perfume stores, department counters, and beauty boutiques.",
                accent: "border-t-amber-500",
              },
              {
                step: "02",
                title: "Regional Sub-Distributors",
                desc: "Bulk pallet and master-carton supply for wholesale traders across the UAE, GCC, and international markets.",
                accent: "border-t-teal-600",
              },
              {
                step: "03",
                title: "Pharmacies & Wellness",
                desc: "Authentic skincare and dermo-cosmetic brand allocations for pharmacy groups and specialized clinics.",
                accent: "border-t-rose-500",
              },
              {
                step: "04",
                title: "E-Commerce & Duty Free",
                desc: "Verified batch-coded inventory with complete brand provenance for online beauty platforms and travel retail.",
                accent: "border-t-[#0B2520]",
              },
            ].map((partner) => (
              <div
                key={partner.step}
                className={`p-7 rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] border-t-4 ${partner.accent} space-y-4`}
              >
                <span className="font-mono text-xs font-bold text-[#52605C]">
                  PARTNER SEGMENT // {partner.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                  {partner.title}
                </h3>
                <p className="text-xs text-[#52605C] leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How Our Wholesale Process Works */}
      <section className="py-24 bg-[#F7F9F8] border-b border-[#E2E8E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Streamlined B2B Workflow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2520]">
              How to Partner With A G Ventures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white p-8 rounded-2xl border border-[#E2E8E5] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 font-serif text-xl font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                Review Brand Categories
              </h3>
              <p className="text-xs text-[#52605C] leading-relaxed">
                Explore our Perfume, Skin Care, and Beauty & Cosmetics brand directories to identify the international labels suited for your market.
              </p>
            </div>

            <div className="relative bg-white p-8 rounded-2xl border border-[#E2E8E5] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 font-serif text-xl font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                Connect With Our Dubai Desk
              </h3>
              <p className="text-xs text-[#52605C] leading-relaxed">
                Reach out directly via phone at <strong className="text-[#0B2520]">+97143470618</strong> or visit our Dubai office to discuss brand availability and trade requirements.
              </p>
            </div>

            <div className="relative bg-white p-8 rounded-2xl border border-[#E2E8E5] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 font-serif text-xl font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                Allocation & Dispatch
              </h3>
              <p className="text-xs text-[#52605C] leading-relaxed">
                Once trade terms are finalized, our logistics team coordinates secure packaging, documentation, and timely dispatch from Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Dubai Office Wholesale CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#0B2520] via-[#134E4A] to-[#0B2520] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dubai • United Arab Emirates</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Establish a Direct Wholesale Partnership
          </h2>

          <p className="text-sm sm:text-base text-emerald-50/85 max-w-2xl mx-auto leading-relaxed">
            Whether you are sourcing luxury fragrances, clinical skincare, or beauty cosmetics in bulk, our Dubai trading desk is ready to assist your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:+97143470618"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B2520] font-bold text-xs uppercase tracking-[0.16em] hover:from-white hover:to-white transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Wholesale Desk: +97143470618</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 text-white border border-white/25 font-semibold text-xs uppercase tracking-[0.16em] hover:border-amber-400 hover:bg-white/15 transition-all"
            >
              <span>Office Location & Inquiry</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-100/70">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Mon – Sat: 9:00 AM – 7:00 PM (GST)
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-300" />
              Perfumes • Skin Care • Beauty Cosmetics
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}