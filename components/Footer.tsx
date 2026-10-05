import { cliente } from "@/config/cliente";

export default function Footer() {
  return (
    <footer className="bg-terciaria text-primaria/60 text-center text-xs py-6 border-t border-primaria/10">
      © {new Date().getFullYear()} {cliente.nome}
    </footer>
  );
}
