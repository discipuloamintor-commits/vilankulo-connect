import { Award, Star, Activity, Heart, Music, Monitor, Trophy, Users, Globe, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const SchoolLife = () => {
    const { t } = useLanguage();

    const extraActivities = [
        { name: t("school_life_activity_sports"), icon: Trophy },
        { name: t("school_life_activity_taekwondo"), icon: Activity },
        { name: t("school_life_activity_chess"), icon: Star },
    ];

    const coActivities = [
        { name: t("school_life_activity_english"), icon: Heart },
        { name: t("school_life_activity_it"), icon: Monitor },
        { name: t("school_life_activity_music"), icon: Music },
    ];

    return (
        <div className="min-h-screen bg-background">
            <SEO title={t("nav_school_life")} canonical="/school-life" />
            <Header />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 uppercase tracking-tight">
                            {t("school_life_title")}
                        </h1>
                        <div className="h-1.5 w-24 bg-primary mx-auto mb-8"></div>
                    </motion.div>

                    {/* Purpose Block */}
                    <section className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
                                {t("school_life_purpose_title")}
                            </h2>
                            <p className="text-xl md:text-3xl leading-relaxed relative z-10 italic font-medium max-w-5xl mx-auto">
                                "{t("school_life_purpose_text")}"
                            </p>
                        </motion.div>
                    </section>

                    {/* Teaching Quality */}
                    <section className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-primary font-bold text-sm mb-6 border border-border">
                                    <Award size={18} />
                                    {t("school_life_staff_badge")}
                                </div>
                                <h2 className="text-4xl font-bold text-foreground mb-8">
                                    {t("school_life_staff_title")}
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    {t("school_life_staff_desc")}
                                </p>
                                <div className="bg-card p-6 rounded-2xl border-l-4 border-l-primary border-border shadow-sm italic text-lg secondary-font">
                                    "{t("school_life_staff_quote")}"
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-muted rounded-2xl h-64 shadow-inner overflow-hidden flex items-center justify-center border border-border">
                                    <Star size={64} className="text-primary/20" />
                                </div>
                                <div className="bg-primary rounded-2xl h-64 shadow-lg translate-y-8 flex items-center justify-center">
                                    <Users size={64} className="text-white/20" />
                                </div>
                                <div className="bg-foreground rounded-2xl h-64 shadow-2xl flex items-center justify-center">
                                    <GraduationCap size={64} className="text-white/10" />
                                </div>
                                <div className="bg-muted rounded-2xl h-64 shadow-inner overflow-hidden translate-y-8 flex items-center justify-center border border-border">
                                    <Globe size={64} className="text-primary/20" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Activities */}
                    <section className="grid md:grid-cols-2 gap-12">
                        {/* Extra-curricular */}
                        <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Activity className="text-primary" />
                                {t("school_life_activities_extra")}
                            </h3>
                            <div className="space-y-6">
                                {extraActivities.map((act, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted rounded-2xl transition-all group">
                                        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                                            <act.icon size={24} />
                                        </div>
                                        <span className="text-xl font-bold text-foreground">{act.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Co-curricular */}
                        <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Heart className="text-primary" />
                                {t("school_life_activities_co")}
                            </h3>
                            <div className="space-y-6">
                                {coActivities.map((act, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted rounded-2xl transition-all group">
                                        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                                            <act.icon size={24} />
                                        </div>
                                        <span className="text-xl font-bold text-foreground">{act.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SchoolLife;
