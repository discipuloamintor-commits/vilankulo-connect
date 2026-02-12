import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import adultImg from "@/assets/school-4.jpeg";
import { GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";

const AdultEducationSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: GraduationCap, title: t("adult_continuing"), desc: t("adult_continuing_desc") },
    { icon: HeartHandshake, title: t("adult_inclusion"), desc: t("adult_inclusion_desc") },
    { icon: TrendingUp, title: t("adult_growth"), desc: t("adult_growth_desc") },
  ];

  return (
    <section id="adult-education" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("adult_title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("adult_subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={adultImg}
            alt={t("adult_title")}
            className="rounded-2xl shadow-xl w-full h-80 lg:h-96 object-cover"
          />
          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-4 items-start bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <f.icon className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdultEducationSection;
