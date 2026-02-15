import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="text-3xl font-display text-primary">NEON SPUR SALOON</h2>
            <p className="max-w-md text-sm leading-relaxed">
              The soul of Nashville with the pulse of the future. 
              Live music 7 days a week. VIP service. Unforgettable nights.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-bold mb-4 uppercase tracking-widest text-sm">Find Us</h3>
            <p className="text-sm">404 Broadway Ave</p>
            <p className="text-sm">Nashville, TN 37203</p>
            <p className="text-sm mt-4 text-accent">Valet Available</p>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4 uppercase tracking-widest text-sm">Hours</h3>
            <p className="text-sm flex justify-between"><span className="opacity-60">Sun - Wed</span> <span>11AM - 2AM</span></p>
            <p className="text-sm flex justify-between"><span className="opacity-60">Thu - Sat</span> <span>11AM - 3AM</span></p>
            <p className="text-sm mt-4 text-accent">Happy Hour 4-7PM Daily</p>
          </div>
        </div>
        
        <div className="border-t border-border/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
          <p>© 2024 Neon Spur Saloon. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
