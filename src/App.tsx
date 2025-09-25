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
  titleKey,
  descriptionKey,
  keywordsKey
}: {
  path: string;
  element: React.ReactNode;
  titleKey?: string;
  descriptionKey?: string;
  keywordsKey?: string;
}) => {
  const { t } = useTranslation();

  const getSEOMeta = () => {
    if (titleKey && descriptionKey && keywordsKey) {
      return {
        title: t(titleKey),
        description: t(descriptionKey),
        keywords: t(keywordsKey)
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
                  titleKey="seo.home.title"
                  descriptionKey="seo.home.description"
                  keywordsKey="seo.home.keywords"
                />} />
                <Route path="/features" element={<SEOEnabledRoute
                  path="/features"
                  element={<Features />}
                  titleKey="seo.features.title"
                  descriptionKey="seo.features.description"
                  keywordsKey="seo.features.keywords"
                />} />
                <Route path="/pricing" element={<SEOEnabledRoute
                  path="/pricing"
                  element={<Pricing />}
                  titleKey="seo.pricing.title"
                  descriptionKey="seo.pricing.description"
                  keywordsKey="seo.pricing.keywords"
                />} />
                <Route path="/terms" element={<SEOEnabledRoute
                  path="/terms"
                  element={<TermsOfService />}
                  titleKey="seo.terms.title"
                  descriptionKey="seo.terms.description"
                  keywordsKey="seo.terms.keywords"
                />} />
                <Route path="/privacy" element={<SEOEnabledRoute
                  path="/privacy"
                  element={<PrivacyPolicy />}
                  titleKey="seo.privacy.title"
                  descriptionKey="seo.privacy.description"
                  keywordsKey="seo.privacy.keywords"
                />} />
                <Route path="/refund" element={<SEOEnabledRoute
                  path="/refund"
                  element={<RefundPolicy />}
                  titleKey="seo.refund.title"
                  descriptionKey="seo.refund.description"
                  keywordsKey="seo.refund.keywords"
                />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<SEOEnabledRoute
                  path="*"
                  element={<NotFound />}
                  titleKey="seo.404.title"
                  descriptionKey="seo.404.description"
                  keywordsKey="seo.404.keywords"
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
