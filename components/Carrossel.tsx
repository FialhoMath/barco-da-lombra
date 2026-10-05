"use client";
import { useEffect, useState } from "react";
import { cliente } from "@/config/cliente";

export default function Carrossel() {
  const fotos = cliente.carrossel;
  const [atual, setAtual] = useState(0);

  const proxima = () => setAtual((a) => (a + 1) % fotos.length);
  const anterior = () => setAtual((a) => (a - 1 + fotos.length) % fotos.length);

  useEffect(() => {
    const t = setInterval(proxima, 5000);
    return () => clearInterval(t);
  }, [fotos.length]);

  return (
    <section id="galeria" className="bg-secundaria">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Fotos</h2>
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-terciaria aspect-video">
          {fotos.map((f, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={f.src}
              src={f.src}
              alt={f.legenda}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === atual ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <button
            onClick={anterior}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-primaria/80 text-terciaria rounded-full w-10 h-10 font-bold"
          >
            ‹
          </button>
          <button
            onClick={proxima}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-primaria/80 text-terciaria rounded-full w-10 h-10 font-bold"
          >
            ›
          </button>
        </div>
        <p className="mt-3 text-sm">{fotos[atual].legenda}</p>
        <div className="mt-3 flex gap-2">
          {fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setAtual(i)}
              aria-label={`Ir para foto ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === atual ? "w-8 bg-terciaria" : "w-2 bg-terciaria/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
