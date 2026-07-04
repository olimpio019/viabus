import { FAQ_ITEMS } from "@/lib/config";

export function FAQ() {
  return (
    <section id="faq" className="bg-slate-100 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Perguntas frequentes</h2>
          <p className="mt-3 text-slate-600">Tire suas dúvidas antes de reservar.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-brand-600 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
