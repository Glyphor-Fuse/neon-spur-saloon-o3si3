import { motion } from "framer-motion";
import { BookingModal } from "./BookingModal";

export function Hero() {
  return (
    <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Neon Spur Saloon Interior"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-4.5 mb-4 border border-accent/30 rounded-full bg-background/40 backdrop-blur-sm">
            <span className="text-accent font-medium tracking-widest text-xs uppercase">Nashville's Premier Honky Tonk</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display text-foreground tracking-tight drop-shadow-xl">
            NEON SPUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">SALOON</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Where heritage meets high voltage. Live country music, VIP service, and the coldest drinks on Broadway.
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <BookingModal className="w-full md:w-auto px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300" />
            
            <button className="px-8 py-3 rounded-md text-foreground hover:text-accent font-medium tracking-wide transition-colors uppercase text-sm border-b border-transparent hover:border-accent">
              View Artists
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
      </motion.div>
    </div>
  );
}

export default Hero;
