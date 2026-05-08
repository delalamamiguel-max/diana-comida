import { Dictionary } from "@/i18n/dictionaries";
import Link from "next/link";

export default function Footer({ dict, lang }: { dict: Dictionary; lang: string }) {
  return (
    <footer style={{ backgroundColor: "var(--color-green)", color: "var(--color-white)", padding: "4rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "1rem", color: "var(--color-yellow)" }}>
            Diana Flores
          </h2>
          <p style={{ maxWidth: "400px", marginBottom: "2rem", color: "var(--color-light-gray)" }}>
            {lang === "es" ? "Catering mexicano casero en Chihuahua. Comida hecha con cuidado, sazón y tradición." : "Homemade Mexican catering in Chihuahua. Food made with care, flavor, and tradition."}
          </p>
          <a href="https://wa.me/526141826737" target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-cta">
            {dict.contact.cta}
          </a>
        </div>
        
        <div style={{ display: "flex", gap: "4rem", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h3 style={{ color: "var(--color-yellow)", marginBottom: "0.5rem" }}>{lang === "es" ? "Navegación" : "Navigation"}</h3>
            <Link href={`/${lang}#catering`} style={{ color: "var(--color-light-gray)" }}>{dict.nav.catering}</Link>
            <Link href={`/${lang}#menu`} style={{ color: "var(--color-light-gray)" }}>{dict.nav.menu}</Link>
            <Link href={`/${lang}#sauces`} style={{ color: "var(--color-light-gray)" }}>{dict.nav.sauces}</Link>
            <Link href={`/${lang}#desserts`} style={{ color: "var(--color-light-gray)" }}>{dict.nav.desserts}</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: "var(--color-light-gray)", fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} Diana Flores. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
      </div>
    </footer>
  );
}
