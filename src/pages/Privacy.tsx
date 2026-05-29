import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

const Privacy = () => (
  <>
    <PageHero
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="Your details are used only to plan your party. We never sell your information."
      confetti={false}
    />

    <section className="bg-white py-14 md:py-20">
      <div className="container max-w-3xl space-y-8 text-muted-foreground">
        <div>
          <h2 className="font-display text-xl font-bold text-party-navy">What we collect</h2>
          <p className="mt-2">
            When you send a party inquiry, we collect the details you share with us — like your name,
            contact information, party date, location and preferences — so we can plan and confirm
            your booking.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-party-navy">How we use it</h2>
          <p className="mt-2">
            We use your information solely to respond to your inquiry, organise your party and keep
            you updated about your booking. We may send a follow-up to see how the party went.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-party-navy">What we don't do</h2>
          <p className="mt-2">
            We never sell, rent or trade your personal information. We don't share it with third
            parties except where strictly needed to run your party (for example, the leader assigned
            to your event).
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-party-navy">Questions</h2>
          <p className="mt-2">
            Want to know what we have on file, or ask us to delete it? Email us any time at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-party-blue hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Privacy;
