import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, Baby, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Academics = () => {
    const { t } = useLanguage();

    const programs = [
        {
            id: "creche",
            title: t("academics_creche_title"),
            info: t("academics_creche_info"),
            desc: t("academics_creche_desc"),
            icon: Baby,
            color: "bg-blue-500",
            content: [
                t("prog_creche_f1"),
                t("prog_creche_f2"),
                t("prog_creche_f3"),
                t("prog_creche_f4")
            ]
        },
        {
            id: "hybrid",
            title: t("academics_hybrid_title"),
            desc: t("academics_hybrid_desc"),
            icon: Globe,
            color: "bg-emerald-500",
            content: [
                t("prog_hybrid_f1"),
                t("prog_hybrid_f2"),
                t("prog_hybrid_f3"),
                t("prog_hybrid_f4")
            ]
        },
        {
            id: "national",
            title: t("academics_national_title"),
            desc: t("academics_national_desc"),
            icon: BookOpen,
            color: "bg-amber-500",
            content: [
                t("prog_national_f1"),
                t("prog_national_f2"),
                t("prog_national_f3"),
                t("prog_national_f4")
            ]
        },
        {
            id: "cambridge",
            title: t("academics_cambridge_title"),
            desc: t("academics_cambridge_desc"),
            icon: GraduationCap,
            color: "bg-primary",
            content: [
                t("prog_cambridge_f1"),
                t("prog_cambridge_f2"),
                t("prog_cambridge_f3"),
                t("prog_cambridge_f4")
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <SEO title={t("nav_academics")} canonical="/academics" />
            <Header />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 uppercase tracking-tight">
                            {t("academics_title")}
                        </h1>
                        <div className="h-1.5 w-24 bg-primary mx-auto mb-8"></div>
                    </motion.div>

                    {/* Programs Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        {programs.map((program, i) => (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-sm flex flex-col hover:shadow-xl transition-all duration-500"
                            >
                                <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                                    <program.icon size={32} />
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold mb-3">{program.title}</h2>
                                {program.info && <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{program.info}</p>}

                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    {program.desc}
                                </p>

                                <div className="space-y-4 mb-10 flex-1">
                                    {program.content.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                                            <span className="text-foreground font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/enrollment"
                                    className="w-full py-4 bg-muted text-foreground font-bold rounded-xl text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                >
                                    {t("hero_cta_enroll")}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cambridge Focus Block (Callout) */}
                    <section className="bg-foreground text-background rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 opacity-10">
                            <GraduationCap size={400} />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                    {t("academics_cambridge_focus_title")}
                                </h2>
                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    {t("academics_cambridge_focus_desc")}
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shrink-0 border border-primary-foreground/20">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 italic">{t("academics_thinking_process_title")}</h4>
                                            <p className="text-sm opacity-70">{t("academics_thinking_process_desc")}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shrink-0 border border-primary-foreground/20">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 italic">{t("academics_active_learning_title")}</h4>
                                            <p className="text-sm opacity-70">{t("academics_active_learning_desc")}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Academics;
