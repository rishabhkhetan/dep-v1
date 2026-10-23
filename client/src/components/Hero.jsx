import React, { useState, useRef, useEffect } from "react";
import { assets } from "../assets/data";
import { useAppContext } from "../context/AppContext";
import heroVideo from "../assets/herovideo.mp4";
import { useNavigate } from "react-router-dom";

// Kolkata locality index for autocomplete
const KOLKATA_LOCALITIES = [
  "New Town", "Rajarhat", "Action Area I", "Action Area II", "Action Area III",
  "Chinar Park", "Salt Lake", "Sector V", "Lake Town", "Bangur Avenue", "Bangur",
  "Howrah", "Shalimar", "New Alipore", "Alipore", "Tollygunge", "Ballygunge",
  "Garia", "EM Bypass", "Behala", "Park Circus", "Dum Dum", "Ultadanga",
  "Kasba", "Jadavpur", "Sonarpur", "Regent Park", "Ekbalpore"
];

const PURPOSE_TABS = ["Buy", "Rent", "New Launch", "Commercial", "Plots & Land"];

const PROPERTY_TYPES = [
  "All Types", "Apartment", "Villa", "House", "Commercial", "Plot", "Penthouse"
];

const BHK_OPTIONS = ["Any BHK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

const BUDGET_OPTIONS = [
  { label: "Any Budget", min: "", max: "" },
  { label: "Up to ₹50 Lac", min: "", max: "5000000" },
  { label: "₹50L - ₹1 Cr", min: "5000000", max: "10000000" },
  { label: "₹1 Cr - ₹2 Cr", min: "10000000", max: "20000000" },
  { label: "₹2 Cr - ₹5 Cr", min: "20000000", max: "50000000" },
  { label: "Above ₹5 Cr", min: "50000000", max: "" },
];

const Hero = () => {
  const { navigate, properties } = useAppContext();

  const [activePurpose, setActivePurpose] = useState("Buy");
  const [locationInput, setLocationInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [propertyType, setPropertyType] = useState("All Types");
  const [bhk, setBhk] = useState("Any BHK");
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const locationRef = useRef(null);

  // Build suggestions from database properties + static list
  const buildSuggestions = (query) => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }
    const q = query.toLowerCase();
    const fromDB = new Set();
    properties.forEach((p) => {
      if (p.locality && p.locality.toLowerCase().includes(q)) fromDB.add(p.locality);
      if (p.city && p.city.toLowerCase().includes(q)) fromDB.add(p.city);
    });
    const fromStatic = KOLKATA_LOCALITIES.filter((l) => l.toLowerCase().includes(q));
    const combined = [...new Set([...fromDB, ...fromStatic])].slice(0, 8);
    setSuggestions(combined);
  };

  useEffect(() => {
    buildSuggestions(locationInput);
  }, [locationInput, properties]);

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e) => {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (locationInput) params.set("locality", locationInput);
    if (activePurpose !== "Buy") params.set("purpose", activePurpose.toLowerCase().replace(/ /g, "_"));
    if (propertyType !== "All Types") params.set("propertyType", propertyType);
    if (bhk !== "Any BHK") params.set("bhk", bhk.replace(" BHK", "").replace("+", "plus"));
    if (budget.min) params.set("minPrice", budget.min);
    if (budget.max) params.set("maxPrice", budget.max);
    navigate(`/listing?${params.toString()}`);
  };

  const purposeTabPurpose = (tab) => tab.toLowerCase().replace(/ /g, "_");

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Main Content */}
      <div className="max-padd-container relative h-screen w-screen z-20">
        <div className="relative flex justify-end mx-auto flex-col gap-4 h-full py-6 sm:pt-18">

          {/* Hero Text */}
          <div className="flex flex-col mt-12 text-white text-center items-center">
            <h2 className="h2 capitalize leading-tight mt-3 my-2 text-white text-center">
              Find Your{" "}
              <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                Dream Home
              </span>{" "}
              in Kolkata
            </h2>
          </div>

          {/* REAL ESTATE SEARCH */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full mx-auto">
            {/* Purpose Tabs */}
            <div className="flex w-full border-b border-gray-100">
              {PURPOSE_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActivePurpose(tab)}
                  className={`flex-1 py-3.5 text-center text-sm md:text-base font-semibold transition-all duration-200 ${
                    activePurpose === tab
                      ? "text-amber-600 border-b-2 border-amber-500 bg-amber-50/70"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Row */}
            <form onSubmit={onSearch} className="flex flex-col md:flex-row gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 p-0">
              {/* Location */}
              <div className="relative flex-1 min-w-0" ref={locationRef}>
                <div className="px-4 py-3">
                  <label className="block text-xs text-gray-400 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    value={locationInput}
                    onChange={(e) => {
                      setLocationInput(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Search locality, area, landmark..."
                    className="w-full text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
                {/* Autocomplete suggestions */}
                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute top-full left-0 right-0 bg-white shadow-xl border border-gray-100 rounded-b-xl z-50 max-h-56 overflow-y-auto">
                    {suggestions.map((s) => (
                      <li
                        key={s}
                        onClick={() => {
                          setLocationInput(s);
                          setShowSuggestions(false);
                        }}
                        className="px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer flex items-center gap-2"
                      >
                        <img src={assets.pin} alt="" width={12} />
                        {s}, Kolkata
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Property Type */}
              <div className="flex-shrink-0 md:w-36 px-4 py-3">
                <label className="block text-xs text-gray-400 font-medium mb-1">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full text-sm text-gray-800 outline-none bg-transparent cursor-pointer"
                >
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* BHK */}
              <div className="flex-shrink-0 md:w-32 px-4 py-3">
                <label className="block text-xs text-gray-400 font-medium mb-1">BHK</label>
                <select
                  value={bhk}
                  onChange={(e) => setBhk(e.target.value)}
                  className="w-full text-sm text-gray-800 outline-none bg-transparent cursor-pointer"
                >
                  {BHK_OPTIONS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="flex-shrink-0 md:w-44 px-4 py-3">
                <label className="block text-xs text-gray-400 font-medium mb-1">Budget</label>
                <select
                  value={budget.label}
                  onChange={(e) => {
                    const found = BUDGET_OPTIONS.find((b) => b.label === e.target.value);
                    if (found) setBudget(found);
                  }}
                  className="w-full text-sm text-gray-800 outline-none bg-transparent cursor-pointer"
                >
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b.label}>{b.label}</option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-center px-4 py-3">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg px-6 py-3 transition-colors whitespace-nowrap w-full md:w-auto"
                >
                  <img src={assets.search} alt="search" width={18} className="invert" />
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Trending Localities Quick Links */}
          <div className="flex flex-col items-center justify-center gap-2 pb-6 w-full max-w-5xl mx-auto">
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-amber-300 drop-shadow-md">
              Trending Localities
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              {["New Town", "Alipore", "Salt Lake", "Tollygunge", "Rajarhat", "Ballygunge"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => navigate(`/listing?locality=${loc}`)}
                  className="group relative overflow-hidden text-sm md:text-base font-medium text-white/95 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-5 py-1.5 shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/30 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-white transition-colors"></span>
                    {loc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
