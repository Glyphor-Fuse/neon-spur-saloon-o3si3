import { Hero } from "@/components/Hero";
import { Spotlight } from "@/components/Spotlight";
import { VIPMap } from "@/components/VIPMap";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "@/components/Footer";

const testimonials = [
  {
    quote: "The energy here is unmatched. It feels like old school Nashville but with a modern electric twist. Best VIP service on Broadway.",
    name: "Sarah Jenkins",
    designation: "Nashville Local",
    src: "/images/avatar1.jpg",
  },
  {
    quote: "Booked a booth for my bachelor party. The view of the stage was perfect and the whiskey selection is top tier.",
    name: "Mike Ross",
    designation: "Visitor from Austin",
    src: "/images/avatar2.jpg",
  },
  {
    quote: "Finally a honky tonk that doesn't feel like a tourist trap. Great music, great lighting, and the staff actually cares.",
    name: "Jessica Wu",
    designation: "Music Blogger",
    src: "/images/avatar3.jpg",
  }
];

export function Sections() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      <Hero />
      <Spotlight />
      <VIPMap />
      <AnimatedTestimonials testimonials={testimonials} />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default Sections;
