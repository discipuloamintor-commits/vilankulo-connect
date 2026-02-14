import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Enko Sekeleka" className="h-12 w-auto brightness-200" />
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Colégio Ekosekeleka
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Nhamucunda, Bairro 19 de Outubro, Cidade de Vilankulo
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("footer_links")}</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/about" className="hover:opacity-100 transition-opacity">{t("nav_about")}</Link>
              <Link to="/academics" className="hover:opacity-100 transition-opacity">{t("nav_academics")}</Link>
              <Link to="/gallery" className="hover:opacity-100 transition-opacity">{t("nav_gallery")}</Link>
              <Link to="/enrollment" className="hover:opacity-100 transition-opacity">{t("nav_admissions")}</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">{t("nav_contact")}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("footer_contact_title")}</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                <span>{t("about_location_desc")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+258 847 589 113 / 877 589 113</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">{t("footer_email_label")}:</span>
                <a href="mailto:vilanculo@ekoeducation.com" className="hover:text-primary transition-colors">
                  vilanculo@ekoeducation.com
                </a>
              </div>
              <a
                href="https://facebook.com/colegioenkosekeleka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors mt-2"
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <div>© {new Date().getFullYear()} Colégio Enko Sekeleka. {t("footer_rights")}</div>
          <div>
            Desenvolvido por{" "}
            <a href="https://www.lgtecserv.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold">
              LG TecServ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
