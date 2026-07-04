import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold text-white">{siteConfig.name}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Passagens de ônibus online com reserva rápida e pagamento seguro.
            </p>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-block text-sm text-brand-300 hover:text-white"
              >
                {siteConfig.email}
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#buscar" className="transition hover:text-white">
              Buscar passagem
            </a>
            <a href="#rotas" className="transition hover:text-white">
              Rotas populares
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
