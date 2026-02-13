import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData, Category, GalleryItem } from "@/lib/galleryData";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: "all", label: t("gallery_filter_all") },
    { id: "science", label: t("gallery_filter_science") },
    { id: "tech", label: t("gallery_filter_tech") },
    { id: "primary", label: t("gallery_filter_primary") },
    { id: "secondary", label: t("gallery_filter_secondary") },
    { id: "sports", label: t("gallery_filter_sports") },
    { id: "life", label: t("gallery_filter_life") },
    { id: "infrastructure", label: t("gallery_filter_infra") },
  ] as const;

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryData;
    return galleryData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = galleryData.findIndex((i) => i.id === selectedItem.id);
    const nextItem = galleryData[(currentIndex + 1) % galleryData.length];
    setSelectedItem(nextItem);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = galleryData.findIndex((i) => i.id === selectedItem.id);
    const prevItem = galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length];
    setSelectedItem(prevItem);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t("gallery_title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("gallery_subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt[lang]}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title[lang]}</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{item.description[lang]}</p>
                    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                      <Maximize2 size={14} />
                      {t("gallery_view_details")}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <div className="absolute top-6 right-6 z-[110]">
              <button
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X size={24} />
              </button>
            </div>

            <div
              className="relative w-full max-w-6xl flex flex-col lg:flex-row bg-card rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative flex-1 bg-black/20 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
                <motion.img
                  key={selectedItem.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={selectedItem.src}
                  alt={selectedItem.alt[lang]}
                  className="max-w-full max-h-[70vh] object-contain"
                />

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-4 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all"
                  onClick={handleNext}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Sidebar Info */}
              <div className="w-full lg:w-80 p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
                  {selectedItem.category}
                </div>
                <h3 className="text-2xl font-bold mb-4">{selectedItem.title[lang]}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedItem.description[lang]}
                </p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-3 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
