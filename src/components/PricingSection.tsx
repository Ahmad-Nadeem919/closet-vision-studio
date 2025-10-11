import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "Perfect for small boutiques and emerging brands",
    features: [
      "Up to 1,000 scans/month",
      "Basic size recommendations",
      "Email support",
      "API access",
      "Analytics dashboard",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "799",
    description: "Ideal for growing fashion businesses",
    features: [
      "Up to 10,000 scans/month",
      "Advanced AI recommendations",
      "Virtual try-on feature",
      "Priority support",
      "Custom branding",
      "Advanced analytics",
      "Made-to-fit integration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale fashion operations",
    features: [
      "Unlimited scans",
      "Full feature suite",
      "24/7 dedicated support",
      "Custom integrations",
      "White-label solution",
      "On-premise deployment",
      "SLA guarantee",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your business needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl bg-card border transition-all duration-300 hover:shadow-xl animate-fade-in-up ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 lg:scale-110"
                  : "border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-white text-sm font-semibold flex items-center space-x-1 shadow-lg">
                  <Zap className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                {plan.price === "Custom" ? (
                  <div className="text-4xl font-bold">Contact Us</div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>

              {/* Hover Effect */}
              {!plan.popular && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
