"use client";

import { FormEvent, useState } from "react";
import { BRAZILIAN_CITIES, getPaymentUrl } from "@/lib/config";

export function SearchForm() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [passageiros, setPassageiros] = useState("1");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!origem.trim() || !destino.trim() || !data) {
      setError("Preencha origem, destino e data do voo.");
      return;
    }

    if (origem.trim().toLowerCase() === destino.trim().toLowerCase()) {
      setError("Origem e destino devem ser cidades diferentes.");
      return;
    }

    const paymentUrl = getPaymentUrl({
      origem: origem.trim(),
      destino: destino.trim(),
      data,
      passageiros,
    });

    window.location.href = paymentUrl;
  }

  function swapCities() {
    setOrigem(destino);
    setDestino(origem);
  }

  return (
    <section id="buscar" className="relative -mt-12 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <form onSubmit={handleSubmit} className="card shadow-xl shadow-slate-200/60">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">Buscar voo nacional</h2>
            <p className="mt-1 text-sm text-slate-500">
              Voos domésticos entre cidades do Brasil. Preencha e clique em reservar.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="origem" className="mb-2 block text-sm font-medium text-slate-700">
                Cidade de origem
              </label>
              <input
                id="origem"
                type="text"
                list="cidades-brasil"
                className="input-field"
                placeholder="Ex: São Paulo"
                value={origem}
                onChange={(e) => setOrigem(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="destino" className="mb-2 block text-sm font-medium text-slate-700">
                Cidade de destino
              </label>
              <input
                id="destino"
                type="text"
                list="cidades-brasil"
                className="input-field"
                placeholder="Ex: Rio de Janeiro"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={swapCities}
                className="absolute right-3 top-[38px] rounded-lg bg-slate-100 p-2 text-slate-600 transition hover:bg-brand-50 hover:text-brand-600"
                aria-label="Inverter origem e destino"
              >
                ⇄
              </button>
            </div>

            <div>
              <label htmlFor="data" className="mb-2 block text-sm font-medium text-slate-700">
                Data do voo
              </label>
              <input
                id="data"
                type="date"
                className="input-field"
                min={today}
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="passageiros" className="mb-2 block text-sm font-medium text-slate-700">
                Passageiros
              </label>
              <select
                id="passageiros"
                className="input-field"
                value={passageiros}
                onChange={(e) => setPassageiros(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={String(n)}>
                    {n} {n === 1 ? "passageiro" : "passageiros"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <datalist id="cidades-brasil">
            {BRAZILIAN_CITIES.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {error && (
                <p className="mb-2 text-sm font-medium text-red-600" role="alert">
                  {error}
                </p>
              )}
              <p className="text-sm text-slate-500">
                Ao reservar, você será redirecionado para a página de pagamento.
              </p>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Reservar passagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
