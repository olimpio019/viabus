export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "ViaBrasil",
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || "Passagens aéreas nacionais",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export const BRAZILIAN_CITIES = [
  "São Paulo",
  "Rio de Janeiro",
  "Brasília",
  "Belo Horizonte",
  "Salvador",
  "Recife",
  "Fortaleza",
  "Porto Alegre",
  "Curitiba",
  "Florianópolis",
  "Manaus",
  "Belém",
  "Goiânia",
  "Natal",
  "Campinas",
  "Vitória",
  "Maceió",
  "João Pessoa",
  "Cuiabá",
  "Porto Velho",
] as const;

export function getPaymentUrl(params?: {
  origem?: string;
  destino?: string;
  data?: string;
  passageiros?: string;
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_PAYMENT_URL ||
    "https://seu-link-de-pagamento.com/checkout";

  if (!params) return baseUrl;

  try {
    const url = new URL(baseUrl);
    if (params.origem) url.searchParams.set("origem", params.origem);
    if (params.destino) url.searchParams.set("destino", params.destino);
    if (params.data) url.searchParams.set("data", params.data);
    if (params.passageiros) url.searchParams.set("passageiros", params.passageiros);
    return url.toString();
  } catch {
    return baseUrl;
  }
}

export function getWhatsAppUrl(message?: string) {
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  if (!phone) return "";

  const text = encodeURIComponent(
    message || "Olá! Gostaria de informações sobre passagens aéreas nacionais."
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export const POPULAR_ROUTES = [
  { origem: "São Paulo", destino: "Rio de Janeiro", preco: "R$ 299,90", duracao: "1h" },
  { origem: "São Paulo", destino: "Brasília", preco: "R$ 349,90", duracao: "1h40" },
  { origem: "Rio de Janeiro", destino: "Salvador", preco: "R$ 399,90", duracao: "1h50" },
  { origem: "Brasília", destino: "Manaus", preco: "R$ 599,90", duracao: "3h30" },
  { origem: "Curitiba", destino: "Florianópolis", preco: "R$ 279,90", duracao: "1h" },
  { origem: "Belo Horizonte", destino: "Recife", preco: "R$ 449,90", duracao: "2h30" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Vocês vendem passagens internacionais?",
    answer:
      "Não. Trabalhamos exclusivamente com voos domésticos dentro do Brasil, conectando as principais cidades do país.",
  },
  {
    question: "Como faço para reservar minha passagem aérea?",
    answer:
      "Informe a cidade de origem, destino, data do voo e número de passageiros. Clique em \"Reservar passagem\" e você será redirecionado para o pagamento.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "O pagamento é feito na plataforma integrada ao botão de reserva (PIX, cartão ou boleto, conforme seu link de checkout).",
  },
  {
    question: "Posso cancelar ou remarcar o voo?",
    answer:
      "As regras dependem da companhia aérea e da tarifa escolhida. Entre em contato pelo WhatsApp ou e-mail para solicitar alterações.",
  },
] as const;
