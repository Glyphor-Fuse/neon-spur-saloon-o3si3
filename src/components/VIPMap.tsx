import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MapPin, Users, Info } from "lucide-react";

export function VIPMap() {
  const [hoveredZone, setHoveredZone] = React.useState<string | null>(null);

  const zones = [
    {
      id: "stage",
      name: "Main Stage",
      path: "M 200 50 L 600 50 L 580 150 L 220 150 Z",
      color: "var(--accent)", // Replaced hex with var
      desc: "Front row access to the band.",
      capacity: "Standing",
    },
    {
      id: "vip-booths",
      name: "VIP Booths (Raised)",
      path: "M 50 100 L 150 100 L 150 400 L 50 400 Z",
      color: "var(--primary)", // Replaced hex with var
      desc: "Private service, elevated view.",
      capacity: "6-8 Guests",
    },
    {
      id: "bar",
      name: "Copper Bar",
      path: "M 650 100 L 750 100 L 750 400 L 650 400 Z",
      color: "var(--primary)", // Replaced hex with var
      desc: "High energy, quick drinks.",
      capacity: "Open Seating",
    },
    {
      id: "floor",
      name: "General Floor",
      path: "M 180 180 L 620 180 L 620 400 L 180 400 Z",
      color: "var(--secondary)", // Replaced hex with var
      desc: "The heart of the action.",
      capacity: "Standing / Tables",
    },
  ];

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-4xl font-display text-primary">Interactive Floor Map</h2>
            <p className="text-muted-foreground text-lg">
              Explore our venue layout. Hover over a zone to see the view and capacity. Book your preferred spot instantly.
            </p>
            
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {hoveredZone ? (
                  <motion.div
                    key={hoveredZone}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-6 bg-card border border-accent/20 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                  >
                    <h3 className="text-2xl font-display text-accent mb-2">
                      {zones.find(z => z.id === hoveredZone)?.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Users className="w-4 h-4" />
                      {zones.find(z => z.id === hoveredZone)?.capacity}
                    </div>
                    <p className="text-muted-foreground">
                      {zones.find(z => z.id === hoveredZone)?.desc}
                    </p>
                  </motion.div>
                ) : (
                  <div className="p-6 border border-border/20 rounded-xl bg-card/50">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Info className="w-5 h-5" />
                      <span>Hover over the map to explore details</span>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full md:w-2/3 aspect-video relative bg-background rounded-xl border-2 border-border shadow-2xl overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,140,86,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,140,86,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <svg viewBox="0 0 800 500" className="w-full h-full drop-shadow-xl">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {zones.map((zone) => (
                <Tooltip key={zone.id}>
                  <TooltipTrigger asChild>
                    <motion.path
                      d={zone.path}
                      fill={zone.color}
                      fillOpacity={hoveredZone === zone.id ? 0.3 : 0.1}
                      stroke={zone.color}
                      strokeWidth={hoveredZone === zone.id ? 3 : 1}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      whileHover={{ scale: 1.02, filter: "url(#glow)" }}
                      onMouseEnter={() => setHoveredZone(zone.id)}
                      onMouseLeave={() => setHoveredZone(null)}
                      className="cursor-pointer transition-all duration-300"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-popover border-accent text-popover-foreground">
                    <p className="font-bold">{zone.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}

              {/* Decorative Labels inside SVG */}
              <text x="400" y="100" textAnchor="middle" fill="var(--accent)" className="font-display text-sm opacity-50 pointer-events-none tracking-widest">STAGE</text>
              <text x="100" y="250" textAnchor="middle" fill="var(--primary)" className="font-display text-sm opacity-50 pointer-events-none tracking-widest rotate-[-90deg]">VIP DECK</text>
              <text x="700" y="250" textAnchor="middle" fill="var(--primary)" className="font-display text-sm opacity-50 pointer-events-none tracking-widest rotate-[90deg]">BAR</text>
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-4 right-4 flex gap-4 text-xs font-mono text-primary-foreground/50">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-accent/20 border border-accent"></div>Available</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-primary/20 border border-primary"></div>Reserved</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VIPMap;
