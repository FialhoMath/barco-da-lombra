import { cliente } from "@/config/cliente";

export default function Sobre() {
  return (
    <section id="evento" className="bg-primaria">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <h2 className="font-titulo uppercase text-4xl sm:text-5xl border-l-8 border-terciaria pl-4">
          Sobre o evento
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4 text-lg leading-relaxed">
            <p className="font-semibold">{cliente.descricao}</p>
            {cliente.evento.explicacao.map((p, i) => (
              <p key={i} className="text-terciaria/80">{p}</p>
            ))}
          </div>

          <div className="md:col-span-2 space-y-4">
            {cliente.evento.infos.map((info) => (
              <div key={info.titulo} className="border-2 border-terciaria p-5">
                <h3 className="font-titulo uppercase tracking-wide text-xl">
                  {info.titulo}
                </h3>
                <p className="mt-2">{info.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
