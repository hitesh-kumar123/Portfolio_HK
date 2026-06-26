import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";

const queryClient = new QueryClient();

const App = () => {
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    // Enforce dark mode globally
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsThemeLoaded(true);
  }, []);

  if (!isThemeLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollProgress />
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
