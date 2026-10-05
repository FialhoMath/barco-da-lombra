import { cliente } from "@/config/cliente";

function Mapa({ titulo, nome, busca }: { titulo: string; nome: string; busca: string }) {
  return (
    <div className="bg-secundaria rounded-2xl p-4">
      <h3 className="font-bold">{titulo}</h3>
      <p className="text-sm mb-3">{nome}</p>
      <iframe
        title={`Mapa: ${titulo}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(busca)}&output=embed`}
        className="w-full h-64 rounded-xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-sm font-semibold underline"
      >
        Abrir no Google Maps
      </a>
    </div>
  );
}

export default function Rota() {
  return (
    <section id="rota" className="bg-primaria">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Saída e destino</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Mapa titulo="Local de saída" nome={cliente.saida.nome} busca={cliente.saida.busca} />
          <Mapa titulo="Destino" nome={cliente.destino.nome} busca={cliente.destino.busca} />
        </div>
      </div>
    </section>
  );
}
