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
                Enko Sekeleka
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
              <a href="/#about" className="hover:opacity-100 transition-opacity">{t("nav_about")}</a>
              <a href="/#early-education" className="hover:opacity-100 transition-opacity">{t("nav_early")}</a>
              <a href="/#adult-education" className="hover:opacity-100 transition-opacity">{t("nav_adult")}</a>
              <Link to="/enrollment" className="hover:opacity-100 transition-opacity">{t("nav_enrollment")}</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">{t("nav_contact")}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("footer_contact")}</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Nhamucunda, Bairro 19 de Outubro, Vilankulo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>847 589 113 / 877 589 113</span>
              </div>
              <a
                href="https://facebook.com/colegioenkosekeleka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-100 transition-opacity"
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/20 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Colégio Enko Sekeleka. {t("footer_rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
