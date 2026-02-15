import { motion } from "framer-motion";

export function InstagramFeed() {
  const images = [
    "/images/social1.jpg",
    "/images/social2.jpg",
    "/images/social3.jpg",
    "/images/social4.jpg",
    "/images/social5.jpg",
    "/images/social6.jpg",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display text-primary mb-2">@NeonSpurSaloon</h2>
            <p className="text-muted-foreground">Tag us to get featured on the big screen.</p>
          </div>
          <a href="#" className="hidden md:block text-accent hover:underline font-bold uppercase tracking-widest text-sm">Follow Us</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square relative group overflow-hidden rounded-md"
            >
              <img src={src} alt="Social feed" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground text-xs font-bold uppercase tracking-widest">View Post</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramFeed;
