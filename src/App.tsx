import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import VerticalNav from "./components/VerticalNav";
import JournalArticle from "./pages/JournalArticle";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="grain min-h-screen bg-ink">
      <VerticalNav />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produto/:slug" element={<ProductDetail />} />
        <Route path="/jornal/:slug" element={<JournalArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  </QueryClientProvider>
);

export default App;