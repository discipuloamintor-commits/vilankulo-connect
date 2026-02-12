import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phone = "258847589113";
  const message = encodeURIComponent(t("whatsapp_message"));

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
