import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const schema = z.object({
  guardian: z.string().min(2),
  student: z.string().min(2),
  age: z.string().min(1),
  program: z.enum(["creche", "primary", "secondary", "cambridge"]),
  phone: z.string().min(8),
  email: z.string().email(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const Enrollment = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const phone = "258877589113";
    const programLabels: Record<string, string> = {
      creche: t("enroll_program_creche"),
      primary: t("enroll_program_primary"),
      secondary: t("enroll_program_secondary"),
      cambridge: t("enroll_program_cambridge"),
    };

    const whatsappMessage = `*Nova Solicitação de Ingresso*
---------------------------
*Encarregado:* ${data.guardian}
*Aluno:* ${data.student}
*Idade:* ${data.age}
*Segmento:* ${programLabels[data.program]}
*Telefone:* ${data.phone}
*Email:* ${data.email}
${data.message ? `\n*Mensagem:* ${data.message}` : ""}
---------------------------`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <SEO title={t("nav_admissions")} canonical="/enrollment" />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 text-center">
              {t("nav_admissions")}
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              {t("enroll_process_title")}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-20 text-center">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-card-foreground">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-black">1</div>
                <h4 className="font-bold mb-2">{t("enroll_step_1_title")}</h4>
                <p className="text-sm text-muted-foreground">{t("enroll_step_1_desc")}</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-card-foreground">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-black">2</div>
                <h4 className="font-bold mb-2">{t("enroll_step_2_title")}</h4>
                <p className="text-sm text-muted-foreground">{t("enroll_step_2_desc")}</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-card-foreground">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-black">3</div>
                <h4 className="font-bold mb-2">{t("enroll_step_3_title")}</h4>
                <p className="text-sm text-muted-foreground">{t("enroll_step_3_desc")}</p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-primary/10 border border-primary/20 rounded-[2rem] p-12 text-center"
              >
                <CheckCircle className="mx-auto text-primary mb-6" size={72} />
                <h3 className="text-2xl font-bold mb-4">{t("enroll_success_title")}</h3>
                <p className="text-lg text-muted-foreground">{t("enroll_success")}</p>
              </motion.div>
            ) : (
              <div className="bg-card border border-border rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6 font-semibold uppercase tracking-widest text-[10px] text-primary mb-4 border-b border-border pb-2 col-span-2">
                    {t("enroll_form_section_1")}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: "guardian" as const, label: t("enroll_guardian"), type: "text" },
                      { name: "student" as const, label: t("enroll_student"), type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-bold text-foreground mb-2">{field.label}</label>
                        <input
                          {...register(field.name)}
                          type={field.type}
                          className={`w-full px-5 py-4 rounded-xl border-2 ${errors[field.name] ? "border-destructive" : "border-border"
                            } bg-background text-foreground focus:outline-none focus:border-primary transition-all`}
                        />
                        {errors[field.name] && (
                          <p className="text-xs text-destructive mt-2">{errors[field.name]?.message}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">{t("enroll_age")}</label>
                      <input
                        {...register("age")}
                        type="number"
                        className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">{t("enroll_program")}</label>
                      <select
                        {...register("program")}
                        className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-all appearance-none"
                      >
                        <option value="creche">{t("enroll_program_creche")}</option>
                        <option value="primary">{t("enroll_program_primary")}</option>
                        <option value="secondary">{t("enroll_program_secondary")}</option>
                        <option value="cambridge">{t("enroll_program_cambridge")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">{t("enroll_phone")}</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">{t("enroll_email")}</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">{t("enroll_message")}</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                      placeholder={t("enroll_form_msg_placeholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-primary text-primary-foreground font-black rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all text-lg uppercase tracking-widest border-b-4 border-primary-dark"
                  >
                    {t("enroll_form_submit")}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Enrollment;
