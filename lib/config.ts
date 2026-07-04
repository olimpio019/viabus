export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "ViaBus",
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || "Passagens online",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

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
    message || "Olá! Gostaria de informações sobre passagens de ônibus."
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export const POPULAR_ROUTES = [
  { origem: "São Paulo", destino: "Rio de Janeiro", preco: "R$ 89,90", duracao: "6h" },
  { origem: "São Paulo", destino: "Belo Horizonte", preco: "R$ 119,90", duracao: "8h" },
  { origem: "Curitiba", destino: "Florianópolis", preco: "R$ 79,90", duracao: "4h30" },
  { origem: "Brasília", destino: "Goiânia", preco: "R$ 59,90", duracao: "2h30" },
  { origem: "Salvador", destino: "Recife", preco: "R$ 149,90", duracao: "12h" },
  { origem: "Porto Alegre", destino: "São Paulo", preco: "R$ 199,90", duracao: "18h" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Como faço para reservar minha passagem?",
    answer:
      "Preencha origem, destino, data e número de passageiros no formulário e clique em \"Reservar passagem\". Você será redirecionado para a página de pagamento.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "O pagamento é feito na plataforma integrada ao botão de reserva (PIX, cartão ou boleto, conforme seu link de checkout).",
  },
  {
    question: "Recebo comprovante após o pagamento?",
    answer:
      "Sim. Após a confirmação do pagamento, você recebe o comprovante pelo e-mail ou canal configurado no seu gateway.",
  },
  {
    question: "Posso cancelar ou remarcar a passagem?",
    answer:
      "As regras de cancelamento dependem da política da viação. Entre em contato pelo WhatsApp ou e-mail para solicitar alterações.",
  },
] as const;
