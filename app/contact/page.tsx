"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0B2520] via-[#134E4A] to-[#0B2520] text-white py-16 lg:py-20 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dubai • Wholesale Inquiries</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Contact <span className="italic text-amber-300">A G Ventures</span>
          </h1>

          <p className="text-sm sm:text-base text-emerald-50/85 max-w-2xl leading-relaxed">
            Reach out to our wholesale and distribution desk in Dubai for brand inquiries, trade partnerships, and office appointments.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8E5] shadow-2xs space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    Head Office & Trade Desk
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#0B2520] mt-1">
                    A G Ventures
                  </h2>
                  <p className="text-xs text-[#52605C] mt-1">
                    Wholesale Trading & Distribution — Perfumes, Skin Care & Cosmetics
                  </p>
                </div>

                <div className="space-y-5 pt-2 border-t border-[#E2E8E5]">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2520]">
                        Office Location
                      </h3>
                      <p className="text-sm text-[#52605C] mt-1">
                         104 Al Qasmi Building Naif Deira Dubai UAE.
                      </p>
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2520]">
                        Direct Telephone
                      </h3>
                      <a
                        href="tel:+97143470618"
                        className="inline-block text-base font-bold text-[#0B2520] hover:text-amber-700 transition-colors mt-1"
                      >
                        +97143470618
                      </a>
                      <p className="text-xs text-[#52605C]">
                        Available during business hours for trade inquiries
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2520]">
                        Working Hours
                      </h3>
                      <p className="text-sm text-[#52605C] mt-1">
                        Monday – Saturday: 9:00 AM – 7:00 PM (GST)
                      </p>
                      <p className="text-xs text-[#52605C]">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Dubai Map */}
              <div className="rounded-2xl overflow-hidden border border-[#E2E8E5] bg-white shadow-2xs h-64">
                <iframe
                  title="A G Ventures Dubai Location"
                  src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: B2B Trade Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2E8E5] shadow-sm">
                <div className="space-y-2 mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
                    <Building2 className="w-4 h-4 text-teal-700" />
                    <span>B2B Trade Inquiry</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#0B2520]">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#52605C]">
                    Share your company details and the brand categories you are interested in sourcing. Our team will respond promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-teal-50/70 border border-teal-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B2520]">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-[#52605C] max-w-md mx-auto">
                      Thank you for contacting <strong>A G Ventures</strong>. Our wholesale desk will review your message shortly. For immediate assistance, please call{" "}
                      <a href="tel:+97143470618" className="font-bold text-[#0B2520] underline">
                        +97143470618
                      </a>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#0B2520] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2520]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-sm text-[#0B2520] focus:outline-none focus:border-[#C8A252]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2520]">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Trading / Retail Company"
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-sm text-[#0B2520] focus:outline-none focus:border-[#C8A252]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2520]">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 000 0000"
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-sm text-[#0B2520] focus:outline-none focus:border-[#C8A252]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2520]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-sm text-[#0B2520] focus:outline-none focus:border-[#C8A252]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2520]">
                        Brand Category of Interest
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-sm text-[#0B2520] focus:outline-none focus:border-[#C8A252]">
                        <option value="all">All Categories (Perfumes, Skin Care & Cosmetics)</option>
                        <option value="perfume">Perfume Brands</option>
                        <option value="skin">Skin Care Brands</option>
                        <option value="beauty-cosmetics">Beauty & Cosmetics Brands</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B2520]">
                        Inquiry Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Let us know which brands or distribution partnerships you would like to discuss..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F9F8] border border-[#E2E8E5] text-sm text-[#0B2520] focus:outline-none focus:border-[#C8A252]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#0B2520] via-[#134E4A] to-[#0B2520] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:shadow-lg transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Trade Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}