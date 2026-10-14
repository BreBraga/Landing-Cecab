export const WHATSAPP_NUMBER = "5500000000000"; // placeholder: substituir pelo número real do CECAB

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappLink("Olá! Quero saber mais sobre o CECAB.");

export const INSTAGRAM_URL = "https://www.instagram.com/cecab.oficial/";
export const INSTAGRAM_HANDLE = "@cecab.oficial";

export const UNIDADES = ["Nova Iguaçu", "Japeri", "Mucajá", "Centro"];
