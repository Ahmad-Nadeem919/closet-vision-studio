import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ruler, Video, Scissors, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    id: "size",
    icon: Ruler,
    title: "Smart Size Recommendation",
    description: "Our AI analyzes garment dimensions against your unique body measurements from a simple mobile scan. We factor in intended fit, fabric stretch, and your preferences for pinpoint accuracy.",
    badge: "Live Now",
    badgeVariant: "default" as const,
    gradient: "from-primary to-primary-glow",
  },
  {
    id: "virtual",
    icon: Video,
    title: "Virtual Try-On Experience",
    description: "See exactly how clothes will look on you with our advanced avatar technology. We simulate realistic fabric textures, drape, and movement for a true-to-life visualization.",
    badge: "Coming Soon",
    badgeVariant: "secondary" as const,
    gradient: "from-secondary to-accent",
  },
  {
    id: "made-to-fit",
    icon: Scissors,
    title: "Custom Made-to-Fit",
    description: "Revolutionary technology that enables brands to create perfectly fitted garments at scale. Reduce waste, boost satisfaction, and increase revenue with custom manufacturing.",
    badge: "Coming Soon",
    badgeVariant: "secondary" as const,
    gradient: "from-accent to-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Future of{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fashion Technology
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three revolutionary products designed to transform online shopping forever
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              id={feature.id}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant={feature.badgeVariant} className="flex items-center space-x-1">
                    {feature.badge === "Coming Soon" && <Clock className="w-3 h-3" />}
                    <span>{feature.badge}</span>
                  </Badge>
                </div>
                
                <CardTitle className="text-xl lg:text-2xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-primary/5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
