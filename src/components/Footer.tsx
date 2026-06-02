import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import Logo from "./Logo";
import { site, navLinks } from "@/data/site";

const moreLinks = [
  { label: "All Parties", to: "/parties" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-party-navy">
    <div className="container py-14 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo onDark />
          <p className="mt-4 max-w-xs text-white/60">
            Fully-led birthday parties in your own space. We bring the fun — you take the credit.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-party-pink transition-colors hover:bg-white/20">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-party-blue transition-colors hover:bg-white/20">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={site.social.messenger} target="_blank" rel="noreferrer" aria-label="Messenger" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-party-grape transition-colors hover:bg-white/20">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email us" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            {moreLinks.slice(0, 2).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">More</h4>
          <ul className="mt-4 space-y-2.5">
            {moreLinks.slice(2).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.joinTeam.gta} target="_blank" rel="noreferrer" className="text-white/60 transition-colors hover:text-white">
                Join our team — GTA
              </a>
            </li>
            <li>
              <a href={site.joinTeam.boston} target="_blank" rel="noreferrer" className="text-white/60 transition-colors hover:text-white">
                Join our team — Boston
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3">
            <li className="text-sm text-white/60">
              Serving the Greater Toronto &amp; Greater Boston areas.
            </li>
            <li className="text-sm">
              <a href={`mailto:${site.email}`} className="font-semibold text-party-blue hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} Party With Me. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link to="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <span>Made with confetti &amp; care.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
