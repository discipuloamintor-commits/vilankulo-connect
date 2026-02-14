import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
}

const SEO = ({
    title,
    description,
    canonical = "/",
    ogType = "website"
}: SEOProps) => {
    const { t } = useLanguage();

    const siteName = "Colégio Enko Sekeleka";
    const fullTitle = title ? `${title} | ${siteName}` : t("seo_title");
    const fullDescription = description || t("seo_description");
    const baseUrl = "https://www.colegioenkosekeleka.com";
    const url = `${baseUrl}${canonical === "/" ? "" : canonical}`;

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Update Meta Description
        const updateMeta = (name: string, content: string, attr: string = "name") => {
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        updateMeta("description", fullDescription);
        updateMeta("og:title", fullTitle, "property");
        updateMeta("og:description", fullDescription, "property");
        updateMeta("og:url", url, "property");
        updateMeta("og:type", ogType, "property");
        updateMeta("twitter:title", fullTitle);
        updateMeta("twitter:description", fullDescription);

        // Update Canonical
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute("href", url);

    }, [fullTitle, fullDescription, url, ogType]);

    return null;
};

export default SEO;
