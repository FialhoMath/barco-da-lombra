import { cliente } from "@/config/cliente";

export default function Contato() {
  return (
    <section id="contato" className="bg-terciaria text-primaria">
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Ficou com dúvida?</h2>
        <p className="mt-3 text-primaria/80">Chama a gente no Instagram.</p>
        <a
          href={cliente.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-secundaria text-terciaria font-semibold px-6 py-3 rounded-full hover:opacity-90"
        >
          {cliente.instagram.usuario}
        </a>
      </div>
    </section>
  );
}
