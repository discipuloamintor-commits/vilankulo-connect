import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  const { t } = useLanguage();
  const phone = "258847589113";
  const message = encodeURIComponent(t("whatsapp_message"));

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("cta_title")}</h2>
          <p className="text-lg opacity-90 mb-8">{t("cta_subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enrollment"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:brightness-95 transition-all shadow-lg text-base"
            >
              {t("cta_enroll")}
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all text-base"
            >
              {t("cta_whatsapp")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
