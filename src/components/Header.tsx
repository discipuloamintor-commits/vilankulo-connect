import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAcademicsOpen(false);
    setMobileAcademicsOpen(false);
    document.body.style.overflow = "auto";
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  const navItems = [
    { label: t("nav_home"), href: "/" },
    { label: t("nav_about"), href: "/about" },
    {
      label: t("nav_academics"),
      href: "/academics",
      submenu: [
        { label: t("nav_sub_creche"), href: "/academics#creche" },
        { label: t("nav_sub_hybrid"), href: "/academics#hybrid" },
        { label: t("nav_sub_national"), href: "/academics#national" },
        { label: t("nav_sub_cambridge"), href: "/academics#cambridge" },
      ]
    },
    { label: t("nav_gallery"), href: "/gallery" },
    { label: t("nav_school_life"), href: "/school-life" },
    { label: t("nav_contact"), href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md h-20"
          : "bg-background/80 backdrop-blur-sm h-24"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={logo}
              alt="Colégio enko Sekeleka"
              className="h-14 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.submenu && setAcademicsOpen(true)}
                onMouseLeave={() => item.submenu && setAcademicsOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all rounded-lg ${location.pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={14} className={`transition-transform duration-300 ${academicsOpen ? "rotate-180" : ""}`} />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <AnimatePresence>
                    {academicsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-card border border-border shadow-xl rounded-2xl p-2 mt-1"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <Link
              to="/enrollment"
              className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all text-sm uppercase tracking-widest border-2 border-primary"
            >
              {t("nav_admissions")}
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center bg-muted rounded-full p-1 text-xs font-bold">
              <button
                onClick={() => setLang("pt")}
                className={`px-3 py-1.5 rounded-full transition-all ${lang === "pt" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full transition-all ${lang === "en" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer UI - Moved top-level */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full xs:w-[320px] z-[101] bg-black shadow-2xl flex flex-col pt-24"
            >
              {/* Drawer Controls */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-10 py-8">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <div key={item.href} className="flex flex-col gap-4">
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`text-2xl font-bold uppercase tracking-tight transition-colors ${location.pathname === item.href ? "text-primary" : "text-white"}`}
                      >
                        {item.label}
                      </Link>

                      {/* Hierarchical Indented Submenu */}
                      {item.submenu && (
                        <div className="flex flex-col gap-3 pl-6 border-l border-white/10">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-lg font-medium text-white/50 hover:text-primary transition-colors"
                            >
                              - {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer CTA */}
              <div className="p-8 bg-zinc-900/40">
                <Link
                  to="/enrollment"
                  onClick={() => setMobileOpen(false)}
                  className="w-full h-16 flex items-center justify-center bg-primary text-primary-foreground font-black rounded-2xl shadow-xl uppercase tracking-[0.2em] text-sm"
                >
                  {t("nav_admissions")}
                </Link>
                <div className="mt-6 text-center text-[10px] text-white/20 uppercase font-black tracking-widest">
                  © 2026 Colégio enko Sekeleka
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
