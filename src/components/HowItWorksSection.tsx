import { MapPinCheck, ClipboardList, Mail } from "lucide-react";

const steps = [
  {
    icon: MapPinCheck,
    title: "Check Availability",
    description: "Verify if the offer is available in your region using our eligibility checker.",
  },
  {
    icon: ClipboardList,
    title: "Complete Questionnaire",
    description: "Answer a short, legitimate questionnaire about your basic preferences.",
  },
  {
    icon: Mail,
    title: "Submit & Receive",
    description: "Submit your email to receive rewards if you're eligible. It's that simple.",
  },
];

const HowItWorksSection = () => (
  <section className="py-16 md:py-20">
    <div className="container max-w-4xl space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold">How It Works</h2>
        <p className="text-muted-foreground text-lg">Three simple steps to check your eligibility</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative text-center space-y-4 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <step.icon className="h-7 w-7" />
            </div>
            <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
