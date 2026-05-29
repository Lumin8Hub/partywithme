import { useLocation } from "react-router-dom";
import { PartyPopper } from "lucide-react";
import PartyButton from "./PartyButton";

/** Thumb-reachable booking CTA on mobile, hidden on the booking page itself. */
const FloatingBookButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/book") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
      <PartyButton to="/book" variant="primary" size="lg" className="w-full shadow-lift">
        <PartyPopper className="h-5 w-5" />
        Book My Party
      </PartyButton>
    </div>
  );
};

export default FloatingBookButton;
