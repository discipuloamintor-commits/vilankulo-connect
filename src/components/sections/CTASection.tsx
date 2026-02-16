import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  const { t } = useLanguage();
  const phone = "258877589113";
  const message = encodeURIComponent(t("whatsapp_message"));

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            {t("cta_title")}
          </h2>
          <p className="text-xl opacity-90 mb-10 font-medium">
            {t("cta_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/enrollment"
              className="inline-flex items-center justify-center px-10 py-5 bg-background text-foreground font-bold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg"
            >
              {t("cta_enroll")}
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary-foreground/40 text-primary-foreground font-bold rounded-2xl hover:bg-primary-foreground/10 hover:-translate-y-1 transition-all text-lg backdrop-blur-sm"
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
