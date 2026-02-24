import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import ProgramOverview from "@/components/sections/ProgramOverview";
import CambridgeSection from "@/components/sections/CambridgeSection";
import CTASection from "@/components/sections/CTASection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import SEO from "@/components/SEO";
import { GraduationCap, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <HeroSection />

        {/* Institutional Introduction (Quick Summary) */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold text-sm rounded-full mb-6">
                  {t("home_intro_badge")}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  {t("home_intro_title")}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {t("home_intro_desc")}
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity">
                  {t("home_intro_cta")}
                </Link>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                  <GraduationCap size={40} className="text-primary mb-4" />
                  <div className="text-xl md:text-2xl font-bold whitespace-nowrap">ACIMA DE 90%</div>
                  <div className="text-sm text-muted-foreground font-semibold uppercase">{t("home_stat_approval_label")}</div>
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-primary/20">
                  <Award size={40} className="mb-4" />
                  <div className="text-3xl font-bold">{t("home_stat_curriculum_val")}</div>
                  <div className="text-sm opacity-80 font-semibold uppercase">{t("home_stat_curriculum_label")}</div>
                </div>
                <div className="col-span-2 bg-foreground text-background rounded-2xl p-8 flex items-center gap-6">
                  <div className="bg-primary p-3 rounded-xl"><Users size={32} /></div>
                  <div>
                    <div className="text-2xl font-bold">{t("home_stat_env_title")}</div>
                    <div className="text-sm opacity-70">{t("home_stat_env_desc")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProgramOverview />
        <CambridgeSection />
        <GalleryPreview />

        {/* Teachers Highlight (New on Home) */}
        <section className="py-12 md:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8">{t("school_life_staff_title")}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                {t("school_life_staff_desc")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-muted rounded-full font-bold text-foreground italic border border-border">{t("home_teachers_asia")}</span>
                <span className="px-6 py-3 bg-muted rounded-full font-bold text-foreground italic border border-border">{t("home_teachers_europe")}</span>
                <span className="px-6 py-3 bg-muted rounded-full font-bold text-foreground italic border border-border">{t("home_teachers_cambridge")}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
