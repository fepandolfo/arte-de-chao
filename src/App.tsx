import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import VerticalNav from "./components/VerticalNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="grain min-h-screen bg-ink">
      <VerticalNav />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produto/:slug" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  </QueryClientProvider>
);

export default App;