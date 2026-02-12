import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/school-1.jpeg";

const HeroSection = () => {
  const { t } = useLanguage();
  const phone = "258847589113";
  const message = encodeURIComponent(t("whatsapp_message"));

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Colégio Enko Sekeleka - Escola em Vilankulo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-background"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {t("hero_title")}
          </h1>
          <p className="text-lg sm:text-xl opacity-90 mb-8 leading-relaxed max-w-lg">
            {t("hero_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/enrollment"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg text-base"
            >
              {t("hero_cta_enroll")}
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-background/10 backdrop-blur-sm text-background border-2 border-background/30 font-semibold rounded-lg hover:bg-background/20 transition-all text-base"
            >
              {t("hero_cta_whatsapp")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
