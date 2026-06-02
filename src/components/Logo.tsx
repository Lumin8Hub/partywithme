import { Link } from "react-router-dom";
import { asset } from "@/lib/asset";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/** "Party With Me!" brand logo. */
const Logo = ({ className = "", onClick }: LogoProps) => (
  <Link
    to="/"
    onClick={onClick}
    aria-label="Party With Me — home"
    className={`group inline-flex items-center ${className}`}
  >
    <img
      src={asset("/images/logo.png")}
      alt="Party With Me"
      className="h-11 w-auto transition-transform group-hover:-rotate-2 group-hover:scale-105 md:h-12"
    />
  </Link>
);

export default Logo;
