
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FestivalProvider from "./contexts/FestivalContext";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import FestivalPage from "./pages/FestivalPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CustomizeKitPage from "./pages/CustomizeKitPage";
import AdminFestivalPage from "./pages/AdminFestivalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FestivalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/festivals" element={<FestivalPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/customize-kit" element={<CustomizeKitPage />} />
            <Route path="/admin/festivals" element={<AdminFestivalPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FestivalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
