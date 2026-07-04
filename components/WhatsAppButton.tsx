"use client";

import { getWhatsAppUrl, siteConfig } from "@/lib/config";

export function WhatsAppButton() {
  const url = getWhatsAppUrl();
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg shadow-green-500/30 transition hover:scale-105 hover:bg-green-600"
      aria-label="Falar no WhatsApp"
      title={`Falar com ${siteConfig.name}`}
    >
      💬
    </a>
  );
}
