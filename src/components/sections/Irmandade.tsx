import { useState } from "react";
import { toast } from "sonner";

export default function Irmandade() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("E-mail inválido.");
    setDone(true);
    toast.success("Bem-vindo à Irmandade.");
  };

  return (
    <section id="irmandade" className="relative py-32 lg:py-56 px-6 lg:px-16 border-t border-ash/40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--bone)) 0%, transparent 60%)"
        }} />
      </div>

      <div className="relative max-w-3xl mx-auto text-center space-y-10">
        <p className="label-eyebrow">05 — Faça parte</p>

        <h2 className="font-serif-editorial text-6xl md:text-8xl lg:text-9xl text-bone leading-[0.9]">
          Irman<span className="italic">dade.</span>
        </h2>

        <p className="font-serif-editorial italic text-xl md:text-2xl text-bone-dim max-w-xl mx-auto leading-relaxed">
          Cartas ocasionais sobre disciplina, cultura e os bastidores das próximas
          coleções. Sem ruído. Apenas o que importa.
        </p>

        {done ? (
          <p className="font-serif-editorial italic text-bone text-2xl pt-6">
            O tatame te espera.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="flex flex-col sm:flex-row items-stretch gap-px max-w-lg mx-auto border-b border-ash pb-px"
          >
            <input
              type="email"
              required
              placeholder="seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-bone placeholder:text-bone-dim/50 px-4 py-4 outline-none font-serif-editorial text-lg text-center sm:text-left"
            />
            <button
              type="submit"
              className="label-eyebrow text-bone hover:text-bone-dim px-6 py-4 transition-colors duration-500"
            >
              Entrar →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
