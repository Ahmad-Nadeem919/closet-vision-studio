import { Scan, Wand2, ShoppingBag, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Scan,
    number: "01",
    title: "Scan Your Body",
    description: "Use our AI-powered scanner to capture your precise measurements in seconds using just your smartphone camera.",
  },
  {
    icon: Wand2,
    number: "02",
    title: "AI Magic Happens",
    description: "Our advanced algorithms analyze thousands of data points to understand your unique body shape and preferences.",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Shop with Confidence",
    description: "Browse items with personalized size recommendations and virtual try-on for every product you love.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Perfect Fit Delivered",
    description: "Receive garments that fit perfectly or get custom-made pieces tailored exactly to your measurements.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting your perfect fit is easier than ever with our simple 4-step process
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step Card */}
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
