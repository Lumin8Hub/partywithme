import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/** "Party With Me" playful multi-colour wordmark with a sparkle. */
const Logo = ({ className = "", onClick }: LogoProps) => (
  <Link
    to="/"
    onClick={onClick}
    aria-label="Party With Me — home"
    className={`group inline-flex items-baseline gap-1 font-display font-bold leading-none ${className}`}
  >
    <span className="text-2xl md:text-[1.6rem] text-party-blue transition-transform group-hover:-rotate-2">
      Party
    </span>
    <span className="text-2xl md:text-[1.6rem] text-party-pink transition-transform group-hover:rotate-2">
      With
    </span>
    <span className="text-2xl md:text-[1.6rem] text-party-grape">Me</span>
    <svg
      viewBox="0 0 24 24"
      className="ml-0.5 h-4 w-4 self-start text-party-sunshine transition-transform group-hover:scale-125"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1c.7 3.3 2.7 5.3 6 6-3.3.7-5.3 2.7-6 6-.7-3.3-2.7-5.3-6-6 3.3-.7 5.3-2.7 6-6z" />
    </svg>
  </Link>
);

export default Logo;
