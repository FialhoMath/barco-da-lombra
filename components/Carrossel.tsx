"use client";
import { useEffect, useState } from "react";
import { cliente } from "@/config/cliente";

export default function Carrossel() {
  const fotos = cliente.carrossel;
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const ir = (i: number) => setAtual((i + fotos.length) % fotos.length);

  // Troca sozinho a cada 4 segundos (pausa com o mouse em cima)
  useEffect(() => {
    if (pausado || fotos.length < 2) return;
    const t = setTimeout(() => setAtual((a) => (a + 1) % fotos.length), 4000);
    return () => clearTimeout(t);
  }, [atual, pausado, fotos.length]);

  if (fotos.length === 0) return null;

  return (
    <section id="galeria" className="bg-terciaria text-primaria">
      <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-20">
        <h2 className="font-titulo uppercase text-4xl sm:text-5xl border-l-8 border-secundaria pl-4">
          Fotos
        </h2>
      </div>

      <div
        className="relative mt-10 aspect-video max-h-[80vh] w-full overflow-hidden bg-black"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
      >
        {fotos.map((f, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={f.src}
            src={f.src}
            alt={f.legenda ?? `Foto ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === atual ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {fotos.length > 1 && (
          <>
            <button
              onClick={() => ir(atual - 1)}
              aria-label="Foto anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-14 w-12 bg-terciaria/70 text-primaria text-3xl hover:bg-secundaria hover:text-terciaria transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => ir(atual + 1)}
              aria-label="Próxima foto"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-12 bg-terciaria/70 text-primaria text-3xl hover:bg-secundaria hover:text-terciaria transition-colors"
            >
              ›
            </button>
          </>
        )}

        {fotos[atual].legenda && (
          <p className="absolute bottom-0 left-0 right-0 bg-terciaria/70 px-6 py-3 text-sm">
            {fotos[atual].legenda}
          </p>
        )}
      </div>

      {fotos.length > 1 && (
        <div className="flex justify-center gap-2 py-6">
          {fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => ir(i)}
              aria-label={`Ir para foto ${i + 1}`}
              className={`h-2 transition-all ${
                i === atual ? "w-10 bg-secundaria" : "w-4 bg-primaria/30"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
