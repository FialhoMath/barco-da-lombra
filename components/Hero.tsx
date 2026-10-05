import { cliente } from "@/config/cliente";

export default function Hero() {
  return (
    <header className="bg-terciaria text-primaria">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4 text-sm">
        <span className="font-bold tracking-wide">{cliente.nome}</span>
        <ul className="hidden sm:flex gap-6">
          <li><a href="#evento" className="hover:text-secundaria">O evento</a></li>
          <li><a href="#galeria" className="hover:text-secundaria">Fotos</a></li>
          <li><a href="#rota" className="hover:text-secundaria">Rota</a></li>
          <li><a href="#camisa" className="hover:text-secundaria">Camisa</a></li>
          <li><a href="#contato" className="hover:text-secundaria">Contato</a></li>
        </ul>
      </nav>
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold">{cliente.nome}</h1>
        <p className="mt-4 text-lg text-secundaria">{cliente.slogan}</p>
        <p className="mt-2 text-sm text-primaria/70">
          {cliente.evento.data} · {cliente.evento.horario}
        </p>
        <a
          href="#rota"
          className="inline-block mt-8 bg-secundaria text-terciaria font-semibold px-6 py-3 rounded-full hover:opacity-90"
        >
          Ver saída e destino
        </a>
      </div>
    </header>
  );
}
