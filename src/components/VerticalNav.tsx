import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const sections = [
  { id: "manifesto", label: "Manifesto" },
  { id: "do-chao", label: "Do Chão" },
  { id: "em-breve", label: "Em Breve" },
  { id: "jornal", label: "Jornal" },
  { id: "irmandade", label: "Irmandade" },
];

export default function VerticalNav() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const onHome = pathname === "/";

  return (
    <>
      {/* Desktop fixed left nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-24 xl:w-28 z-40 flex-col items-center justify-between py-10 border-r border-ash/40 bg-ink/80 backdrop-blur-sm">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif-editorial text-bone text-2xl leading-none tracking-tight"
        >
          AdC
        </Link>

        <ul className="flex flex-col items-center gap-8">
          {sections.map((s) => (
            <li key={s.id}>
              {onHome ? (
                <a
                  href={`#${s.id}`}
                  className="label-eyebrow editorial-link hover:text-bone"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {s.label}
                </a>
              ) : (
                <Link
                  to={`/#${s.id}`}
                  className="label-eyebrow editorial-link hover:text-bone"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {s.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <span
          className="label-eyebrow text-bone-dim"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          MMXXVI
        </span>
      </nav>

      {/* Mobile top bar */}
      <nav className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-5 py-4 bg-ink/85 backdrop-blur-sm border-b border-ash/40">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif-editorial text-bone text-xl"
        >
          Arte de Chão
        </Link>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          className="label-eyebrow text-bone"
        >
          {mobileOpen ? "FECHAR" : "MENU"}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-ink animate-fade pt-20 px-8">
          <ul className="flex flex-col gap-7">
            {sections.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif-editorial text-4xl text-bone"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
