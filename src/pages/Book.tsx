import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { PartyPopper, Check, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import PartyButton from "@/components/PartyButton";
import ConfettiBurst from "@/components/decor/ConfettiBurst";
import { Label } from "@/components/ui/label";
import { listedParties } from "@/data/parties";
import { globalAddons, timeWindows, sizeOptions } from "@/data/addons";
import { site } from "@/data/site";

const schema = z.object({
  parentName: z.string().min(2, "Please tell us your name"),
  phone: z.string().min(7, "A phone number helps us reach you"),
  email: z.string().email("Please enter a valid email"),
  theme: z.string().min(1, "Pick a party theme"),
  customTheme: z.string().optional(),
  size: z.string().min(1, "Roughly how many kids?"),
  location: z.string().min(2, "Which town or city?"),
  date: z.string().min(1, "Pick a preferred date"),
  time: z.string().min(1, "Pick a preferred time"),
  childAge: z.string().min(1, "How old is the birthday kid?"),
  childName: z.string().optional(),
  requests: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const fieldBase =
  "w-full rounded-2xl border border-border bg-white px-4 py-3 text-party-navy shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-party-blue focus:ring-4 focus:ring-party-blue/15";

const Book = () => {
  const [submitted, setSubmitted] = useState(false);
  const [addons, setAddons] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { theme: "", size: "", time: "" },
  });

  const theme = watch("theme");

  const toggleAddon = (addon: string) =>
    setAddons((prev) => (prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]));

  const onSubmit = (values: FormValues) => {
    const themeLabel =
      values.theme === "Custom / not sure yet" && values.customTheme
        ? `${values.theme} — ${values.customTheme}`
        : values.theme;

    const lines = [
      `Parent name: ${values.parentName}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Party theme: ${themeLabel}`,
      `Party size: ${values.size}`,
      `Location: ${values.location}`,
      `Preferred date: ${values.date}`,
      `Preferred time: ${values.time}`,
      `Birthday child's age: ${values.childAge}`,
      values.childName ? `Birthday child's name: ${values.childName}` : "",
      addons.length ? `Add-ons: ${addons.join(", ")}` : "",
      values.requests ? `Custom requests: ${values.requests}` : "",
    ].filter(Boolean);

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
    if (endpoint) {
      // Fire-and-forget post to a form backend (e.g. Formspree) when configured.
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, addons }),
      }).catch(() => undefined);
    } else {
      // No backend configured: open the visitor's mail client pre-filled.
      const subject = encodeURIComponent(`Party inquiry — ${themeLabel} (${values.parentName})`);
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative overflow-hidden bg-party-sky">
        <ConfettiBurst />
        <div className="container relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-party-lime/20">
            <PartyPopper className="h-10 w-10 text-party-lime" />
          </span>
          <h1 className="headline mt-6">Yay! 🎉 Your request is in.</h1>
          <p className="subheadline mx-auto mt-4 max-w-lg">
            We'll be in touch soon to confirm the details and lock in your date. Keep an eye on your
            inbox (and maybe your spam folder, just in case).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PartyButton to="/" variant="primary">
              Back to home
            </PartyButton>
            <PartyButton to="/parties" variant="outline">
              Browse more parties
            </PartyButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Book my party"
        title="Let's plan something unforgettable"
        subtitle="Fill in a few details and we'll get back to you with availability and a simple quote. No payment now — this just kicks things off."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-3xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[2rem] border border-border bg-white p-6 shadow-soft md:p-10"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" error={errors.parentName?.message}>
                <input {...register("parentName")} className={fieldBase} placeholder="Jordan Smith" />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone")} className={fieldBase} placeholder="(555) 123-4567" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input {...register("email")} type="email" className={fieldBase} placeholder="you@email.com" />
              </Field>
              <Field label="Town / city" error={errors.location?.message}>
                <input {...register("location")} className={fieldBase} placeholder="Vaughan, ON" />
              </Field>

              <Field label="Party theme" error={errors.theme?.message}>
                <select {...register("theme")} className={fieldBase}>
                  <option value="">Choose a theme…</option>
                  {listedParties.map((p) => (
                    <option key={p.slug} value={p.name}>
                      {p.name}{p.price ? ` — from $${p.price}` : ""}
                    </option>
                  ))}
                  <option value="Custom / not sure yet">Custom / not sure yet</option>
                </select>
              </Field>
              <Field label="Party size" error={errors.size?.message}>
                <select {...register("size")} className={fieldBase}>
                  <option value="">How many kids?</option>
                  {sizeOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              {theme === "Custom / not sure yet" && (
                <div className="sm:col-span-2">
                  <Field label="Tell us your idea (optional)">
                    <input
                      {...register("customTheme")}
                      className={fieldBase}
                      placeholder="A mash-up of slime + science, maybe?"
                    />
                  </Field>
                </div>
              )}

              <Field label="Preferred date" error={errors.date?.message}>
                <input {...register("date")} type="date" className={fieldBase} />
              </Field>
              <Field label="Preferred time" error={errors.time?.message}>
                <select {...register("time")} className={fieldBase}>
                  <option value="">Pick a window</option>
                  {timeWindows.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Birthday child's age" error={errors.childAge?.message}>
                <input {...register("childAge")} className={fieldBase} placeholder="e.g. 7" inputMode="numeric" />
              </Field>
              <Field label="Birthday child's name (optional)">
                <input {...register("childName")} className={fieldBase} placeholder="The star of the show" />
              </Field>
            </div>

            {/* Add-ons */}
            <div className="mt-8">
              <Label className="font-display text-base font-semibold text-party-navy">
                Add-ons <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {globalAddons.map((addon) => {
                  const active = addons.includes(addon);
                  return (
                    <button
                      type="button"
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        active
                          ? "border-party-blue bg-party-blue text-white"
                          : "border-border bg-white text-party-navy hover:border-party-blue/50"
                      }`}
                    >
                      {active && <Check className="h-3.5 w-3.5" />}
                      {addon}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Requests */}
            <div className="mt-8">
              <Field label="Anything else? (optional)">
                <textarea
                  {...register("requests")}
                  rows={4}
                  className={`${fieldBase} resize-none`}
                  placeholder="Allergies, a special request, a sibling joining in — tell us anything that helps."
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <PartyButton type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                <PartyPopper className="h-5 w-5" />
                Send my party request
              </PartyButton>
              <p className="text-center text-sm text-muted-foreground">
                Prefer email? Reach us at{" "}
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1 font-semibold text-party-blue hover:underline">
                  <Mail className="h-3.5 w-3.5" /> {site.email}
                </a>
              </p>
            </div>
          </form>

          <p className="mx-auto mt-6 max-w-xl text-center text-xs text-muted-foreground">
            By sending a request you agree to our{" "}
            <Link to="/privacy" className="underline hover:text-party-blue">
              privacy policy
            </Link>
            . We only use your details to plan your party.
          </p>
        </div>
      </section>
    </>
  );
};

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const Field = ({ label, error, children }: FieldProps) => (
  <div>
    <Label className="mb-1.5 block font-medium text-party-navy">{label}</Label>
    {children}
    {error && <p className="mt-1.5 text-sm font-medium text-party-pink">{error}</p>}
  </div>
);

export default Book;
