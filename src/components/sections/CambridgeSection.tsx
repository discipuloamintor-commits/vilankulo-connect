import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import cambridgeImg from "@/assets/gallery/experiencia-quimica-laboratorio-foco-colegio-ekosekeleka.jpg";
import { CheckCircle2 } from "lucide-react";

const CambridgeSection = () => {
    const { t } = useLanguage();

    const benefits = [
        t("cambridge_item_critical"),
        t("cambridge_item_logic"),
        t("cambridge_item_english"),
        t("cambridge_item_exams"),
    ];

    return (
        <section id="cambridge" className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-foreground text-background rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-bold mb-6">
                                    Cambridge International School
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                    {t("cambridge_title")}
                                </h2>
                                <p className="text-background/80 text-lg mb-8 leading-relaxed">
                                    {t("cambridge_desc")}
                                </p>

                                <div className="space-y-6">
                                    <p className="font-medium text-primary">
                                        {t("cambridge_teachers_desc")}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                                                <span className="text-sm font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-auto"
                        >
                            <img
                                src={cambridgeImg}
                                alt="Alunos do Colégio enko Sekeleka em laboratório - Currículo Cambridge International"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-foreground/20 lg:to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CambridgeSection;
