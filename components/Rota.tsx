import { cliente } from "@/config/cliente";

function Mapa({ titulo, nome, busca }: { titulo: string; nome: string; busca: string }) {
  return (
    <div className="border-2 border-terciaria bg-primaria">
      <div className="bg-terciaria text-primaria px-4 py-3">
        <h3 className="font-titulo uppercase tracking-widest">{titulo}</h3>
      </div>
      <div className="p-4">
        <p className="font-semibold">{nome}</p>
        <iframe
          title={`Mapa: ${titulo}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(busca)}&output=embed`}
          className="mt-3 w-full h-64 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm font-semibold uppercase tracking-wider underline underline-offset-4"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}

export default function Rota() {
  return (
    <section id="rota" className="bg-secundaria">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <h2 className="font-titulo uppercase text-4xl sm:text-5xl border-l-8 border-terciaria pl-4">
          Saída e destino
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Mapa titulo="Saída" nome={cliente.saida.nome} busca={cliente.saida.busca} />
          <Mapa titulo="Destino" nome={cliente.destino.nome} busca={cliente.destino.busca} />
        </div>
      </div>
    </section>
  );
}
