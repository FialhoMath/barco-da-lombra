import { cliente } from "@/config/cliente";
import Logo from "./Logo";

export default function Hero() {
  return (
    <header className="bg-terciaria text-primaria border-b-8 border-secundaria">
      <div className="max-w-6xl mx-auto px-6 py-14 sm:py-24 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
        <Logo src={cliente.logo} className="h-40 sm:h-60 w-auto object-contain" />

        <div className="text-center sm:text-left">
          <h1 className="font-titulo uppercase leading-[0.95] text-5xl sm:text-7xl">
            {cliente.nome}
          </h1>
          <p className="mt-4 uppercase tracking-[0.25em] text-secundaria text-sm sm:text-base">
            {cliente.slogan}
          </p>

          <div className="mt-8 inline-flex border border-primaria/40 divide-x divide-primaria/40 font-titulo uppercase tracking-wider">
            <span className="px-5 py-2">{cliente.evento.data}</span>
            <span className="px-5 py-2">{cliente.evento.horario}</span>
          </div>

          <div className="mt-8">
            <a
              href="#rota"
              className="inline-block border-2 border-secundaria text-secundaria px-8 py-3 font-titulo uppercase tracking-widest hover:bg-secundaria hover:text-terciaria transition-colors"
            >
              Saída e destino
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
