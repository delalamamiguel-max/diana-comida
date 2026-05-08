"use client";

import Link from "next/link";
import { Dictionary } from "@/i18n/dictionaries";
import { useState } from "react";

export default function Header({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
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
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "var(--font-playfair)", color: "var(--color-gold)" }}>
          <Link href={`/${lang}`} onClick={() => setIsOpen(false)}>Diana Flores</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: "none" }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href={`/${lang}#catering`} style={{ color: "var(--color-white)" }}>{dict.nav.catering}</Link>
            <Link href={`/${lang}#menu`} style={{ color: "var(--color-white)" }}>{dict.nav.menu}</Link>
            <Link href={`/${lang}#sauces`} style={{ color: "var(--color-white)" }}>{dict.nav.sauces}</Link>
            <Link href={`/${lang}#desserts`} style={{ color: "var(--color-white)" }}>{dict.nav.desserts}</Link>
            <Link href={`/${lang}#about`} style={{ color: "var(--color-white)" }}>{dict.nav.about}</Link>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderLeft: "1px solid var(--color-border)", paddingLeft: "1.5rem" }}>
              <Link href={`/${toggleLang}`} style={{ fontWeight: "bold", color: "var(--color-gold)" }}>
                {lang === "es" ? "EN" : "ES"}
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href={`/${toggleLang}`} className="mobile-lang-toggle" style={{ fontWeight: "bold", color: "var(--color-gold)", display: "block" }}>
            {lang === "es" ? "EN" : "ES"}
          </Link>
          
          <button 
            className="hamburger-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-white)",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.5rem",
              minHeight: "44px",
              minWidth: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <nav style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          backgroundColor: "var(--color-background-alt)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
        }}>
          <Link href={`/${lang}#catering`} onClick={() => setIsOpen(false)} style={{ color: "var(--color-white)", fontSize: "1.125rem" }}>{dict.nav.catering}</Link>
          <Link href={`/${lang}#menu`} onClick={() => setIsOpen(false)} style={{ color: "var(--color-white)", fontSize: "1.125rem" }}>{dict.nav.menu}</Link>
          <Link href={`/${lang}#sauces`} onClick={() => setIsOpen(false)} style={{ color: "var(--color-white)", fontSize: "1.125rem" }}>{dict.nav.sauces}</Link>
          <Link href={`/${lang}#desserts`} onClick={() => setIsOpen(false)} style={{ color: "var(--color-white)", fontSize: "1.125rem" }}>{dict.nav.desserts}</Link>
          <Link href={`/${lang}#about`} onClick={() => setIsOpen(false)} style={{ color: "var(--color-white)", fontSize: "1.125rem" }}>{dict.nav.about}</Link>
        </nav>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .hamburger-btn {
            display: none !important;
          }
          .mobile-lang-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
