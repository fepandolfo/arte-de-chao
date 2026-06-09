import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Toaster
      position="top-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "bg-[#0D0D0D] border border-white/10 text-[#F5F0E8] font-serif px-6 py-4 flex items-center gap-3 rounded-none text-sm tracking-widest uppercase w-auto",
          error: "text-[#F5F0E8]",
          success: "text-[#F5F0E8]",
        },
      }}
    />
    <App />
  </BrowserRouter>
);