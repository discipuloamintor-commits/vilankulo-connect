import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import schoolFront from "@/assets/gallery/school-front.jpg";
import itLabWide from "@/assets/gallery/it-lab-wide.jpg";
import scienceLab from "@/assets/gallery/science-lab.jpg";
import sportsCourt from "@/assets/gallery/sports-court.jpg";

const GalleryPreview = () => {
    const { t } = useLanguage();

    const previewImages = [
        { id: 1, url: schoolFront, title: t("about_school_title") },
        { id: 2, url: itLabWide, title: "Informática" },
        { id: 3, url: scienceLab, title: "Laboratórios" },
        { id: 4, url: sportsCourt, title: "Desporto" },
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold mb-4">{t("nav_gallery")}</h2>
                        <div className="h-1.5 w-20 bg-primary mb-6"></div>
                        <p className="text-xl text-muted-foreground">
                            {t("gallery_subtitle")}
                        </p>
                    </div>
                    <Link
                        to="/gallery"
                        className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                        {t("gallery_view_all")}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {previewImages.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-64 md:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md"
                        >
                            <img
                                src={img.url}
                                alt={`${img.title} - Colégio Enko Sekeleka Vilankulo`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 className="text-white" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
