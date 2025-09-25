import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import SEO from "@/components/ui/seo";
import { usePerformanceMonitoring } from "@/components/ui/performance";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// SEO-enabled route wrapper
const SEOEnabledRoute = ({
  path,
  element,
  pageKey
}: {
  path: string;
  element: React.ReactNode;
  pageKey?: string;
}) => {
  const { t } = useTranslation('titles');

  const getSEOMeta = () => {
    if (pageKey) {
      return {
        title: t(`${pageKey}.title`),
        description: t(`${pageKey}.description`)
      };
    }
    return {};
  };

  return (
    <>
      <SEO {...getSEOMeta()} />
      {element}
    </>
  );
};

const App = () => {
  // Enable performance monitoring
  usePerformanceMonitoring();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<SEOEnabledRoute
                  path="/"
                  element={<Index />}
                  pageKey="home"
                />} />
                <Route path="/features" element={<SEOEnabledRoute
                  path="/features"
                  element={<Features />}
                  pageKey="features"
                />} />
                <Route path="/pricing" element={<SEOEnabledRoute
                  path="/pricing"
                  element={<Pricing />}
                  pageKey="pricing"
                />} />
                <Route path="/terms" element={<SEOEnabledRoute
                  path="/terms"
                  element={<TermsOfService />}
                  pageKey="terms"
                />} />
                <Route path="/privacy" element={<SEOEnabledRoute
                  path="/privacy"
                  element={<PrivacyPolicy />}
                  pageKey="privacy"
                />} />
                <Route path="/refund" element={<SEOEnabledRoute
                  path="/refund"
                  element={<RefundPolicy />}
                  pageKey="refund"
                />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<SEOEnabledRoute
                  path="*"
                  element={<NotFound />}
                  pageKey="notfound"
                />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
  );
};

export default App;
