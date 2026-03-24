const FooterSection = () => (
  <footer className="border-t bg-card py-10">
    <div className="container max-w-4xl space-y-6 text-center">
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
      </div>
      <div className="space-y-2 text-xs text-muted-foreground/80">
        <p>
          <strong>Disclaimer:</strong> This is an independent promotional page and not directly affiliated with Amazon. Amazon and the Amazon logo are trademarks of Amazon.com, Inc.
        </p>
        <p>
          Participation does not guarantee a reward. Eligibility is subject to terms and conditions. Offers may change or expire without notice.
        </p>
      </div>
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Gift Card Rewards. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
