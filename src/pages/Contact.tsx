import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Phone, Facebook, CheckCircle, MessageCircle, Clock, Send } from "lucide-react";
import SEO from "@/components/SEO";

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
    <div className="min-h-screen bg-background">
      <SEO title={t("nav_contact")} canonical="/contact" />
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 uppercase tracking-tight">
              {t("contact_title")}
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact_intro")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Contact Info Column */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("contact_phone")}</h3>
                  <p className="text-muted-foreground font-medium">+258 847 589 113</p>
                  <p className="text-muted-foreground font-medium">+258 877 589 113</p>
                </div>
                <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("contact_hours_title")}</h3>
                  <p className="text-muted-foreground font-medium">{t("contact_hours_days")}</p>
                  <p className="text-muted-foreground font-medium text-sm">07:30 - 16:30</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl p-10 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{t("about_location_title")}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t("about_location_desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-[#25D366]/30 transition-all text-lg"
                >
                  <MessageCircle size={24} />
                  WhatsApp
                </a>
                <a
                  href="https://facebook.com/colegioenkosekeleka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-[#1877F2] text-white rounded-2xl hover:shadow-xl hover:shadow-[#1877F2]/30 transition-all"
                >
                  <Facebook size={32} />
                </a>
              </div>

              {/* Interactive Map */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.16876610313!2d35.3135508!3d-21.990422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f3b333465d8362d%3A0xe5a363a0a3b2a24!2sVilankulo!5e0!3m2!1sen!2smz!4v1700000000000!5m2!1sen!2smz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                  allowFullScreen
                  className="absolute inset-0"
                  loading="lazy"
                  title="Localização do Colégio Enko Sekeleka"
                />
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-foreground text-background rounded-[3rem] p-10 md:p-14 shadow-2xl h-full flex flex-col justify-center">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t("contact_success_title")}</h3>
                  <p className="text-xl opacity-80 max-w-sm mx-auto">
                    {t("contact_success_desc")}
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-3">{t("contact_form_title")}</h2>
                    <p className="opacity-70 text-lg">{t("contact_form_subtitle")}</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-primary">{t("contact_name")}</label>
                      <input
                        {...register("name")}
                        className={`w-full bg-white/5 border-b-2 ${errors.name ? "border-destructive" : "border-white/20"} py-4 px-2 focus:outline-none focus:border-primary transition-all text-xl outline-none`}
                        placeholder={t("contact_form_name_placeholder")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-primary">{t("contact_email")}</label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`w-full bg-white/5 border-b-2 ${errors.email ? "border-destructive" : "border-white/20"} py-4 px-2 focus:outline-none focus:border-primary transition-all text-xl outline-none`}
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-[0.2em] mb-3 text-primary">{t("contact_message")}</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className={`w-full bg-white/5 border-b-2 ${errors.message ? "border-destructive" : "border-white/20"} py-4 px-2 focus:outline-none focus:border-primary transition-all text-xl outline-none resize-none`}
                        placeholder={t("contact_form_msg_placeholder")}
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full py-6 bg-primary text-primary-foreground font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all text-xl uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl"
                    >
                      <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      {t("contact_form_submit")}
                    </button>
                  </form>
                </>
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
