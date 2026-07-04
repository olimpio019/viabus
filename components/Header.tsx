import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-900/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-brand-700">
            {siteConfig.name.charAt(0)}
          </span>
          <div>
            <p className="text-lg font-bold text-white">{siteConfig.name}</p>
            <p className="text-xs text-brand-200">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-100 md:flex">
          <a href="#buscar" className="transition hover:text-white">
            Buscar
          </a>
          <a href="#rotas" className="transition hover:text-white">
            Rotas populares
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>

        <a href="#buscar" className="btn-primary hidden text-sm sm:inline-flex">
          Reservar passagem
        </a>
      </div>
    </header>
  );
}
