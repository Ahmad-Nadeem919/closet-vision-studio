import { TrendingDown, Heart, Leaf, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Returns",
    description: "Eliminate size guessing and minimize customer returns by up to 70%",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Boost Satisfaction",
    description: "Deliver perfect fits every time, creating happier, loyal customers",
    color: "text-accent",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Cut overproduction and waste with precision manufacturing",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Drive sales growth with confident purchases and fewer refunds",
    color: "text-primary",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 relative" id="benefits">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FitStyle AI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your business with measurable results that matter
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to revolutionize your fashion business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of brands already using FitStyle AI to deliver exceptional shopping experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
