import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

import img1 from "@/assets/school-1.jpeg";
import img2 from "@/assets/school-2.jpeg";
import img3 from "@/assets/school-3.jpeg";
import img4 from "@/assets/school-4.jpeg";
import img5 from "@/assets/school-5.jpeg";
import img6 from "@/assets/school-6.jpeg";
import img7 from "@/assets/school-7.jpeg";
import img8 from "@/assets/school-8.jpeg";
import img9 from "@/assets/school-9.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const GallerySection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("gallery_title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("gallery_subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Colégio Enko Sekeleka - ${i + 1}`}
                className="w-full h-40 sm:h-52 md:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-foreground/90 z-[60] flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selected}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
