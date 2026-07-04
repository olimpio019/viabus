export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-brand-900 to-brand-700 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 ring-1 ring-white/20">
            ✈ Somente voos domésticos no Brasil
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Sua passagem aérea nacional em poucos cliques
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-100 sm:text-xl">
            Encontre voos entre cidades brasileiras, escolha a melhor data e finalize
            sua reserva com pagamento rápido e seguro.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: "50+", label: "Cidades brasileiras" },
            { value: "24h", label: "Atendimento" },
            { value: "100%", label: "Pagamento seguro" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm"
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-brand-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
