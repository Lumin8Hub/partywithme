import { FloatingConfetti } from "@/components/decor/Decor";
import PartyButton from "@/components/PartyButton";

const NotFound = () => (
  <section className="relative overflow-hidden bg-party-paper">
    <FloatingConfetti count={12} />
    <div className="container relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl font-bold text-party-blue md:text-8xl">404</p>
      <h1 className="headline mt-4">This page ran off to the party</h1>
      <p className="subheadline mx-auto mt-4 max-w-md">
        We couldn't find that one. Let's get you back to the fun.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <PartyButton to="/" variant="primary">
          Back to home
        </PartyButton>
        <PartyButton to="/parties" variant="outline">
          See the parties
        </PartyButton>
      </div>
    </div>
  </section>
);

export default NotFound;
