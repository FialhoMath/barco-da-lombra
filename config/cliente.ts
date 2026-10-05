// ÚNICO arquivo que muda de cliente para cliente.
// Itens marcados com "EDITAR" são placeholders até o cliente passar os dados reais.

export const cliente = {
  nome: "Barco da Lombra II",
  slogan: "Você tem DUAS opções",
  descricao:
    "O Barco da Lombra ano II promete tudo que teve no primeiro só que mais organizado.",

  instagram: {
    usuario: "@barcodalombra",
    url: "https://www.instagram.com/barcodalombra",
  },

  evento: {
    data: "24/10/2026",
    horario: "11:00",
    explicacao: [
      "Saíremos de 11:00 do Recife antigo, atravessaremos de barco até a bilola de Brennand e seguiremos a corrida parando em 10 bares até o Le Parc.",
      "É obrigatório o uso de tênis de corrida e o uniforme oficial do barco da lombra.",
    ],
    infos: [
      { titulo: "O que está incluso", texto: "Boas amizades, cerveja no caminho e mais cerveja no final." },
    ],
  },

  // Para o mapa, use o nome/endereço como o Google Maps entende.
  saida: {
    nome: "Praça Rio Branco - Recife",
    busca: "Recife, PE, 50030-230",
  },
  destino: {
    nome: "Le Parc Boa Viagem",
    busca: "R. Le Parc, 100 - Imbiribeira, Recife - PE, 51160-035",
  },

  // Coloque o arquivo exportado do Canva em public/camisa.png
  camisa: {
    imagem: "/camisa.png",
    titulo: "A camisa oficial",
    texto: "Uniforme oficial do barco incluido no pacote",
  },

  // Coloque as fotos em public/carrossel/ e liste aqui.
  carrossel: [
    { src: "/carrossel/1.png"},
    { src: "/carrossel/2.png"},
    { src: "/carrossel/3.png"},
  ],
};

export type Cliente = typeof cliente;
