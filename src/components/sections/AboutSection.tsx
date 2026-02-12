import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutImg from "@/assets/school-2.jpeg";
import { BookOpen, Heart, Star, Shield } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: BookOpen, title: t("about_history_title"), text: t("about_history") },
    { icon: Star, title: t("about_mission_title"), text: t("about_mission") },
    { icon: Heart, title: t("about_values_title"), text: t("about_values") },
    { icon: Shield, title: t("about_commitment_title"), text: t("about_commitment") },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("about_title")}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={aboutImg}
            alt={t("about_title")}
            className="rounded-2xl shadow-xl w-full h-80 lg:h-96 object-cover"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <item.icon className="text-primary mb-3" size={28} />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
