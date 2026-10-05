import { cliente } from "@/config/cliente";

export default function Contato() {
  return (
    <section id="contato" className="bg-terciaria text-primaria border-t-8 border-secundaria">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 text-center">
        <h2 className="font-titulo uppercase text-4xl sm:text-5xl">Ficou com dúvida?</h2>
        <p className="mt-3 text-primaria/80">Chama a gente no Instagram.</p>
        <a
          href={cliente.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 border-2 border-secundaria text-secundaria px-8 py-3 font-titulo uppercase tracking-widest hover:bg-secundaria hover:text-terciaria transition-colors"
        >
          {cliente.instagram.usuario}
        </a>
      </div>
    </section>
  );
}
