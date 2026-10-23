import React from "react";
import LayoutWithHeaderOffset from "../components/LayoutWithHeaderOffset";
import { useAppContext } from "../context/AppContext";
import { dummyProperties } from "../assets/data";
import Item from "../components/Item";
import {
  Phone,
  MessageCircle,
  Sparkles,
  Compass,
  CheckCircle2,
  Gift,
  Tag,
  ShieldCheck,
} from "lucide-react";

const Offers = () => {
  const { properties, propertiesLoading } = useAppContext();

  // Prefer backend properties, fall back to dummyProperties to ensure 6 items always show
  const allProperties =
    properties && properties.length > 0 ? properties : dummyProperties;

  // Section 1: First 6 properties for ZERO BROKERAGE PROPERTIES
  const zeroBrokerageProperties = allProperties.slice(0, 6);

  // Section 2: 6 properties for EXCLUSIVE RATES AND BROKERS DISCOUNT
  // If at least 12 properties exist, show the next 6; otherwise take another 6 or slice from 0 to 6
  const exclusiveRatesProperties =
    allProperties.length >= 12
      ? allProperties.slice(6, 12)
      : allProperties.length >= 6
      ? allProperties.slice(allProperties.length - 6)
      : allProperties.slice(0, 6);

  return (
    <LayoutWithHeaderOffset>
      <div className="min-h-screen bg-gradient-to-r from-[#fffbee] via-[#fffdf7] to-white py-12 md:py-16">
        <div className="max-padd-container">
          {/* Top Page Header Banner */}
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-amber-950 shadow-[0_0_15px_rgba(251,191,36,0.6)] mb-4">
              <Gift className="w-4 h-4" />
              Special Deals & Exclusive Benefits
            </div>
            <h1 className="h1 text-slate-900 tracking-tight">
              Featured Offers & Discounts
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Unlock unmatched savings with our zero brokerage inventory, exclusive developer markdowns, and complimentary expert Vastu consultations.
            </p>
          </div>

          {/* =========================================
              SECTION 1: ZERO BROKERAGE PROPERTIES
          ========================================= */}
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-amber-200/60 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Direct Listings • No Agent Fees
                </span>
                <h2 className="h2 text-slate-900 uppercase tracking-tight">
                  ZERO BROKERAGE PROPERTIES
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Save 100% on brokerage fees with verified direct seller & builder homes.
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg w-fit">
                Showing 6 Properties
              </span>
            </div>

            {/* Properties Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {zeroBrokerageProperties.map((property) => (
                <Item
                  key={`zero-${property._id || property.id}`}
                  property={property}
                />
              ))}
            </div>
          </section>

          {/* ========================================================
              SECTION 2: EXCLUSIVE RATES AND BROKERS DISCOUNT
          ======================================================== */}
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-purple-200/60 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-800 mb-2">
                  <Tag className="w-3.5 h-3.5" /> Special Markdowns
                </span>
                <h2 className="h2 text-slate-900 uppercase tracking-tight">
                  EXCLUSIVE RATES AND BROKERS DISCOUNT
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Handpicked properties featuring pre-negotiated price reductions and priority broker discounts.
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-lg w-fit">
                Special Rates Applied
              </span>
            </div>

            {/* Properties Grid with Purple 'Special Rates' Tag */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {exclusiveRatesProperties.map((property) => (
                <Item
                  key={`exclusive-${property._id || property.id}`}
                  property={property}
                  tag="Special Rates"
                />
              ))}
            </div>
          </section>

          {/* ========================================================
              SECTION 3: GET A FREE VASTU CONSULTATION
          ======================================================== */}
          <section className="mb-12">
            <div className="mb-8 border-b border-amber-200/60 pb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-2">
                <Compass className="w-3.5 h-3.5" /> Complimentary Guidance
              </span>
              <h2 className="h2 text-slate-900 uppercase tracking-tight">
                GET A FREE VASTU CONSULTATION
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Align your home with cosmic balance, positive energy, and holistic prosperity.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-100/80 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Vastu Image (Sufficient height for side content) */}
                <div className="lg:col-span-5 h-80 sm:h-[420px] w-full relative rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Vastu Consultation"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      100% Free Vastu Evaluation
                    </div>
                  </div>
                </div>

                {/* Content & Paragraph Beside Image */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
                  <div className="space-y-3">
                    <h3 className="h3 text-slate-900 leading-snug">
                      Harmonize Your New Sanctuary for Peace & Prosperity
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Vastu Shastra is the ancient science of spatial energy and directional harmony. A home aligned with natural Vastu principles channels positive vital energy, fostering good health, enduring prosperity, and peaceful living for you and your loved ones.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Our certified Vastu specialists evaluate your prospective property’s layout, room directions, and entrance orientation. We identify energy flow patterns and recommend simple, practical, non-structural remedies — ensuring you move in with complete positivity and peace of mind.
                    </p>
                  </div>

                  {/* Highlights / Badges */}
                  <div className="flex flex-wrap items-center gap-4 py-1 text-xs sm:text-sm text-gray-600 font-semibold">
                    <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-full border border-amber-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      No Structural Changes Needed
                    </span>
                    <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-full border border-amber-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Directional Energy Mapping
                    </span>
                    <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-full border border-amber-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Completely Complimentary
                    </span>
                  </div>

                  {/* Action Buttons: Call Now & WhatsApp */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    {/* Call Now Button */}
                    <a
                      href="tel:9258020736"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white bg-slate-900 hover:bg-black transition-all shadow-md hover:shadow-xl active:scale-95 text-sm sm:text-base group"
                    >
                      <Phone className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform shrink-0" />
                      <span>Call Now: 9258020736</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/919258020736?text=Hi%2C%20I%20am%20interested%20in%20the%20Free%20Vastu%20Consultation%20for%20my%20new%20home."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-xl active:scale-95 text-sm sm:text-base group"
                    >
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform shrink-0" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutWithHeaderOffset>
  );
};

export default Offers;

