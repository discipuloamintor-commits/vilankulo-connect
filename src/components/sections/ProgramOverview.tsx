import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramOverview = () => {
    const { t } = useLanguage();

    const programs = [
        {
            title: t("nav_sub_creche"),
            icon: Baby,
            color: "bg-blue-500",
            href: "/academics#creche"
        },
        {
            title: t("nav_sub_hybrid"),
            icon: Globe,
            color: "bg-emerald-500",
            href: "/academics#hybrid"
        },
        {
            title: t("nav_sub_national"),
            icon: BookOpen,
            color: "bg-amber-500",
            href: "/academics#national"
        },
        {
            title: t("nav_sub_cambridge"),
            icon: GraduationCap,
            color: "bg-primary",
            href: "/academics#cambridge"
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {t("home_prog_title")}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            {t("home_prog_desc")}
                        </p>
                    </div>
                    <Link
                        to="/academics"
                        className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all"
                    >
                        {t("home_prog_cta")} <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                to={prog.href}
                                className="group bg-card border border-border rounded-2xl p-8 block hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full"
                            >
                                <div className={`w-14 h-14 ${prog.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <prog.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                    {prog.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramOverview;
