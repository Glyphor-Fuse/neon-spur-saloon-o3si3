import { motion } from "framer-motion";
import { MapPin, Star } from 'lucide-react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function Spotlight() {
  const items = [
    {
      title: "Neon Nights: Live Band",
      description: "Every Friday & Saturday, the best honky-tonk bands in Nashville take our main stage.",
      header: <SkeletonImage src="/images/band.jpg" alt="Live Band" />,
      icon: <Star className="h-4 w-4 text-accent" />,
      className: "md:col-span-2",
    },
    {
      title: "Signature Sips",
      description: "Try our 'Smoked Copper' Old Fashioned. Half price during Happy Hour (4-7PM).",
      header: <SkeletonImage src="/images/drink.jpg" alt="Cocktail" />,
      icon: <Star className="h-4 w-4 text-accent" />,
      className: "md:col-span-1",
    },
    {
      title: "VIP Experience",
      description: "Skip the line and get the best view in the house. Bottle service available.",
      header: <SkeletonImage src="/images/vip.jpg" alt="VIP Area" />,
      icon: <MapPin className="h-4 w-4 text-accent" />,
      className: "md:col-span-1",
    },
    {
      title: "Upcoming Acts",
      description: "Check out who is playing this month. From local legends to rising stars.",
      header: <SkeletonImage src="/images/crowd.jpg" alt="Crowd" />,
      icon: <Star className="h-4 w-4 text-accent" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4 tracking-tight">
            The <span className="text-accent">Neon</span> Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            More than just a bar. We are the heartbeat of modern Nashville nightlife.
          </p>
        </div>
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const SkeletonImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 overflow-hidden relative border border-border/10">
    <img 
      src={src} 
      alt={alt} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 opacity-80 hover:opacity-100" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
  </div>
);

export default Spotlight;
