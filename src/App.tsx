import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import VerticalNav from "./components/VerticalNav";
import JournalArticle from "./pages/JournalArticle";

const queryClient = new QueryClient();

const ScrollManager = () => {
  const { hash, key } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Sem hash → topo da página (cobre /produto/:slug, /jornal/:slug etc.)
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = hash.replace("#", "");
    let frame: number;
    let observer: ResizeObserver | null = null;
    let timeout: number;

    const anchor = (el: HTMLElement) => {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    };

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) {
        frame = requestAnimationFrame(tryScroll);
        return;
      }

      anchor(el);

      // Re-ancora enquanto as imagens carregam e deslocam o layout
      observer = new ResizeObserver(() => anchor(el));
      observer.observe(document.body);

      // Para de re-ancorar depois que o layout estabiliza
      timeout = window.setTimeout(() => observer?.disconnect(), 1500);
    };

    frame = requestAnimationFrame(tryScroll);

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      clearTimeout(timeout);
    };
  }, [key, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="grain min-h-screen bg-ink">
      <VerticalNav />
      <ScrollManager />

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