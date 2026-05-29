import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import PartyButton from "./PartyButton";
import { navLinks } from "@/data/site";
import { useRegion, regionLabel, type RegionChoice } from "@/context/RegionContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RegionPicker = ({ compact = false }: { compact?: boolean }) => {
  const { region, setRegion } = useRegion();
  const options: RegionChoice[] = ["both", "toronto", "boston"];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-semibold text-party-navy transition-colors hover:border-party-blue/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-party-blue/30"
        aria-label="Choose your region"
      >
        <MapPin className="h-4 w-4 text-party-blue" />
        {regionLabel[region]}
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={compact ? "start" : "end"} className="rounded-2xl">
        {options.map((opt) => (
          <DropdownMenuItem
            key={opt}
            onClick={() => setRegion(opt)}
            className="cursor-pointer rounded-xl font-medium"
          >
            {regionLabel[opt]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-display font-medium text-[15px] transition-colors ${
      isActive ? "text-party-blue" : "text-party-navy hover:text-party-blue"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-soft backdrop-blur-md" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <RegionPicker />
          <PartyButton to="/book" variant="primary" size="md">
            Book My Party
          </PartyButton>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-party-navy lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 font-display font-medium ${
                    isActive ? "bg-party-paper text-party-blue" : "text-party-navy"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <RegionPicker compact />
              <PartyButton to="/book" variant="primary" className="flex-1">
                Book My Party
              </PartyButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
