import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react";

export const LOCALITIES_DATA = [
  {
    name: "NEW TOWN",
    searchQuery: "New Town",
    projects: "54 Projects",
    landmark: "Biswa Bangla Hanging Gate & Horizon",
    // Architectural Biswa Bangla Gate with fine silver sketch lines
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#d1d5db" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="silverArchBldg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Blueprint / Architectural grid lines in background */}
        <line x1="10" y1="116" x2="190" y2="116" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <line x1="100" y1="20" x2="100" y2="116" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />

        {/* Distant background skyline sketched silhouettes */}
        <rect x="22" y="58" width="18" height="58" rx="1" fill="url(#silverArchBldg)" stroke="#9ca3af" strokeWidth="0.6" opacity="0.6" />
        <rect x="44" y="48" width="16" height="68" rx="1" fill="url(#silverArchBldg)" stroke="#9ca3af" strokeWidth="0.6" opacity="0.6" />
        <rect x="140" y="52" width="18" height="64" rx="1" fill="url(#silverArchBldg)" stroke="#9ca3af" strokeWidth="0.6" opacity="0.6" />
        <rect x="162" y="62" width="20" height="54" rx="1" fill="url(#silverArchBldg)" stroke="#9ca3af" strokeWidth="0.6" opacity="0.6" />

        {/* Biswa Bangla Arch Legs - silver steel tube columns */}
        <line x1="48" y1="116" x2="78" y2="52" stroke="#e5e7eb" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="48" y1="116" x2="78" y2="52" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
        <line x1="152" y1="116" x2="122" y2="52" stroke="#e5e7eb" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="152" y1="116" x2="122" y2="52" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />

        <line x1="66" y1="116" x2="86" y2="52" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <line x1="134" y1="116" x2="114" y2="52" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

        {/* Circular Ring Gallery (Biswa Bangla restaurant deck) */}
        <ellipse cx="100" cy="50" rx="64" ry="16" fill="url(#silverRingGrad)" stroke="#ffffff" strokeWidth="1.6" />
        <ellipse cx="100" cy="50" rx="48" ry="10.5" fill="#1f2937" stroke="#9ca3af" strokeWidth="1.2" />

        {/* Center glowing observation node */}
        <ellipse cx="100" cy="50" rx="26" ry="5.5" fill="#f3f4f6" fillOpacity="0.85" stroke="#ffffff" strokeWidth="1" />

        {/* Silver wireframe truss ribs on ring perimeter */}
        {[-48, -36, -24, -12, 0, 12, 24, 36, 48].map((dx, i) => (
          <line key={i} x1={100 + dx} y1="36" x2={100 + dx} y2="62" stroke="#ffffff" strokeWidth="1" opacity="0.75" />
        ))}

        {/* Cross hatch sketch base ground */}
        <line x1="0" y1="116" x2="200" y2="116" stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1="0" y1="120" x2="200" y2="120" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "EM BYPASS",
    searchQuery: "EM Bypass",
    projects: "31 Projects",
    landmark: "Science City Geodesic Dome & Expressway",
    // Science City Geodesic Sphere Dome & Sketched Highway
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="silverDomeGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#d1d5db" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6b7280" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        {/* Architectural guidelines */}
        <path d="M-10 65 Q95 55 210 70" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

        {/* Geodesic Dome Hemispherical Arch */}
        <path d="M46 104 A54 54 0 0 1 154 104 Z" fill="url(#silverDomeGrad)" stroke="#ffffff" strokeWidth="1.8" />

        {/* Silver Sketch Triangular Triangulation Mesh */}
        <g stroke="#374151" strokeWidth="1" opacity="0.75">
          <line x1="100" y1="50" x2="65" y2="72" />
          <line x1="100" y1="50" x2="100" y2="76" />
          <line x1="100" y1="50" x2="135" y2="72" />
          <line x1="65" y1="72" x2="100" y2="76" />
          <line x1="100" y1="76" x2="135" y2="72" />

          <line x1="65" y1="72" x2="52" y2="92" />
          <line x1="65" y1="72" x2="80" y2="94" />
          <line x1="100" y1="76" x2="80" y2="94" />
          <line x1="100" y1="76" x2="120" y2="94" />
          <line x1="135" y1="72" x2="120" y2="94" />
          <line x1="135" y1="72" x2="148" y2="92" />

          <line x1="52" y1="92" x2="80" y2="94" />
          <line x1="80" y1="94" x2="120" y2="94" />
          <line x1="120" y1="94" x2="148" y2="92" />

          <line x1="52" y1="92" x2="48" y2="104" />
          <line x1="80" y1="94" x2="76" y2="104" />
          <line x1="120" y1="94" x2="124" y2="104" />
          <line x1="148" y1="92" x2="152" y2="104" />
        </g>

        {/* Elevated Expressway Beam in Foreground */}
        <path d="M12 102 L188 102 L188 107 L12 107 Z" fill="#ffffff" stroke="#9ca3af" strokeWidth="0.8" />
        <rect x="52" y="107" width="6" height="15" fill="#d1d5db" rx="1" />
        <rect x="142" y="107" width="6" height="15" fill="#d1d5db" rx="1" />

        {/* Subtle expressway light beacons */}
        <circle cx="60" cy="98" r="3" fill="#ffffff" stroke="#9ca3af" strokeWidth="1" />
        <circle cx="140" cy="98" r="3" fill="#ffffff" stroke="#9ca3af" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "RAJARHAT",
    searchQuery: "Rajarhat",
    projects: "28 Projects",
    landmark: "Elevated Metro Rail & Contemporary Towers",
    // Sketched Metro on Viaduct
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverMetroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>

        {/* Architectural tower silhouettes in background */}
        <rect x="32" y="38" width="20" height="70" rx="1" fill="#ffffff" fillOpacity="0.12" stroke="#9ca3af" strokeWidth="0.6" />
        <rect x="56" y="24" width="24" height="84" rx="1" fill="#ffffff" fillOpacity="0.16" stroke="#9ca3af" strokeWidth="0.6" />
        <rect x="124" y="30" width="26" height="78" rx="1" fill="#ffffff" fillOpacity="0.16" stroke="#9ca3af" strokeWidth="0.6" />
        <rect x="154" y="44" width="22" height="64" rx="1" fill="#ffffff" fillOpacity="0.12" stroke="#9ca3af" strokeWidth="0.6" />

        {/* Viaduct Piers (Pillars) */}
        <rect x="46" y="80" width="10" height="42" rx="2" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />
        <rect x="144" y="80" width="10" height="42" rx="2" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />

        {/* Viaduct Girder Deck */}
        <path d="M10 74 L190 74 L180 82 L20 82 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />

        {/* Sleek Modern Metro Train */}
        <rect x="22" y="54" width="154" height="20" rx="4" fill="url(#silverMetroGrad)" stroke="#6b7280" strokeWidth="1.2" />
        {/* Aerodynamic train nose */}
        <path d="M176 54 Q188 64 176 74 Z" fill="#e5e7eb" stroke="#6b7280" strokeWidth="1.2" />

        {/* Crisp Silver/Steel Speed Stripe */}
        <line x1="22" y1="65" x2="182" y2="65" stroke="#4b5563" strokeWidth="2.5" />

        {/* Metro Train Windows */}
        {[30, 48, 66, 84, 102, 120, 138, 156].map((wx, i) => (
          <rect key={i} x={wx} y="58" width="12" height="5" rx="1" fill="#374151" stroke="#9ca3af" strokeWidth="0.6" />
        ))}
      </svg>
    ),
  },
  {
    name: "SOUTHERN BYPASS",
    searchQuery: "Southern Bypass",
    projects: "24 Projects",
    landmark: "High-Rise Residential Towers & Palms",
    // Architectural Elevations of Towers with Palms
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverTowerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Left Tower */}
        <rect x="36" y="52" width="34" height="70" rx="2" fill="url(#silverTowerGrad)" stroke="#9ca3af" strokeWidth="1.2" />
        {[60, 72, 84, 96, 108].map((y) => (
          <g key={y}>
            <rect x="42" y={y} width="8" height="6" rx="1" fill="#4b5563" fillOpacity="0.7" />
            <rect x="56" y={y} width="8" height="6" rx="1" fill="#4b5563" fillOpacity="0.7" />
          </g>
        ))}

        {/* Center Grand Tower */}
        <rect x="80" y="24" width="42" height="98" rx="2" fill="url(#silverTowerGrad)" stroke="#6b7280" strokeWidth="1.4" />
        {/* Crown feature on center tower */}
        <line x1="80" y1="24" x2="101" y2="14" stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1="122" y1="24" x2="101" y2="14" stroke="#e5e7eb" strokeWidth="1.5" />
        {[34, 46, 58, 70, 82, 94, 106].map((y) => (
          <g key={y}>
            <rect x="86" y={y} width="8" height="6" rx="1" fill="#374151" fillOpacity="0.75" />
            <rect x="97" y={y} width="8" height="6" rx="1" fill="#374151" fillOpacity="0.75" />
            <rect x="108" y={y} width="8" height="6" rx="1" fill="#374151" fillOpacity="0.75" />
          </g>
        ))}

        {/* Right Tower */}
        <rect x="132" y="44" width="36" height="78" rx="2" fill="url(#silverTowerGrad)" stroke="#9ca3af" strokeWidth="1.2" />
        {[52, 64, 76, 88, 100].map((y) => (
          <g key={y}>
            <rect x="138" y={y} width="9" height="6" rx="1" fill="#4b5563" fillOpacity="0.7" />
            <rect x="152" y={y} width="9" height="6" rx="1" fill="#4b5563" fillOpacity="0.7" />
          </g>
        ))}

        {/* Sketched Palm Tree */}
        <path d="M24 122 Q27 96 22 84" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="14" cy="80" rx="9" ry="4" fill="#ffffff" fillOpacity="0.8" stroke="#6b7280" strokeWidth="0.8" transform="rotate(-30 14 80)" />
        <ellipse cx="28" cy="80" rx="9" ry="4" fill="#d1d5db" fillOpacity="0.8" stroke="#6b7280" strokeWidth="0.8" transform="rotate(30 28 80)" />
        <ellipse cx="20" cy="74" rx="10" ry="4" fill="#e5e7eb" stroke="#6b7280" strokeWidth="0.8" transform="rotate(-5 20 74)" />
      </svg>
    ),
  },
  {
    name: "CENTRAL",
    searchQuery: "Central",
    projects: "22 Projects",
    landmark: "Victoria Memorial Monument",
    // Architectural Sketch of Victoria Memorial Dome & Colonnade
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverMarbleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>

        {/* Angel of Victory finial statue on top */}
        <circle cx="100" cy="20" r="2.8" fill="#ffffff" stroke="#9ca3af" strokeWidth="0.8" />
        <line x1="100" y1="23" x2="100" y2="34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        {/* Angel wings */}
        <line x1="94" y1="24" x2="106" y2="24" stroke="#e5e7eb" strokeWidth="1.5" />

        {/* Main Central Grand Dome */}
        <path d="M78 56 C78 34 122 34 122 56 Z" fill="url(#silverMarbleGrad)" stroke="#4b5563" strokeWidth="1.4" />

        {/* Drum under dome with arched colonial windows */}
        <rect x="74" y="56" width="52" height="16" fill="url(#silverMarbleGrad)" stroke="#6b7280" strokeWidth="1" />
        {[80, 88, 96, 104, 112].map((x) => (
          <path key={x} d={`M${x} 66 A3 3 0 0 1 ${x + 6} 66 V72 H${x} Z`} fill="#374151" stroke="#9ca3af" strokeWidth="0.6" />
        ))}

        {/* Left Side Dome */}
        <path d="M42 66 C42 52 62 52 62 66 Z" fill="url(#silverMarbleGrad)" stroke="#6b7280" strokeWidth="1" />
        <rect x="40" y="66" width="24" height="12" fill="url(#silverMarbleGrad)" stroke="#6b7280" strokeWidth="0.8" />

        {/* Right Side Dome */}
        <path d="M138 66 C138 52 158 52 158 66 Z" fill="url(#silverMarbleGrad)" stroke="#6b7280" strokeWidth="1" />
        <rect x="136" y="66" width="24" height="12" fill="url(#silverMarbleGrad)" stroke="#6b7280" strokeWidth="0.8" />

        {/* Grand Colonnade Base */}
        <rect x="24" y="78" width="152" height="12" fill="url(#silverMarbleGrad)" stroke="#4b5563" strokeWidth="1.2" />

        {/* Classical Columns / Pillars */}
        {[32, 44, 56, 68, 80, 92, 104, 116, 128, 140, 152, 164].map((px) => (
          <rect key={px} x={px} y="90" width="4" height="24" fill="#ffffff" stroke="#9ca3af" strokeWidth="0.6" rx="0.5" />
        ))}
        {/* Foundation Plinth */}
        <rect x="18" y="114" width="164" height="8" fill="url(#silverMarbleGrad)" stroke="#4b5563" strokeWidth="1" rx="1" />
      </svg>
    ),
  },
  {
    name: "SECTOR V",
    searchQuery: "Sector V",
    projects: "16 Projects",
    landmark: "IT Hub & Glass Curtain-Wall Skyscraper",
    // Architectural Facade of Glass Skyscrapers & Wi-Fi badge
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverGlass1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="silverGlass2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
        </defs>

        {/* Building 1 (Left angular crown) */}
        <path d="M50 48 L80 34 L80 122 L50 122 Z" fill="url(#silverGlass2)" stroke="#ffffff" strokeWidth="1" />
        {[48, 62, 76, 90, 104, 118].map((y) => (
          <line key={y} x1="50" y1={y} x2="80" y2={y - 8} stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
        ))}

        {/* Building 2 (Center tallest glass spire) */}
        <path d="M84 22 L124 10 L124 122 L84 122 Z" fill="url(#silverGlass1)" stroke="#ffffff" strokeWidth="1.4" />
        {[26, 40, 54, 68, 82, 96, 110].map((y) => (
          <line key={y} x1="84" y1={y} x2="124" y2={y - 6} stroke="#374151" strokeWidth="1" opacity="0.65" />
        ))}
        {/* Vertical mullions */}
        <line x1="97" y1="18" x2="97" y2="122" stroke="#ffffff" strokeWidth="1" opacity="0.75" />
        <line x1="110" y1="14" x2="110" y2="122" stroke="#ffffff" strokeWidth="1" opacity="0.75" />

        {/* Building 3 (Right) */}
        <path d="M128 42 L158 52 L158 122 L128 122 Z" fill="url(#silverGlass2)" stroke="#ffffff" strokeWidth="1" />

        {/* Sketched Cloud / Wi-Fi Hub Symbol */}
        <g transform="translate(154, 16) scale(0.85)">
          <rect x="-4" y="-4" width="38" height="26" rx="13" fill="#1f2937" stroke="#ffffff" strokeWidth="1.2" />
          <path d="M6 14 C4 14 2 12 2 10 C2 8 4 6 6 6 C7 4 9 2 13 2 C16 2 19 4 19 7 C21 7 23 9 23 11 C23 13 21 14 19 14 Z" fill="#ffffff" />
          <circle cx="12.5" cy="10" r="1.5" fill="#1f2937" />
        </g>
      </svg>
    ),
  },
  {
    name: "HOWRAH",
    searchQuery: "Howrah",
    projects: "15 Projects",
    landmark: "Howrah Cantilever Truss Bridge",
    // Architectural Drawing of Howrah Bridge Truss over Water
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverTrussGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>

        {/* Water surface hatch lines */}
        <line x1="10" y1="112" x2="190" y2="112" stroke="#6b7280" strokeWidth="1" strokeDasharray="5 3" />
        <line x1="20" y1="118" x2="180" y2="118" stroke="#4b5563" strokeWidth="0.8" strokeDasharray="3 4" />

        {/* Traditional Country Boat */}
        <path d="M138 114 L162 114 L156 120 L144 120 Z" fill="#ffffff" stroke="#4b5563" strokeWidth="0.8" />

        {/* Left Cantilever Tower Frame */}
        <polygon points="25,102 38,38 48,38 61,102" fill="none" stroke="#ffffff" strokeWidth="2.2" />
        {/* Right Cantilever Tower Frame */}
        <polygon points="139,102 152,38 162,38 175,102" fill="none" stroke="#ffffff" strokeWidth="2.2" />

        {/* Main Arching Truss Ribbon */}
        <path d="M10 90 Q100 32 190 90" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Roadway Deck */}
        <rect x="0" y="96" width="200" height="7" fill="url(#silverTrussGrad)" stroke="#4b5563" strokeWidth="1" rx="1" />

        {/* Suspension Hanger Cables */}
        {[20, 36, 52, 68, 84, 100, 116, 132, 148, 164, 180].map((x) => (
          <line key={x} x1={x} y1="96" x2={x} y2={58 + Math.abs(100 - x) * 0.35} stroke="#e5e7eb" strokeWidth="1" opacity="0.85" />
        ))}

        {/* Steel X-Cross Braces */}
        <line x1="38" y1="38" x2="61" y2="102" stroke="#d1d5db" strokeWidth="1" opacity="0.75" />
        <line x1="48" y1="38" x2="25" y2="102" stroke="#d1d5db" strokeWidth="1" opacity="0.75" />
        <line x1="152" y1="38" x2="175" y2="102" stroke="#d1d5db" strokeWidth="1" opacity="0.75" />
        <line x1="162" y1="38" x2="139" y2="102" stroke="#d1d5db" strokeWidth="1" opacity="0.75" />
      </svg>
    ),
  },
  {
    name: "JOKA",
    searchQuery: "Joka",
    projects: "14 Projects",
    landmark: "Academic Heritage & Knowledge Hub",
    // Academic Building, Mortarboard & Wisdom Books
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverJokaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>

        {/* Campus facade base */}
        <rect x="25" y="78" width="150" height="44" rx="2" fill="url(#silverJokaGrad)" stroke="#4b5563" strokeWidth="1.2" />

        {/* Sketched colonnade arch windows */}
        {[38, 54, 70, 86, 102, 118, 134, 150].map((x) => (
          <rect key={x} x={x} y="86" width="8" height="24" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="0.6" />
        ))}

        {/* Stack of Knowledge Books */}
        <rect x="70" y="66" width="60" height="10" rx="2" fill="#e5e7eb" stroke="#374151" strokeWidth="1.2" />
        <rect x="66" y="55" width="68" height="11" rx="2" fill="#f3f4f6" stroke="#374151" strokeWidth="1.2" />
        <rect x="74" y="44" width="52" height="11" rx="2" fill="#ffffff" stroke="#374151" strokeWidth="1.2" />

        {/* Graduation Mortarboard */}
        <polygon points="100,22 136,31 100,40 64,31" fill="#111827" stroke="#ffffff" strokeWidth="1.5" />
        <rect x="88" y="38" width="24" height="6" fill="#111827" stroke="#ffffff" strokeWidth="0.8" />

        {/* Silver Tassel */}
        <circle cx="100" cy="31" r="2.2" fill="#ffffff" />
        <path d="M100 31 Q124 35 128 46" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

        {/* Sketch Foliage */}
        <circle cx="18" cy="78" r="13" fill="#ffffff" fillOpacity="0.25" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="182" cy="78" r="13" fill="#ffffff" fillOpacity="0.25" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    name: "TOLLYGUNGE",
    searchQuery: "Tollygunge",
    projects: "11 Projects",
    landmark: "Tollywood Film Studios & Heritage Cinema",
    // Director's Clapperboard & Film Reel
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverClapper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>

        {/* Cinema Film Reel */}
        <circle cx="145" cy="58" r="32" fill="#f3f4f6" stroke="#4b5563" strokeWidth="2" />
        <circle cx="145" cy="58" r="12" fill="#374151" stroke="#ffffff" strokeWidth="1" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <circle
            key={deg}
            cx={145 + 20 * Math.cos((deg * Math.PI) / 180)}
            cy={58 + 20 * Math.sin((deg * Math.PI) / 180)}
            r="5"
            fill="#111827"
          />
        ))}

        {/* Brilliant Cinema Star */}
        <polygon
          points="62,28 65,37 74,37 67,43 69,52 62,46 55,52 57,43 50,37 59,37"
          fill="#ffffff"
          stroke="#4b5563"
          strokeWidth="1"
        />

        {/* Clapperboard Body */}
        <g transform="translate(66, 50) rotate(-8)">
          <rect x="0" y="16" width="70" height="50" rx="3" fill="url(#silverClapper)" stroke="#ffffff" strokeWidth="1.6" />
          {/* Top Hinge Bar */}
          <rect x="-2" y="0" width="74" height="16" rx="2" fill="#1f2937" stroke="#ffffff" strokeWidth="1.6" />
          {/* Slanted silver stripes */}
          {[-2, 12, 26, 40, 54].map((sx, i) => (
            <polygon key={i} points={`${sx},16 ${sx + 8},0 ${sx + 14},0 ${sx + 6},16`} fill="#ffffff" />
          ))}
          {/* Grid lines inside clapper */}
          <line x1="8" y1="30" x2="62" y2="30" stroke="#9ca3af" strokeWidth="1.2" />
          <line x1="8" y1="44" x2="62" y2="44" stroke="#9ca3af" strokeWidth="1.2" />
          <line x1="35" y1="30" x2="35" y2="60" stroke="#9ca3af" strokeWidth="1.2" />
        </g>
      </svg>
    ),
  },
  {
    name: "DUM DUM",
    searchQuery: "Dum Dum",
    projects: "10 Projects",
    landmark: "NSCB International Airport & Aviation Hub",
    // Ascending Jet Airliner, Radar Tower & Cloud Contrails
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Clouds */}
        <ellipse cx="40" cy="98" rx="28" ry="14" fill="#ffffff" fillOpacity="0.25" stroke="#9ca3af" strokeWidth="0.8" />
        <ellipse cx="64" cy="92" rx="20" ry="12" fill="#ffffff" fillOpacity="0.35" stroke="#9ca3af" strokeWidth="0.8" />
        <ellipse cx="160" cy="50" rx="24" ry="12" fill="#ffffff" fillOpacity="0.2" stroke="#9ca3af" strokeWidth="0.8" />

        {/* Airport ATC Tower */}
        <rect x="144" y="66" width="12" height="48" rx="2" fill="#e5e7eb" stroke="#4b5563" strokeWidth="1" />
        <polygon points="140,66 160,66 156,54 144,54" fill="#ffffff" stroke="#4b5563" strokeWidth="1" />
        <circle cx="150" cy="50" r="2.5" fill="#ffffff" stroke="#ef4444" strokeWidth="1.5" />

        {/* Ascending Jet Airliner */}
        <g transform="translate(42, 34) rotate(-16)">
          <path d="M0 20 C10 16 80 16 95 20 C102 22 104 25 102 27 C96 29 10 29 0 24 Z" fill="#ffffff" stroke="#374151" strokeWidth="1.4" />
          {/* Cockpit windshield */}
          <path d="M92 20 Q98 22 92 24 Z" fill="#1f2937" />
          {/* Main swept wings */}
          <polygon points="40,20 18,-6 28,-6 58,20" fill="#f3f4f6" stroke="#374151" strokeWidth="1.2" />
          <polygon points="44,26 26,44 34,44 60,26" fill="#e5e7eb" stroke="#374151" strokeWidth="1.2" />
          {/* Vertical Tail Stabilizer */}
          <polygon points="6,20 -4,0 6,0 16,20" fill="#ffffff" stroke="#374151" strokeWidth="1.2" />
          {/* Passenger Portholes */}
          {[30, 40, 50, 60, 70, 80].map((x) => (
            <circle key={x} cx={x} cy="22.5" r="1.3" fill="#374151" />
          ))}
          {/* Jet Speed contrails */}
          <line x1="-24" y1="21" x2="-2" y2="21" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" opacity="0.9" />
          <line x1="-18" y1="24" x2="-2" y2="24" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        </g>
      </svg>
    ),
  },
  {
    name: "MADHYAMGRAM",
    searchQuery: "Madhyamgram",
    projects: "10 Projects",
    landmark: "Suburban Rail Transit & Residential Villas",
    // Commuter Train & Suburban Gable Cottages
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverHouseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>

        {/* Suburban Gable Cottages */}
        {[
          { x: 70, y: 52, w: 32, h: 26 },
          { x: 106, y: 46, w: 36, h: 32 },
          { x: 146, y: 54, w: 32, h: 24 },
        ].map((c, i) => (
          <g key={i}>
            {/* Triangular pitched roof */}
            <polygon points={`${c.x - 4},${c.y} ${c.x + c.w / 2},${c.y - 14} ${c.x + c.w + 4},${c.y}`} fill="#f3f4f6" stroke="#4b5563" strokeWidth="1.2" />
            {/* House facade */}
            <rect x={c.x} y={c.y} width={c.w} height={c.h} fill="url(#silverHouseGrad)" stroke="#4b5563" strokeWidth="1.2" />
            {/* Windows */}
            <rect x={c.x + 4} y={c.y + 6} width={7} height={7} rx="1" fill="#374151" />
            <rect x={c.x + c.w - 11} y={c.y + 6} width={7} height={7} rx="1" fill="#374151" />
          </g>
        ))}

        {/* Commuter Local Train */}
        <rect x="15" y="80" width="170" height="28" rx="4" fill="#ffffff" stroke="#374151" strokeWidth="1.5" />
        {/* Silver side livery band */}
        <rect x="15" y="96" width="170" height="4" fill="#4b5563" />

        {/* Train Windows */}
        {[25, 45, 65, 85, 105, 125, 145, 165].map((x) => (
          <rect key={x} x={x} y="84" width="12" height="9" rx="1.5" fill="#374151" stroke="#9ca3af" strokeWidth="0.6" />
        ))}

        {/* Railway Track */}
        <line x1="10" y1="112" x2="190" y2="112" stroke="#e5e7eb" strokeWidth="2.5" />
        {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((tx) => (
          <line key={tx} x1={tx} y1="110" x2={tx} y2="116" stroke="#ffffff" strokeWidth="2" />
        ))}
      </svg>
    ),
  },
  {
    name: "B.T. ROAD",
    searchQuery: "BT Road",
    projects: "8 Projects",
    landmark: "Dakshineswar Navaratna Temple Spires",
    // Architectural Drawing of 9-Pinnacle Dakshineswar Temple
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverTempleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>

        {/* Subtle Halo Aura */}
        <circle cx="100" cy="50" r="38" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

        {/* Central Navaratna Spire */}
        <path d="M100 16 C96 30 94 46 94 54 L106 54 C106 46 104 30 100 16 Z" fill="url(#silverTempleGrad)" stroke="#4b5563" strokeWidth="1.2" />
        <circle cx="100" cy="14" r="2.5" fill="#ffffff" stroke="#4b5563" strokeWidth="0.8" />

        {/* Mid-Tier Spires */}
        {[82, 118].map((x) => (
          <g key={x}>
            <path d={`M${x} 26 C${x - 3} 38 ${x - 5} 50 ${x - 5} 58 L${x + 5} 58 C${x + 5} 50 ${x + 3} 38 ${x} 26 Z`} fill="url(#silverTempleGrad)" stroke="#4b5563" strokeWidth="1" />
            <circle cx={x} cy="24" r="2" fill="#ffffff" stroke="#4b5563" strokeWidth="0.8" />
          </g>
        ))}

        {/* Lower Corner Spires */}
        {[66, 134].map((x) => (
          <g key={x}>
            <path d={`M${x} 36 C${x - 3} 46 ${x - 5} 56 ${x - 5} 66 L${x + 5} 66 C${x + 5} 56 ${x + 3} 46 ${x} 36 Z`} fill="url(#silverTempleGrad)" stroke="#4b5563" strokeWidth="1" />
            <circle cx={x} cy="34" r="1.8" fill="#ffffff" stroke="#4b5563" strokeWidth="0.8" />
          </g>
        ))}

        {/* Upper Terrace */}
        <rect x="74" y="54" width="52" height="14" fill="url(#silverTempleGrad)" stroke="#4b5563" strokeWidth="1" />

        {/* Lower Main Sanctuary */}
        <rect x="44" y="68" width="112" height="36" fill="url(#silverTempleGrad)" stroke="#4b5563" strokeWidth="1.4" />

        {/* Bengal Terracotta Arches */}
        {[54, 74, 94, 114, 134].map((ax) => (
          <path key={ax} d={`M${ax} 84 A5 5 0 0 1 ${ax + 10} 84 V104 H${ax} Z`} fill="#374151" stroke="#9ca3af" strokeWidth="0.8" />
        ))}

        {/* Plinth Base */}
        <rect x="34" y="104" width="132" height="14" fill="url(#silverTempleGrad)" stroke="#4b5563" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: "HOOGHLY",
    searchQuery: "Hooghly",
    projects: "8 Projects",
    landmark: "Hooghly Imambara Twin Minarets & Grand Clock",
    // Architectural Twin Clock Tower
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverImambara" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>

        {/* Left Minaret */}
        <rect x="45" y="32" width="22" height="84" rx="2" fill="url(#silverImambara)" stroke="#4b5563" strokeWidth="1.2" />
        <path d="M42 32 C42 18 70 18 70 32 Z" fill="url(#silverImambara)" stroke="#4b5563" strokeWidth="1.2" />
        <line x1="56" y1="18" x2="56" y2="10" stroke="#ffffff" strokeWidth="2" />
        <circle cx="56" cy="9" r="2" fill="#ffffff" />
        {[44, 60, 76, 92].map((y) => (
          <rect key={y} x="51" y={y} width="10" height="9" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="0.6" />
        ))}

        {/* Central Façade with Big Clock */}
        <rect x="67" y="56" width="66" height="60" fill="url(#silverImambara)" stroke="#4b5563" strokeWidth="1.2" />

        {/* Historic Clock Dial */}
        <circle cx="100" cy="74" r="14" fill="#ffffff" stroke="#374151" strokeWidth="2" />
        <line x1="100" y1="74" x2="100" y2="65" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="74" x2="106" y2="74" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="74" r="2" fill="#374151" />

        {/* Grand Gateway Arch */}
        <path d="M90 100 A10 10 0 0 1 110 100 V116 H90 Z" fill="#1f2937" />

        {/* Right Minaret */}
        <rect x="133" y="32" width="22" height="84" rx="2" fill="url(#silverImambara)" stroke="#4b5563" strokeWidth="1.2" />
        <path d="M130 32 C130 18 158 18 158 32 Z" fill="url(#silverImambara)" stroke="#4b5563" strokeWidth="1.2" />
        <line x1="144" y1="18" x2="144" y2="10" stroke="#ffffff" strokeWidth="2" />
        <circle cx="144" cy="9" r="2" fill="#ffffff" />
        {[44, 60, 76, 92].map((y) => (
          <rect key={y} x="139" y={y} width="10" height="9" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="0.6" />
        ))}
      </svg>
    ),
  },
  {
    name: "ALIPORE",
    searchQuery: "Alipore",
    projects: "7 Projects",
    landmark: "Alipore Zoological Park & Botanical Greenery",
    // Refined Wildlife & Botanical Canopy
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverTreeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>

        {/* Botanical Foliage Canopies */}
        <circle cx="65" cy="62" r="30" fill="url(#silverTreeGrad)" stroke="#4b5563" strokeWidth="1.2" />
        <circle cx="95" cy="54" r="24" fill="#f3f4f6" stroke="#4b5563" strokeWidth="1.2" />
        <circle cx="45" cy="74" r="20" fill="#e5e7eb" stroke="#4b5563" strokeWidth="1" />
        <rect x="62" y="86" width="8" height="34" fill="#374151" rx="2" />

        {/* Elegant Sketched Giraffe */}
        {/* Legs */}
        <line x1="130" y1="84" x2="128" y2="120" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        <line x1="136" y1="84" x2="135" y2="120" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
        <line x1="156" y1="84" x2="155" y2="120" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        <line x1="162" y1="84" x2="163" y2="120" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />

        {/* Body */}
        <path d="M125 78 C125 70 168 72 168 84 C168 90 125 90 125 78 Z" fill="#ffffff" stroke="#4b5563" strokeWidth="1.2" />

        {/* Long Neck & Head */}
        <path d="M154 80 L168 28 L175 28 L164 80 Z" fill="#ffffff" stroke="#4b5563" strokeWidth="1" />
        <ellipse cx="172" cy="27" rx="8" ry="5" fill="#ffffff" stroke="#4b5563" strokeWidth="1" />
        <line x1="170" y1="24" x2="171" y2="18" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />

        {/* Silver-gray Spots */}
        {[
          { x: 162, y: 40, r: 2.2 },
          { x: 164, y: 52, r: 2.5 },
          { x: 161, y: 64, r: 2.8 },
          { x: 138, y: 79, r: 3.2 },
          { x: 148, y: 81, r: 3.5 },
          { x: 158, y: 77, r: 3 },
        ].map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#4b5563" />
        ))}
      </svg>
    ),
  },
  {
    name: "MAHESHTALA",
    searchQuery: "Maheshtala",
    projects: "3 Projects",
    landmark: "Riverfront Sailboats, Sunset & Skyline",
    // Waterfront Promenade & Sailboat
    svg: (
      <svg viewBox="0 0 200 130" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverRiverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Distant Riverfront Skyline */}
        <rect x="25" y="58" width="18" height="38" rx="1" fill="#ffffff" fillOpacity="0.2" stroke="#9ca3af" strokeWidth="0.8" />
        <rect x="47" y="48" width="22" height="48" rx="1" fill="#ffffff" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="0.8" />
        <rect x="73" y="64" width="16" height="32" rx="1" fill="#ffffff" fillOpacity="0.2" stroke="#9ca3af" strokeWidth="0.8" />

        {/* Radiant Silver Sun in Horizon */}
        <circle cx="150" cy="50" r="22" fill="#ffffff" stroke="#9ca3af" strokeWidth="1.5" />

        {/* Gentle River Waters */}
        <path d="M0 90 Q50 86 100 90 T200 90 L200 130 L0 130 Z" fill="url(#silverRiverGrad)" stroke="#ffffff" strokeWidth="1" />

        {/* Sailboat Hull */}
        <path d="M106 102 L146 102 C143 112 112 112 106 102 Z" fill="#1f2937" stroke="#ffffff" strokeWidth="1.2" />

        {/* Mast */}
        <line x1="126" y1="102" x2="126" y2="58" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

        {/* Main Sail (White Canvas) */}
        <path d="M128 62 L150 96 L128 96 Z" fill="#ffffff" stroke="#4b5563" strokeWidth="1" />

        {/* Jib / Front Sail */}
        <path d="M124 66 L108 96 L124 96 Z" fill="#e5e7eb" stroke="#4b5563" strokeWidth="1" />

        {/* River Ripples */}
        <line x1="56" y1="104" x2="84" y2="104" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
        <line x1="26" y1="114" x2="68" y2="114" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="130" y1="118" x2="175" y2="118" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
];

