import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Package, Truck, CreditCard, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/animations/SectionReveal";
import PartyButton from "@/components/PartyButton";
import { Label } from "@/components/ui/label";
import { campTiers, campAddons } from "@/data/camp";
import { site } from "@/data/site";

const schema = z.object({
  contactName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "A phone number helps us reach you"),
  campName: z.string().min(2, "Please enter the camp name"),
  package: z.string().min(1, "Please select a package"),
  delivery: z.enum(["pickup", "shipping"], { required_error: "Please select a delivery option" }),
  childName: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const fieldBase =
  "w-full rounded-2xl border border-border bg-white px-4 py-3 text-party-navy shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-party-blue focus:ring-4 focus:ring-party-blue/15";

const Camp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [addons, setAddons] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { package: "", delivery: undefined },
  });

  const toggleAddon = (addon: string) =>
    setAddons((prev) => (prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]));

  const onSubmit = (values: FormValues) => {
    const lines = [
      `Contact name: ${values.contactName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Camp name: ${values.campName}`,
      `Package: ${values.package}`,
      `Delivery: ${values.delivery}`,
      values.childName ? `Birthday child: ${values.childName}` : "",
      addons.length ? `Add-ons: ${addons.join(", ")}` : "",
      values.notes ? `Notes: ${values.notes}` : "",
    ].filter(Boolean);

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
    if (endpoint) {
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, addons, formType: "camp" }),
      }).catch(() => undefined);
    } else {
      const subject = encodeURIComponent(`Birthday-in-a-Box order — ${values.package} (${values.campName})`);
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    }
    setSubmitted(true);
    toast.success("Order request sent! We'll confirm the details soon.");
  };

  return (
    <>
      <PageHero
        eyebrow="Birthday in a Box"
        title="Party fun delivered to camp"
        subtitle="Everything needed for an unforgettable camp birthday — pickup in Vaughan or shipped direct to camp. Pay by e-transfer, easy."
      />

      {/* How it works strip */}
      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Package, title: "Choose your package", body: "Pick the tier that fits your group and budget." },
              { icon: Truck, title: "Pickup or ship to camp", body: "Collect from Vaughan, or we ship directly to the camp address." },
              { icon: CreditCard, title: "Pay by e-transfer", body: "Simple e-transfer payment — we confirm once received." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-party-blue/10">
                  <Icon className="h-6 w-6 text-party-blue" />
                </span>
                <div>
                  <p className="font-display font-bold text-party-navy">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-party-sky py-14 md:py-20">
        <div className="container">
          <SectionReveal>
            <h2 className="mb-10 text-center font-display text-3xl font-bold text-party-navy">Choose your package</h2>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {campTiers.map((tier, i) => (
              <SectionReveal key={tier.name} delay={i * 0.08}>
                <div className={`flex h-full flex-col rounded-3xl border bg-white p-7 shadow-soft ${i === 1 ? "border-party-blue ring-2 ring-party-blue" : "border-border"}`}>
                  {i === 1 && (
                    <span className="mb-4 self-start rounded-full bg-party-blue px-3 py-1 text-xs font-bold text-white">
                      Most popular
                    </span>
                  )}
                  <p className="font-display text-xl font-bold text-party-navy">{tier.name}</p>
                  <p className="mt-1 text-3xl font-bold text-party-blue">${tier.price}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-party-navy">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-party-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Prices may change — always confirmed when you submit your order.
          </p>
        </div>
      </section>

      {/* Order form */}
      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-3xl">
          <SectionReveal>
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-party-navy">
              {submitted ? "Order received!" : "Place your order"}
            </h2>
          </SectionReveal>

          {submitted ? (
            <SectionReveal>
              <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-party-sky py-16 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-party-blue/10">
                  <PartyPopper className="h-10 w-10 text-party-blue" />
                </span>
                <h3 className="font-display text-2xl font-bold text-party-navy">
                  We've got your order!
                </h3>
                <p className="max-w-md text-muted-foreground">
                  We'll follow up shortly with payment details and to confirm your delivery choice.
                </p>
                <PartyButton to="/" variant="primary" className="mt-2">Back to home</PartyButton>
              </div>
            </SectionReveal>
          ) : (
            <SectionReveal>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-[2rem] border border-border bg-white p-6 shadow-soft md:p-10"
                noValidate
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your name" error={errors.contactName?.message}>
                    <input {...register("contactName")} className={fieldBase} placeholder="Jordan Smith" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" className={fieldBase} placeholder="you@email.com" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input {...register("phone")} className={fieldBase} placeholder="(555) 123-4567" />
                  </Field>
                  <Field label="Camp name" error={errors.campName?.message}>
                    <input {...register("campName")} className={fieldBase} placeholder="Camp Sunshine" />
                  </Field>
                  <Field label="Package" error={errors.package?.message}>
                    <select {...register("package")} className={fieldBase}>
                      <option value="">Choose a package…</option>
                      {campTiers.map((t) => (
                        <option key={t.name} value={t.name}>
                          {t.name} — ${t.price}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Delivery" error={errors.delivery?.message}>
                    <select {...register("delivery")} className={fieldBase}>
                      <option value="">Choose delivery…</option>
                      <option value="pickup">Pickup in Vaughan</option>
                      <option value="shipping">Ship direct to camp</option>
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Birthday child's name (optional)">
                      <input {...register("childName")} className={fieldBase} placeholder="The star of the show" />
                    </Field>
                  </div>
                </div>

                {/* Add-ons */}
                <div className="mt-8">
                  <Label className="font-display text-base font-semibold text-party-navy">
                    Add-ons <span className="font-normal text-muted-foreground">(optional)</span>
                  </Label>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {campAddons.map((addon) => {
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

                <div className="mt-8">
                  <Field label="Anything else? (optional)">
                    <textarea
                      {...register("notes")}
                      rows={3}
                      className={`${fieldBase} resize-none`}
                      placeholder="Special instructions, allergies, camp address for shipping…"
                    />
                  </Field>
                </div>

                <div className="mt-8">
                  <PartyButton type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
                    <PartyPopper className="h-5 w-5" />
                    Submit my order
                  </PartyButton>
                </div>
              </form>
            </SectionReveal>
          )}
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

export default Camp;
