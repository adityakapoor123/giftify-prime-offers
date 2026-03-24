import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="bg-surface-dark text-surface-dark-foreground py-16 md:py-20">
    <div className="container max-w-2xl text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Get Started?</h2>
      <p className="text-surface-dark-foreground/70 text-lg">
        Check your eligibility and complete a quick questionnaire to see if you qualify for an Amazon gift card reward.
      </p>
      <Button
        size="lg"
        className="text-lg px-10 py-6 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group"
        onClick={() => window.open("https://giftclick.org/aff_c?offer_id=340&aff_id=172627", "_blank")}
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <p className="text-sm text-surface-dark-foreground/50">
        By clicking "Get Started", you agree to our Terms & Conditions.
      </p>
    </div>
  </section>
);

export default CtaSection;
