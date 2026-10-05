import { cliente } from "@/config/cliente";

export default function Camisa() {
  return (
    <section id="camisa" className="bg-secundaria">
      <div className="max-w-5xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
        <div className="bg-primaria rounded-2xl p-6">
          {/* Troque por public/camisa.png (arte exportada do Canva) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cliente.camisa.imagem} alt="Camisa do evento" className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{cliente.camisa.titulo}</h2>
          <p className="mt-4">{cliente.camisa.texto}</p>
        </div>
      </div>
    </section>
  );
}
