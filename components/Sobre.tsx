import { cliente } from "@/config/cliente";

export default function Sobre() {
  return (
    <section id="evento" className="bg-primaria">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Sobre o evento</h2>
        <p className="mt-4 text-lg">{cliente.descricao}</p>
        {cliente.evento.explicacao.map((p, i) => (
          <p key={i} className="mt-3 text-terciaria/80">{p}</p>
        ))}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {cliente.evento.infos.map((info) => (
            <div key={info.titulo} className="bg-secundaria rounded-2xl p-5">
              <h3 className="font-bold">{info.titulo}</h3>
              <p className="mt-2 text-sm">{info.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
