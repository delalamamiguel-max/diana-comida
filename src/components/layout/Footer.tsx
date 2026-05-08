import { Dictionary } from "@/i18n/dictionaries";
import Link from "next/link";

export default function Footer({ dict, lang }: { dict: Dictionary; lang: string }) {
  const whatsappUrlDefault = `https://wa.me/526141826737?text=${encodeURIComponent(dict.whatsapp.default)}`;

  return (
    <footer style={{ backgroundColor: "var(--color-black)", borderTop: "1px solid var(--color-border)", padding: "4rem 0" }}>
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "1rem", color: "var(--color-gold)" }}>
            Diana Flores
          </h2>
          <p style={{ maxWidth: "400px", marginBottom: "2rem", color: "var(--color-text-muted)" }}>
            {lang === "es" ? "Catering mexicano premium en Chihuahua. El sabor familiar elevado a una experiencia impecable." : "Premium Mexican catering in Chihuahua. Family-style flavor elevated to an impeccable experience."}
          </p>
          <a href={whatsappUrlDefault} target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-cta">
            {dict.contact.cta}
          </a>
        </div>
        
        <div className="footer-links">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ color: "var(--color-gold)", marginBottom: "0.5rem", fontSize: "1.25rem" }}>{lang === "es" ? "Navegación" : "Navigation"}</h3>
            <Link href={`/${lang}#catering`} style={{ color: "var(--color-text-muted)" }}>{dict.nav.catering}</Link>
            <Link href={`/${lang}#menu`} style={{ color: "var(--color-text-muted)" }}>{dict.nav.menu}</Link>
            <Link href={`/${lang}#sauces`} style={{ color: "var(--color-text-muted)" }}>{dict.nav.sauces}</Link>
            <Link href={`/${lang}#desserts`} style={{ color: "var(--color-text-muted)" }}>{dict.nav.desserts}</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)", textAlign: "center", color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} Diana Flores. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
      </div>
    </footer>
  );
}
