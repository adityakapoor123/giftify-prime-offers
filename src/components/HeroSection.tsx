import heroImage from "@/assets/hero-gift-cards.png";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const HeroSection = () => {
  const scrollToAvailability = () => {
    document.getElementById("availability")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-surface-dark text-surface-dark-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Gift className="h-4 w-4" />
              Limited Time Offer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Win Amazon Gift Cards 🎁
            </h1>
            <p className="text-lg md:text-xl text-surface-dark-foreground/70 max-w-lg">
              Exclusive rewards available in selected countries. Check if you're eligible and claim your reward today.
            </p>
            <Button
              size="lg"
              onClick={scrollToAvailability}
              className="text-lg px-8 py-6 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
            >
              Check Availability
            </Button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Gift cards with ribbons"
              width={1024}
              height={1024}
              className="w-72 md:w-96 drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
