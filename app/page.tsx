import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Carrossel from "@/components/Carrossel";
import Rota from "@/components/Rota";
import Camisa from "@/components/Camisa";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Sobre />
        <Carrossel />
        <Rota />
        <Camisa />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