const KolkataLocalities = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showAllModal, setShowAllModal] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 320);
    }
  };

  const handleCardClick = (locality) => {
    navigate(`/listing?locality=${encodeURIComponent(locality.searchQuery)}`);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore Kolkata's Prime Hubs
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-1 font-normal">
            Discover verified homes and premier developments across key urban zones
          </p>
        </div>

        {/* Action Controls: 'See all 15' + Carousel Nav Buttons */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            onClick={() => setShowAllModal(true)}
            className="text-amber-600 hover:text-amber-700 font-semibold text-sm sm:text-base flex items-center gap-1 transition-colors px-2 py-1 rounded-md hover:bg-amber-50 cursor-pointer"
          >
            See all {LOCALITIES_DATA.length}
            <ChevronRight size={18} />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous localities"
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 shadow-sm active:scale-95"
                  : "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next localities"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
                canScrollRight
                  ? "bg-amber-500 hover:bg-amber-600 text-white active:scale-95 hover:shadow-amber-500/30"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none scroll-smooth pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {LOCALITIES_DATA.map((loc) => (
          <div
            key={loc.name}
            onClick={() => handleCardClick(loc)}
            className="flex-shrink-0 w-[190px] sm:w-[210px] md:w-[225px] cursor-pointer group"
          >
            {/* Classy Grayscale & Silver Architectural Card */}
            <div className="relative h-[255px] sm:h-[270px] rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl bg-gradient-to-br from-[#2b303a] via-[#1a1d24] to-[#0f1115] border border-gray-700/60 group-hover:border-gray-400 group-hover:ring-1 group-hover:ring-white/30">
              
              {/* Metallic Silver Radial Sheen & Subtle Blueprint Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/15 via-transparent to-black/60 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Card Header (Locality Name & Project Count) */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-black text-white tracking-wide uppercase drop-shadow-sm leading-tight group-hover:text-amber-300 transition-colors">
                  {loc.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-200">
                    {loc.projects}
                  </span>
                </div>
              </div>

              {/* Landmark Architectural Illustration / Silver Sketch */}
              <div className="relative z-10 w-full h-[145px] sm:h-[155px] flex items-end justify-center transition-transform duration-500 ease-out group-hover:scale-105 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                {loc.svg}
              </div>

              {/* Classy hover highlight overlay pill */}
              <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30 shadow-md">
                  Explore <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "See all 15" Modal Dialog matching the 2nd user image layout */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#181b22] border border-gray-700 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 sm:p-8 border-b border-gray-800 bg-[#12141a]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Featured Neighborhoods
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Handpicked destinations and upcoming investment corridors
                </p>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-gray-700"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Grid of All Localities */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-120px)] bg-[#14171e]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                {LOCALITIES_DATA.map((loc) => (
                  <div
                    key={loc.name}
                    onClick={() => {
                      setShowAllModal(false);
                      handleCardClick(loc);
                    }}
                    className="cursor-pointer group"
                  >
                    <div className="relative h-[220px] sm:h-[240px] rounded-2xl p-3.5 flex flex-col justify-between overflow-hidden shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl bg-gradient-to-br from-[#2b303a] via-[#1a1d24] to-[#0f1115] border border-gray-700/60 group-hover:border-gray-400">
                      
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/60 pointer-events-none" />

                      <div className="relative z-10">
                        <h4 className="text-sm sm:text-base font-black text-white tracking-wide uppercase drop-shadow-sm leading-tight group-hover:text-amber-300 transition-colors">
                          {loc.name}
                        </h4>
                        <span className="inline-block mt-0.5 text-[11px] font-semibold text-gray-300">
                          {loc.projects}
                        </span>
                      </div>

                      <div className="relative z-10 w-full h-[120px] sm:h-[135px] flex items-end justify-center transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                        {loc.svg}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KolkataLocalities;
