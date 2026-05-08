import Link from "next/link";
import { Dictionary } from "@/i18n/dictionaries";

export default function Header({ dict, lang }: { dict: Dictionary; lang: string }) {
  const toggleLang = lang === "es" ? "en" : "es";

  return (
    <header style={{
      position: "sticky",
      top: 0,
      backgroundColor: "var(--color-background)",
      borderBottom: "1px solid var(--color-border)",
      zIndex: 50,
      padding: "1rem 0"
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "var(--font-playfair)" }}>
          <Link href={`/${lang}`}>Diana Flores</Link>
        </div>

        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link href={`/${lang}#catering`}>{dict.nav.catering}</Link>
          <Link href={`/${lang}#menu`}>{dict.nav.menu}</Link>
          <Link href={`/${lang}#sauces`}>{dict.nav.sauces}</Link>
          <Link href={`/${lang}#desserts`}>{dict.nav.desserts}</Link>
          <Link href={`/${lang}#about`}>{dict.nav.about}</Link>
          
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderLeft: "1px solid var(--color-border)", paddingLeft: "1.5rem" }}>
            <Link href={`/${toggleLang}`} style={{ fontWeight: "bold", textDecoration: "underline" }}>
              {lang === "es" ? "EN" : "ES"}
            </Link>
          </div>

          <a href="https://wa.me/526141826737" target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-cta">
            {dict.nav.whatsapp}
          </a>
        </nav>
      </div>
    </header>
  );
}
