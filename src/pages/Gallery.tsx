import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import SEO from "@/components/SEO";

import itClass from "@/assets/gallery/it-class.jpg";
import schoolFront from "@/assets/gallery/school-front.jpg";
import scienceLab from "@/assets/gallery/science-lab.jpg";
import studentExperiment from "@/assets/gallery/student-experiment.jpg";
import artClass1 from "@/assets/gallery/art-class-1.jpg";
import sportsGroup from "@/assets/gallery/sports-group.jpg";
import artClass2 from "@/assets/gallery/art-class-2.jpg";
import schoolGroupOutside from "@/assets/gallery/school-group-outside.jpg";
import schoolParking from "@/assets/gallery/school-parking.jpg";
import sportsCourt from "@/assets/gallery/sports-court.jpg";
import itLabWide from "@/assets/gallery/it-lab-wide.jpg";
import schoolCorridor from "@/assets/gallery/school-corridor.jpg";
import library1 from "@/assets/gallery/library-1.jpg";
import scienceLabEmpty from "@/assets/gallery/science-lab-empty.jpg";
import scienceDetails from "@/assets/gallery/science-details.jpg";
import library2 from "@/assets/gallery/library-2.jpg";
import schoolAssembly from "@/assets/gallery/school-assembly.jpg";
import scienceDisplay from "@/assets/gallery/science-display.jpg";
import studentsStudying1 from "@/assets/gallery/students-studying-1.jpg";
import studentsStudying2 from "@/assets/gallery/students-studying-2.jpg";
import musicPerformance from "@/assets/gallery/music-performance.jpg";
import schoolEventTents from "@/assets/gallery/school-event-tents.jpg";
import classroomReading from "@/assets/gallery/classroom-reading.jpg";
import chemistryExperiment from "@/assets/gallery/chemistry-experiment.jpg";
import sciencePractice from "@/assets/gallery/science-practice.jpg";
import sportsTraining from "@/assets/gallery/sports-training.jpg";

type Category = "all" | "science" | "primary" | "secondary" | "sports" | "school_life";

interface ImageItem {
    id: number;
    url: string;
    category: Category;
    title: string;
}

const Gallery = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<Category>("all");
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

    const categories: { id: Category; label: string }[] = [
        { id: "all", label: t("gallery_filter_all") },
        { id: "science", label: t("gallery_filter_science") },
        { id: "primary", label: t("gallery_filter_primary") },
        { id: "secondary", label: t("gallery_filter_secondary") },
        { id: "sports", label: t("gallery_filter_sports") },
        { id: "school_life", label: t("gallery_filter_school_life") },
    ];

    const images: ImageItem[] = [
        { id: 1, url: schoolFront, category: "school_life", title: t("about_school_title") },
        { id: 2, url: itClass, category: "school_life", title: t("school_life_activity_it") },
        { id: 3, url: scienceLab, category: "science", title: t("prog_national_f3") },
        { id: 4, url: studentExperiment, category: "science", title: t("academics_active_learning_title") },
        { id: 5, url: artClass1, category: "school_life", title: t("school_life_activity_music") },
        { id: 6, url: sportsGroup, category: "sports", title: t("school_life_activity_sports") },
        { id: 7, url: artClass2, category: "school_life", title: t("school_life_activity_music") },
        { id: 8, url: schoolGroupOutside, category: "school_life", title: "Comunidade Escolar" },
        { id: 9, url: schoolParking, category: "school_life", title: "Infraestrutura" },
        { id: 10, url: sportsCourt, category: "sports", title: "Polidesportivo" },
        { id: 11, url: itLabWide, category: "school_life", title: "Sala de Informática" },
        { id: 12, url: schoolCorridor, category: "school_life", title: "Instalações" },
        { id: 13, url: library1, category: "school_life", title: "Biblioteca" },
        { id: 14, url: scienceLabEmpty, category: "science", title: "Laboratório" },
        { id: 15, url: scienceDetails, category: "science", title: "Material Pedagógico" },
        { id: 16, url: library2, category: "school_life", title: "Centro de Estudo" },
        { id: 17, url: schoolAssembly, category: "school_life", title: "Assembleia" },
        { id: 18, url: scienceDisplay, category: "science", title: "Ciências Naturais" },
        { id: 19, url: studentsStudying1, category: "secondary", title: "Ensino Secundário" },
        { id: 20, url: studentsStudying2, category: "secondary", title: "Preparação Académica" },
        { id: 21, url: musicPerformance, category: "school_life", title: "Momento Cultural" },
        { id: 22, url: schoolEventTents, category: "school_life", title: "Evento Escolar" },
        { id: 23, url: classroomReading, category: "primary", title: "Leitura e Biblioteca" },
        { id: 24, url: chemistryExperiment, category: "secondary", title: "Química Prática" },
        { id: 25, url: sciencePractice, category: "science", title: "Trabalho de Laboratório" },
        { id: 26, url: sportsTraining, category: "sports", title: "Treino de Desporto" },
    ];

    const filteredImages = filter === "all" ? images : images.filter(img => img.category === filter);

    return (
        <div className="min-h-screen bg-background">
            <SEO title={t("nav_gallery")} canonical="/gallery" />
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 uppercase tracking-tight">
                            {t("nav_gallery")}
                        </h1>
                        <div className="h-1.5 w-24 bg-primary mx-auto mb-8"></div>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t("gallery_subtitle")}
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat.id
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((img) => (
                                <motion.div
                                    key={img.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative h-48 sm:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img.url}
                                        alt={`${img.title} - Galeria Colégio enko Sekeleka`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 className="text-white" size={32} />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-5xl max-h-[90vh] relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain rounded-2xl"
                            />
                            <div className="absolute bottom-6 left-6 text-white text-xl font-bold">
                                {selectedImage.title}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Gallery;
