import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import schoolImg from "@/assets/gallery/estudo-tecnologia-informatica-alunas-colegio-ekosekeleka.jpg";
import { BookOpen, Globe, GraduationCap, Layout } from "lucide-react";

const EducationSystemSection = () => {
    const { t } = useLanguage();

    const features = [
        { icon: Globe, text: t("grade_item_national") },
        { icon: GraduationCap, text: t("grade_item_cambridge") },
        { icon: BookOpen, text: t("grade_item_teachers") },
        { icon: Layout, text: t("grade_item_methods") },
    ];

    return (
        <section id="education-system" className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                            {t("grade_title")}
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            {t("grade_subtitle")}
                        </p>

                        <ul className="space-y-4 mb-8">
                            {features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-foreground font-medium"
                                >
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <item.icon className="text-primary" size={20} />
                                    </div>
                                    {item.text}
                                </motion.li>
                            ))}
                        </ul>

                        <p className="font-semibold text-primary italic">
                            {t("grade_footer")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <img
                            src={schoolImg}
                            alt={t("grade_title")}
                            className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl hidden sm:block border border-border">
                            <div className="text-3xl font-bold text-primary mb-1">1ª - 12ª</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Classes</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EducationSystemSection;
