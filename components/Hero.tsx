import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Globe2, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9F8] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E2E8E5]">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#C8A252]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#0B2520]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2520]/5 border border-[#0B2520]/10 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B2520]">
              <span className="w-2 h-2 rounded-full bg-[#C8A252]" />
              Dubai • Wholesale & Distribution Desk
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B2520] leading-[1.12]">
              Global Distribution of <span className="italic text-[#C8A252]">Luxury Perfumes</span> & Cosmetics.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#52605C] max-w-2xl leading-relaxed font-sans">
              A G Ventures is your established trading partner in Dubai, supplying premium international perfume brands, skincare, and beauty cosmetics to wholesalers and retailers across regional and global markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-md bg-[#0B2520] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#14453D] transition-all shadow-md group"
              >
                <span>Explore Brand Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#C8A252] transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+97143470618"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-md bg-white text-[#0B2520] border border-[#E2E8E5] text-xs font-semibold uppercase tracking-[0.16em] hover:border-[#C8A252] hover:bg-[#F7F9F8] transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#C8A252]" />
                <span>Call Wholesale Desk: +97143470618</span>
              </a>
            </div>

            {/* Trust Points / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E2E8E5]">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#0B2520] font-serif text-xl font-bold">
                  <Award className="w-5 h-5 text-[#C8A252]" />
                  <span>100%</span>
                </div>
                <p className="text-xs text-[#52605C] uppercase tracking-wider font-medium">Authentic Brands</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#0B2520] font-serif text-xl font-bold">
                  <Globe2 className="w-5 h-5 text-[#C8A252]" />
                  <span>Global</span>
                </div>
                <p className="text-xs text-[#52605C] uppercase tracking-wider font-medium">B2B Shipping</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#0B2520] font-serif text-xl font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#C8A252]" />
                  <span>Dubai</span>
                </div>
                <p className="text-xs text-[#52605C] uppercase tracking-wider font-medium">Dubai Hub</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Brand Card / Showcase Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#C8A252]/40 to-[#0B2520]/20 blur-sm -z-10" />

              {/* Card Container */}
              <div className="bg-white rounded-xl p-8 shadow-xl border border-[#E2E8E5] space-y-6">
                
                <div className="flex items-center justify-between border-b border-[#E2E8E5] pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A252] font-semibold">Distribution Categories</span>
                    <h3 className="font-serif text-xl font-bold text-[#0B2520] mt-0.5">Wholesale Portfolio</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#F7F9F8] text-[#0B2520] font-mono text-xs border border-[#E2E8E5]">
                    B2B ONLY
                  </span>
                </div>

                {/* Category Preview Rows */}
                <div className="space-y-3.5">
                  <Link
                    href="/products#perfume"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#F7F9F8] hover:bg-[#0B2520] hover:text-white transition-all group border border-[#E2E8E5]/60"
                  >
                    <div>
                      <span className="text-sm font-semibold tracking-wide">Perfume & Fragrances</span>
                      <p className="text-xs text-[#52605C] group-hover:text-[#E2E8E5]/80 mt-0.5">Designer & Oriental House Collections</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C8A252] shrink-0" />
                  </Link>

                  <Link
                    href="/products#skin"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#F7F9F8] hover:bg-[#0B2520] hover:text-white transition-all group border border-[#E2E8E5]/60"
                  >
                    <div>
                      <span className="text-sm font-semibold tracking-wide">Skin Care Brands</span>
                      <p className="text-xs text-[#52605C] group-hover:text-[#E2E8E5]/80 mt-0.5">Professional & Retail Skincare Lines</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C8A252] shrink-0" />
                  </Link>

                  <Link
                    href="/products#beauty-cosmetics"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#F7F9F8] hover:bg-[#0B2520] hover:text-white transition-all group border border-[#E2E8E5]/60"
                  >
                    <div>
                      <span className="text-sm font-semibold tracking-wide">Beauty & Cosmetics</span>
                      <p className="text-xs text-[#52605C] group-hover:text-[#E2E8E5]/80 mt-0.5">Global Makeup & Cosmetic Brands</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C8A252] shrink-0" />
                  </Link>
                </div>

                {/* Bottom Office Note */}
                <div className="pt-2 text-center text-xs text-[#52605C]">
                  Visit our trade office in <span className="font-semibold text-[#0B2520]">Dubai</span> or call <a href="tel:+97143470618" className="font-semibold text-[#0B2520] underline hover:text-[#C8A252]">+97143470618</a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}