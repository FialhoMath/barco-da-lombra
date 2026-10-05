import type { Metadata } from "next";
import "./globals.css";
import { cliente } from "@/config/cliente";

export const metadata: Metadata = {
  title: `${cliente.nome} | Informações do evento`,
  description: cliente.descricao,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
