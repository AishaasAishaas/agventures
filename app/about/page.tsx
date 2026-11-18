import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  Building2,
  Handshake,
  Award,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about A G Ventures, a wholesale trading and distribution company for perfumes, skincare, and beauty cosmetics located in Dubai.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0B2520] via-[#134E4A] to-[#0B2520] text-white py-16 lg:py-24 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile • Dubai</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-[1.12]">
            A Trusted Name in{" "}
            <span className="italic text-amber-300">Perfume & Beauty</span>{" "}
            Wholesale Distribution.
          </h1>

          <p className="text-sm sm:text-base text-emerald-50/85 max-w-2xl leading-relaxed">
             104 Al Qasmi Building Naif Deira Dubai UAE., A G Ventures connects prestigious fragrance, skincare, and cosmetics brands with commercial buyers across the UAE, GCC, and international markets.
          </p>
        </div>
      </section>

      {/* Main Company Story */}
      <section className="py-20 bg-white border-b border-[#E2E8E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2520]">
                Built on Authenticity, Supply Reliability, and Long-Term Trade Partnerships
              </h2>
              <p className="text-sm sm:text-base text-[#52605C] leading-relaxed">
                <strong className="text-[#0B2520]">A G Ventures</strong> was established with a clear mission: to serve as a dependable, transparent wholesale trading and distribution bridge between renowned beauty houses and commercial retail networks.
              </p>
              <p className="text-sm text-[#52605C] leading-relaxed">
                Operating out of <strong className="text-[#0B2520]">Dubai</strong>—one of the world's most active trading gateways for fragrances and personal care—we specialize in three core divisions: <span className="font-semibold text-amber-800">Perfumes</span>, <span className="font-semibold text-teal-800">Skin Care</span>, and <span className="font-semibold text-rose-800">Beauty & Cosmetics</span>.
              </p>
              <p className="text-sm text-[#52605C] leading-relaxed">
                Rather than operating as a retail storefront, our entire infrastructure is tailored for B2B efficiency—supporting wholesalers, retail chains, pharmacies, duty-free operators, and regional distributors with verified authentic brand allocations.
              </p>
            </div>

            {/* Strategic Location Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#F7F9F8] border border-[#E2E8E5] p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Strategic Headquarters
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0B2520] pt-2">
                     104 Al Qasmi Building Naif Deira Dubai UAE.
                  </h3>
                </div>

                <p className="text-xs text-[#52605C] leading-relaxed">
                  104 Al Qasmi Building Naif Deira Dubai UAE. Dubai sits at the crossroads of Middle Eastern, Asian, African, and European trade routes, allowing A G Ventures to offer unmatched logistical advantages:
                </p>

                <ul className="space-y-3 text-xs text-[#0B2520] font-medium">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Direct proximity to Dubai International Airport and major sea ports for rapid import/export.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Globe2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Central hub for GCC and international wholesale buyers visiting Dubai.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                    <span>Strict quality assurance and batch-verified inventory handling.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F7F9F8] border-b border-[#E2E8E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              Our Operating Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2520]">
              Core Pillars of A G Ventures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E5] space-y-4">
              <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                100% Brand Authenticity
              </h3>
              <p className="text-xs text-[#52605C] leading-relaxed">
                Every brand in our portfolio is sourced through verified, compliant supply channels, protecting the reputation of our retail and wholesale partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E5] space-y-4">
              <div className="w-11 h-11 rounded-xl bg-teal-700 text-white flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                Transparent B2B Trade
              </h3>
              <p className="text-xs text-[#52605C] leading-relaxed">
                Clear communication, accurate stock availability, and straightforward commercial terms designed for repeat wholesale relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E5] space-y-4">
              <div className="w-11 h-11 rounded-xl bg-rose-700 text-white flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2520]">
                Regional & Global Reach
              </h3>
              <p className="text-xs text-[#52605C] leading-relaxed">
                Equipped to fulfill local UAE wholesale deliveries as well as consolidated international export shipments from Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#0B2520]">
            Connect With Our Leadership & Trade Team
          </h2>
          <p className="text-sm text-[#52605C] max-w-xl mx-auto">
            Explore our distributed brands or contact our office in Dubai to discuss wholesale opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0B2520] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#134E4A] transition-colors"
            >
              <span>Explore Brand Portfolio</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
            <a
              href="tel:+97143470618"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F7F9F8] text-[#0B2520] border border-[#E2E8E5] text-xs font-semibold uppercase tracking-[0.15em] hover:border-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>+97143470618</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}