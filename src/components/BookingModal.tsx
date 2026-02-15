import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Sparkles, Star } from 'lucide-react';
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function BookingModal({ triggerLabel = "Book VIP Now", className }: { triggerLabel?: string, className?: string }) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    toast.success("VIP Request Sent!", {
      description: "We'll text you within 15 mins to confirm your booth.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={cn("bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg tracking-wide uppercase", className)}>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-border text-card-foreground">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl text-primary tracking-wider">Secure Your Spot</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            VIP Booths sell out fast for weekend sets. Reserve yours now.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" placeholder="Johnny Cash" className="col-span-3 bg-background border-input" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="guests" className="text-right">Guests</Label>
            <Select>
              <SelectTrigger className="col-span-3 bg-background border-input">
                <SelectValue placeholder="Select count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="6">6-8 Guests (Booth)</SelectItem>
                <SelectItem value="10">10+ (Party Deck)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-3 justify-start text-left font-normal bg-background border-input",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Star className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a night</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4 bg-card border-border" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-card text-card-foreground"
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button type="submit" className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
            <SparklesCore className="mr-2 h-4 w-4" /> Confirm Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default BookingModal;
