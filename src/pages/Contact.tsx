import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Phone, Facebook, CheckCircle, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const phone = "258847589113";
  const whatsappMsg = encodeURIComponent(t("whatsapp_message"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = () => setSubmitted(true);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{t("contact_title")}</h1>
            <p className="text-muted-foreground">{t("contact_subtitle")}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info + Map */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact_address")}</h3>
                    <p className="text-sm text-muted-foreground">Nhamucunda, Bairro 19 de Outubro, Cidade de Vilankulo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact_phone")}</h3>
                    <p className="text-sm text-muted-foreground">847 589 113 / 877 589 113</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Facebook className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold text-foreground">Facebook</h3>
                    <a
                      href="https://facebook.com/colegioenkosekeleka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      /colegioenkosekeleka
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="tel:+258847589113"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  <Phone size={18} />
                  {t("contact_phone")}
                </a>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d35.3167!3d-23.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f2b1c0b0b0b0b0b%3A0x0!2sVilankulo%2C+Mozambique!5e0!3m2!1spt!2smz!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Colégio Enko Sekeleka - Vilankulo"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle className="text-primary mb-4" size={56} />
                  <p className="text-lg font-medium text-foreground">{t("contact_success")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact_name")}</label>
                    <input
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-destructive" : "border-input"} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact_email")}</label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-destructive" : "border-input"} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact_message")}</label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-destructive" : "border-input"} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg text-base"
                  >
                    {t("contact_submit")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
