import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Gift } from "lucide-react";

const Navbar = ({ setMenuOpened, containerStyles, extraLinks = [] }) => {
  const location = useLocation();
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Properties" },
    { path: "/blog", title: "About Us" },
    { path: "/contact", title: "Contact Us" },
    { path: "/offers", title: "Offers", isSpecial: true },
  ];

  return (
    <nav className={`${containerStyles}`}>
      {[...navLinks, ...extraLinks].map((link) => {
        if (link.isSpecial) {
          return (
            <NavLink
              onClick={() => {
                setMenuOpened(false);
                scrollTo(0, 0);
              }}
              key={link.title}
              to={link.path}
              className={({ isActive }) => `
                relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full uppercase text-xs sm:text-sm font-extrabold tracking-wide
                transition-all duration-300 transform hover:scale-105 active:scale-95
                bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-amber-950
                shadow-[0_0_15px_rgba(251,191,36,0.85)] hover:shadow-[0_0_24px_rgba(245,158,11,1)]
                border border-yellow-200/90 overflow-hidden group shrink-0
                ${isActive ? "ring-2 ring-amber-600 scale-105" : ""}
              `}
            >
              {/* Radiant light sweep reflection */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none" />
              <Gift className="w-4 h-4 text-amber-950 animate-bounce shrink-0" />
              <span className="drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">{link.title}</span>
              <span className="relative flex h-2 w-2 ml-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-800"></span>
              </span>
            </NavLink>
          );
        }

        return (
          <NavLink
            onClick={() => {
              setMenuOpened(false);
              scrollTo(0, 0);
            }}
            key={link.title}
            to={link.path}
            state={link.drawerSelection ? { drawerSelection: link.title } : undefined}
            className={({ isActive }) => {
              const isSelectedDrawerLink =
                link.drawerSelection &&
                location.state?.drawerSelection === link.title;
              const isPrimaryActive =
                isActive && !link.disableActive && !location.state?.drawerSelection;

              return `${isPrimaryActive || isSelectedDrawerLink ? "active-link" : ""} px-3 py-2 rounded-full uppercase text-sm font-bold`;
            }}
          >
            {link.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
