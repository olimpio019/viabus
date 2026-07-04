const features = [
  {
    title: "Pagamento seguro",
    description:
      "Finalize sua compra pelo link de pagamento integrado, com total segurança.",
    icon: "🔒",
  },
  {
    title: "Reserva rápida",
    description:
      "Preencha origem, destino e data em segundos e vá direto para o checkout.",
    icon: "⚡",
  },
  {
    title: "Melhor preço",
    description:
      "Compare rotas populares e encontre a opção ideal para o seu bolso.",
    icon: "💰",
  },
  {
    title: "Viagem tranquila",
    description:
      "Empresas parceiras com conforto, pontualidade e atendimento de qualidade.",
    icon: "🚌",
  },
];

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Por que viajar com a ViaBus?</h2>
          <p className="mt-3 text-slate-600">
            Tudo o que você precisa para uma viagem sem complicação.
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
