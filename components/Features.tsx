import { siteConfig } from "@/lib/config";

const features = [
  {
    title: "Somente Brasil",
    description:
      "Voos domésticos entre as principais cidades do país, sem complicação.",
    icon: "🇧🇷",
  },
  {
    title: "Reserva rápida",
    description:
      "Informe origem, destino e data do voo em segundos e vá direto ao checkout.",
    icon: "⚡",
  },
  {
    title: "Melhor preço",
    description:
      "Compare voos populares e encontre a tarifa ideal para sua viagem nacional.",
    icon: "💰",
  },
  {
    title: "Voo tranquilo",
    description:
      "Companhias aéreas parceiras com conforto, pontualidade e bom atendimento.",
    icon: "✈️",
  },
];

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Por que voar com a {siteConfig.name}?
          </h2>
          <p className="mt-3 text-slate-600">
            Passagens aéreas nacionais com tudo o que você precisa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="card text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
