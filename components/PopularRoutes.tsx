"use client";

import { POPULAR_ROUTES, getPaymentUrl } from "@/lib/config";

export function PopularRoutes() {
  function handleReserve(origem: string, destino: string) {
    const paymentUrl = getPaymentUrl({ origem, destino });
    window.location.href = paymentUrl;
  }

  return (
    <section id="rotas" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Voos populares no Brasil</h2>
        <p className="mt-3 text-slate-600">
          As rotas aéreas nacionais mais buscadas pelos nossos passageiros.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {POPULAR_ROUTES.map((route) => (
          <article key={`${route.origem}-${route.destino}`} className="card group transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-brand-600">{route.origem}</p>
                <p className="mt-1 text-lg font-bold text-slate-900">✈ {route.destino}</p>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {route.duracao}
              </span>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-xs text-slate-500">A partir de</p>
                <p className="text-2xl font-bold text-slate-900">{route.preco}</p>
              </div>
              <button
                type="button"
                onClick={() => handleReserve(route.origem, route.destino)}
                className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand-600"
              >
                Reservar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
