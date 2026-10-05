import { cliente } from "@/config/cliente";

export default function Camisa() {
  return (
    <section id="camisa" className="bg-primaria">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div className="border-2 border-terciaria bg-secundaria p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cliente.camisa.imagem} alt="Camisa do evento" className="w-full h-auto" />
        </div>
        <div>
          <h2 className="font-titulo uppercase text-4xl sm:text-5xl border-l-8 border-terciaria pl-4">
            {cliente.camisa.titulo}
          </h2>
          <p className="mt-6 text-lg">{cliente.camisa.texto}</p>
        </div>
      </div>
    </section>
  );
}
