import { WHATSAPP } from "./constants";

export function buildWhatsAppUrl(prefill?: string): string {
  const text = prefill?.trim() || WHATSAPP.defaultMessage;
  return `${WHATSAPP.base}?text=${encodeURIComponent(text)}`;
}

export function buildServiceWhatsAppText(serviceTitle: string): string {
  return `Hi, I'd like to ask about ${serviceTitle}.`;
}

export function buildAreaWhatsAppText(areaName: string): string {
  return `Hi, I'm in ${areaName}. Could you tell me what services you cover here?`;
}
