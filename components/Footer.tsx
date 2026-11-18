import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2520] text-[#F7F9F8] border-t border-[#14453D] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 & 2: Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Mini Monogram Icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <polygon
                  points="24,2 44,13.5 44,34.5 24,46 4,34.5 4,13.5"
                  stroke="#C8A252"
                  strokeWidth="1.6"
                  fill="#0B2520"
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
              <span className="font-serif text-2xl font-bold tracking-[0.18em] text-white">
                A G VENTURES
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.22em] text-[#C8A252] font-semibold">
              Perfumes • Skin Care • Beauty Cosmetics
            </p>

            <p className="text-sm text-[#E2E8E5]/80 leading-relaxed max-w-sm pt-1">
              Established wholesale trading and distribution partner connecting international luxury fragrance and cosmetic manufacturers with regional and global retail networks.
            </p>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A252] mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-[#E2E8E5]/85">
              <li>
                <Link href="/" className="hover:text-[#C8A252] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C8A252] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C8A252] transition-colors">
                  Brand Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8A252] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Brand Categories */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A252] mb-4">
              Categories
            </h3>
            <ul className="space-y-3 text-sm text-[#E2E8E5]/85">
              <li>
                <Link href="/products#perfume" className="hover:text-[#C8A252] transition-colors flex items-center gap-1">
                  <span>Perfumes</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C8A252]" />
                </Link>
              </li>
              <li>
                <Link href="/products#skin" className="hover:text-[#C8A252] transition-colors flex items-center gap-1">
                  <span>Skin Care</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C8A252]" />
                </Link>
              </li>
              <li>
                <Link href="/products#beauty-cosmetics" className="hover:text-[#C8A252] transition-colors flex items-center gap-1">
                  <span>Beauty & Cosmetics</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C8A252]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Office Location & Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A252] mb-4">
              Wholesale Desk
            </h3>
            <ul className="space-y-3 text-sm text-[#E2E8E5]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A252] shrink-0 mt-0.5" />
                <span> 104 Al Qasmi Building Naif Deira Dubai UAE.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A252] shrink-0" />
                <a
                  href="tel:+97143470618"
                  className="font-medium text-white hover:text-[#C8A252] transition-colors"
                >
                  +97143470618
                </a>
              </li>
              <li className="text-xs text-[#E2E8E5]/60 pt-2 border-t border-white/10">
                Mon – Sat: 9:00 AM – 7:00 PM (GST)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E2E8E5]/60">
          <p>© {currentYear} A G Ventures. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Wholesale & Distribution</span>
            
            <span> 104 Al Qasmi Building Naif Deira Dubai UAE.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}