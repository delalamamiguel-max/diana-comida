import { getDictionary, Language } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const typedLang = (lang as Language) || "es";
  const dict = getDictionary(typedLang);

  const whatsappUrl = `https://wa.me/526141826737?text=${encodeURIComponent(dict.whatsapp.catering)}`;
  const whatsappUrlDefault = `https://wa.me/526141826737?text=${encodeURIComponent(dict.whatsapp.default)}`;

  return (
    <>
      <Header dict={dict} lang={typedLang} />
      <main>
        {/* HERO SECTION */}
        <section className="container hero-section">
          <div className="hero-content">
            <h1>{dict.hero.headline}</h1>
            <p className="hero-subtitle">{dict.hero.subheadline}</p>
            <div className="hero-buttons">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-cta">
                {dict.hero.primaryCta}
              </a>
              <a href="#menu" className="btn-secondary">
                {dict.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image src="/hero.png" alt="Mexican Food Family Style" fill style={{ objectFit: "cover" }} priority />
          </div>
        </section>

        {/* VALUE PROPS SECTION */}
        <section style={{ backgroundColor: "var(--color-background-alt)" }}>
          <div className="container card-grid">
            {dict.valueProps.map((prop, idx) => (
              <div key={idx} className="value-card">
                <h3>{prop.title}</h3>
                <p>{prop.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CATERING SECTION */}
        <section id="catering" className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: "1.5rem" }}>{dict.catering.headline}</h2>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", marginBottom: "3rem" }}>{dict.catering.body}</p>
          </div>
          <div className="events-flex">
            {dict.catering.events.map((event, idx) => (
              <span key={idx} className="event-pill">
                {event}
              </span>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-cta">
              {dict.catering.cta}
            </a>
          </div>
        </section>

        {/* MENU PREVIEW SECTION */}
        <section id="menu" style={{ backgroundColor: "var(--color-background-alt)" }}>
          <div className="container">
            <h2 style={{ color: "var(--color-gold)", marginBottom: "1.5rem", textAlign: "center" }}>{dict.menu.title}</h2>
            <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem auto", color: "var(--color-text-muted)" }}>{dict.menu.body}</p>
            <div className="card-grid">
              {dict.menu.categories.map((cat, idx) => (
                <div key={idx} className="menu-card">
                  {cat}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href={whatsappUrlDefault} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                {dict.menu.cardCta}
              </a>
            </div>
          </div>
        </section>

        {/* HOT SAUCES SECTION */}
        <section id="sauces" className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: "1.5rem" }}>{dict.sauces.headline}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--color-text-muted)" }}>{dict.sauces.body}</p>
          </div>
          <div className="card-grid">
            {dict.sauces.products.map((product, idx) => (
              <div key={idx} className="sauce-card">
                <h3>{product.name}</h3>
                <p style={{ color: "var(--color-gold)", fontWeight: 500 }}>{product.profile}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DESSERTS SECTION */}
        <section id="desserts" style={{ backgroundColor: "var(--color-background-alt)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: "1.5rem" }}>{dict.desserts.headline}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 3rem auto", color: "var(--color-text-muted)" }}>{dict.desserts.body}</p>
            <div className="events-flex">
              {dict.desserts.categories.map((cat, idx) => (
                <span key={idx} className="dessert-pill">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--color-gold)", marginBottom: "2rem" }}>{dict.about.title}</h2>
            <div style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", whiteSpace: "pre-line" }}>
              {dict.about.body}
            </div>
          </div>
        </section>

      </main>
      <Footer dict={dict} lang={typedLang} />

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappUrlDefault} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        aria-label="Contact on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </>
  );
}
