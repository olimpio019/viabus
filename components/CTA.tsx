import { siteConfig } from "@/lib/config";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 px-8 py-12 text-center text-white shadow-xl sm:px-12">
        <h2 className="text-3xl font-bold">Pronto para viajar?</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100">
          Reserve agora e pague com segurança. Sua próxima viagem está a um clique de distância.
        </p>
        <a href="#buscar" className="btn-primary mt-8 bg-white text-brand-700 hover:bg-brand-50">
          Reservar passagem agora
        </a>
        {siteConfig.whatsapp && (
          <p className="mt-4 text-sm text-brand-100">
            Dúvidas? Fale conosco pelo WhatsApp no canto da tela.
          </p>
        )}
      </div>
    </section>
  );
}
