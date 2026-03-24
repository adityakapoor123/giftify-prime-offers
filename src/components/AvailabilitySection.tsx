import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, CheckCircle2, XCircle } from "lucide-react";

const ELIGIBLE_COUNTRIES = ["United States", "United Kingdom", "Canada", "Germany", "France", "Australia", "Japan", "India"];
const ALL_COUNTRIES = [
  ...ELIGIBLE_COUNTRIES,
  "Brazil", "Mexico", "South Korea", "Italy", "Spain", "Netherlands", "Sweden", "Norway",
  "Argentina", "Chile", "Colombia", "South Africa", "Nigeria", "Egypt", "Turkey", "Poland",
];

const AvailabilitySection = () => {
  const [selected, setSelected] = useState<string>("");
  const [checked, setChecked] = useState(false);

  const isEligible = ELIGIBLE_COUNTRIES.includes(selected);

  return (
    <section id="availability" className="bg-surface-warm py-16 md:py-20">
      <div className="container max-w-2xl text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold">Check Your Eligibility</h2>
          <p className="text-muted-foreground text-lg">
            Offer available only in limited countries. Eligibility may vary based on location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="w-full sm:w-72">
            <Select onValueChange={(v) => { setSelected(v); setChecked(false); }}>
              <SelectTrigger className="h-12 bg-card text-base">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {ALL_COUNTRIES.sort().map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            size="lg"
            onClick={() => setChecked(true)}
            disabled={!selected}
            className="h-12 px-8 font-semibold"
          >
            Check Now
          </Button>
        </div>

        {checked && (
          <div className={`inline-flex items-center gap-3 rounded-lg px-6 py-4 text-left text-base font-medium ${
            isEligible
              ? "bg-trust-green/10 text-trust-green"
              : "bg-destructive/10 text-destructive"
          }`}>
            {isEligible ? (
              <>
                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                <span>Great news! The offer is available in {selected}. Scroll down to get started.</span>
              </>
            ) : (
              <>
                <XCircle className="h-6 w-6 flex-shrink-0" />
                <span>Sorry, the offer is not currently available in {selected}. Check back later.</span>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailabilitySection;
