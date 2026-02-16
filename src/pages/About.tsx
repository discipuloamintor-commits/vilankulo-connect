import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, History, Users, Handshake } from "lucide-react";
import schoolFront from "@/assets/gallery/school-front.jpg";
import SEO from "@/components/SEO";

const About = () => {
    const { t } = useLanguage();

    const history = [
        { year: t("about_history_2016_title"), desc: t("about_history_2016_desc") },
        { year: t("about_history_2017_title"), desc: t("about_history_2017_desc") },
        { year: t("about_history_2020_title"), desc: t("about_history_2020_desc") },
    ];

    const admin = [
        { role: t("about_admin_role_dg"), name: t("about_admin_name_dg") },
        { role: t("about_admin_role_dag"), name: t("about_admin_name_dag") },
        { role: t("about_admin_role_dp_sne"), name: t("about_admin_name_dp_sne") },
        { role: t("about_admin_role_dp_cam"), name: t("about_admin_name_dp_cam") },
        { role: t("about_admin_role_coord"), name: t("about_admin_name_coord") },
        { role: t("about_admin_role_gestor"), name: t("about_admin_name_gestor") },
    ];

    return (
        <div className="min-h-screen bg-background">
            <SEO title={t("nav_about")} canonical="/about" />
            <Header />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 uppercase tracking-tight">
                            {t("about_school_title")}
                        </h1>
                        <div className="h-1.5 w-24 bg-primary mx-auto mb-8"></div>
                    </motion.div>

                    {/* Location */}
                    <section className="mb-24">
                        <div className="bg-muted/30 rounded-[3rem] p-8 md:p-14 border border-border shadow-md overflow-hidden relative">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-primary p-3 rounded-2xl text-primary-foreground shadow-lg">
                                            <MapPin size={32} />
                                        </div>
                                        <h2 className="text-3xl font-bold">{t("about_location_title")}</h2>
                                    </div>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        {t("about_location_desc")}
                                    </p>
                                </div>
                                <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border group relative">
                                    <img
                                        src={schoolFront}
                                        alt="Fachada do Colégio enko Sekeleka em Vilankulo - Infraestrutura Moderna"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent pointer-events-none"></div>
                                    <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* History */}
                    <section className="mb-24">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-primary p-3 rounded-xl text-primary-foreground shadow-lg">
                                <History size={32} />
                            </div>
                            <h2 className="text-3xl font-bold">{t("about_history_title")}</h2>
                        </div>
                        <div className="relative border-l-2 border-primary/20 ml-6 pl-10 space-y-16 py-4">
                            {history.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[51px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md"></div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">
                                        {item.year}
                                    </h3>
                                    <p className="text-lg text-muted-foreground max-w-2xl">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Administrative Structure */}
                    <section className="mb-24">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-primary p-3 rounded-xl text-primary-foreground shadow-lg">
                                <Users size={32} />
                            </div>
                            <h2 className="text-3xl font-bold">{t("about_admin_title")}</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {admin.map((member, i) => (
                                <div key={i} className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{member.role}</p>
                                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Partnerships */}
                    <section>
                        <div className="bg-foreground text-background rounded-3xl p-10 md:p-16 border border-border shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Handshake size={200} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-primary p-3 rounded-xl text-primary-foreground shadow-lg shadow-primary/20">
                                        <Handshake size={32} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">{t("about_partners_title")}</h2>
                                </div>
                                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl font-light text-white/90">
                                    {t("about_partners_desc")}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
