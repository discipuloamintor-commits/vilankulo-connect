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

const schema = z.object({
  guardian: z.string().min(2),
  student: z.string().min(2),
  age: z.string().min(1),
  program: z.enum(["child", "adult"]),
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

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-center">
              {t("enroll_title")}
            </h1>
            <p className="text-muted-foreground text-center mb-10">{t("enroll_subtitle")}</p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center"
              >
                <CheckCircle className="mx-auto text-primary mb-4" size={56} />
                <p className="text-lg font-medium text-foreground">{t("enroll_success")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {[
                  { name: "guardian" as const, label: t("enroll_guardian"), type: "text" },
                  { name: "student" as const, label: t("enroll_student"), type: "text" },
                  { name: "age" as const, label: t("enroll_age"), type: "number" },
                  { name: "phone" as const, label: t("enroll_phone"), type: "tel" },
                  { name: "email" as const, label: t("enroll_email"), type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                    <input
                      {...register(field.name)}
                      type={field.type}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors[field.name] ? "border-destructive" : "border-input"
                      } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
                    />
                    {errors[field.name] && (
                      <p className="text-xs text-destructive mt-1">{errors[field.name]?.message}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("enroll_program")}</label>
                  <select
                    {...register("program")}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="child">{t("enroll_program_child")}</option>
                    <option value="adult">{t("enroll_program_adult")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("enroll_message")}</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg text-base"
                >
                  {t("enroll_submit")}
                </button>
              </form>
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
