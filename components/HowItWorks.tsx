const steps = [
  {
    step: "01",
    title: "Escolha seu voo",
    description: "Informe a cidade de origem, destino, data e número de passageiros.",
  },
  {
    step: "02",
    title: "Clique em reservar",
    description: "O botão leva você direto para a página de pagamento.",
  },
  {
    step: "03",
    title: "Pague com segurança",
    description: "Conclua a compra no seu gateway de pagamento preferido.",
  },
  {
    step: "04",
    title: "Pronto para embarcar",
    description: "Receba a confirmação e prepare-se para o seu voo nacional.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Como funciona</h2>
        <p className="mt-3 text-slate-600">Quatro passos simples até a sua passagem aérea.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <div key={item.step} className="relative card">
            <span className="text-4xl font-bold text-brand-100">{item.step}</span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
