import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sections } from "@/components/Sections";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={0}>
        <Toaster position="top-center" />
        <main className="min-h-screen bg-background text-foreground font-sans antialiased">
          <Sections />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
