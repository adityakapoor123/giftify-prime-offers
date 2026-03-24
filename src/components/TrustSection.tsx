import { ShieldCheck, Download, EyeOff, AlertTriangle, Star } from "lucide-react";

const badges = [
  { icon: Download, label: "No Downloads Required" },
  { icon: EyeOff, label: "No Hidden Conditions" },
  { icon: AlertTriangle, label: "Participation Does Not Guarantee a Reward" },
  { icon: ShieldCheck, label: "Secure & Verified Offer" },
];

const testimonials = [
  {
    name: "Sarah M.",
    country: "United States",
    text: "I was skeptical at first, but the process was straightforward. I received my gift card within a week!",
    rating: 5,
  },
  {
    name: "James K.",
    country: "United Kingdom",
    text: "Simple questionnaire, no hidden catches. Received the reward as promised. Highly recommend.",
    rating: 5,
  },
  {
    name: "Priya R.",
    country: "India",
    text: "Quick and easy eligibility check. The transparency about terms gave me confidence to participate.",
    rating: 4,
  },
];

const TrustSection = () => (
  <section className="bg-surface-warm py-16 md:py-20">
    <div className="container max-w-5xl space-y-16">
      {/* Badges */}
      <div className="space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Why Trust Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-3 rounded-xl bg-card border p-5 shadow-sm">
              <b.icon className="h-8 w-8 text-trust-green" />
              <span className="text-sm font-semibold text-center leading-tight">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data Transparency */}
      <div className="rounded-2xl bg-card border p-6 md:p-8 text-center space-y-3">
        <ShieldCheck className="h-10 w-10 mx-auto text-primary" />
        <h3 className="text-xl font-bold">Your Data, Your Control</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We only collect your email and basic preferences to determine eligibility. Your data is never sold to third parties and is stored securely. You can request deletion at any time.
        </p>
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">What Participants Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl bg-card border p-6 shadow-sm space-y-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < t.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{t.text}"</p>
              <div className="text-sm font-semibold">
                {t.name} <span className="text-muted-foreground font-normal">· {t.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
