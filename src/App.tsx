import VerticalNav from "./components/VerticalNav";
import Hero from "./components/sections/Hero";
import Manifesto from "./components/sections/Manifesto";
import DoChao from "./components/sections/DoChao";
import EmBreve from "./components/sections/EmBreve";
import Jornal from "./components/sections/Jornal";
import Irmandade from "./components/sections/Irmandade";
import Footer from "./components/sections/Footer";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <VerticalNav />

      <main className="lg:pl-24">
        <Hero />
        <Manifesto />
        <DoChao />
        <EmBreve />
        <Jornal />
        <Irmandade />
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;