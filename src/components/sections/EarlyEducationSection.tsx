import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import earlyImg from "@/assets/school-3.jpeg";
import { Brain, ShieldCheck, Sparkles, Users } from "lucide-react";

const EarlyEducationSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Brain, title: t("early_cognitive"), desc: t("early_cognitive_desc") },
    { icon: ShieldCheck, title: t("early_safe"), desc: t("early_safe_desc") },
    { icon: Sparkles, title: t("early_method"), desc: t("early_method_desc") },
    { icon: Users, title: t("early_holistic"), desc: t("early_holistic_desc") },
  ];

  return (
    <section id="early-education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("early_title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("early_subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-5 order-2 lg:order-1">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <f.icon className="text-primary mb-3" size={28} />
                <h3 className="font-bold text-foreground mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={earlyImg}
            alt={t("early_title")}
            className="rounded-2xl shadow-xl w-full h-80 lg:h-96 object-cover order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
};

export default EarlyEducationSection;
