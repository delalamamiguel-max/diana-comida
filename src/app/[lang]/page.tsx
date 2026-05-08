import { getDictionary, Language } from "@/i18n/dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const typedLang = (lang as Language) || "es";
  const dict = getDictionary(typedLang);

  return (
    <>
      <Header dict={dict} lang={typedLang} />
      <main>
        {/* HERO SECTION */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", minHeight: "80vh", alignItems: "center" }} className="container">
          <div style={{ padding: "4rem 0" }}>
            <h1 style={{ fontSize: "3.5rem", lineHeight: 1.1, marginBottom: "1.5rem", color: "var(--color-green)" }}>
              {dict.hero.headline}
            </h1>
            <p style={{ fontSize: "1.25rem", color: "var(--color-foreground)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              {dict.hero.subheadline}
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="https://wa.me/526141826737" target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-cta" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
                {dict.hero.primaryCta}
              </a>
              <a href="#menu" className="btn-secondary" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
                {dict.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div style={{ position: "relative", height: "100%", minHeight: "500px", borderRadius: "24px", overflow: "hidden", margin: "2rem 0" }}>
            <Image src="/hero.png" alt="Mexican Food Family Style" fill style={{ objectFit: "cover" }} priority />
          </div>
        </section>

        {/* VALUE PROPS SECTION */}
        <section style={{ backgroundColor: "var(--color-light-gray)", padding: "5rem 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {dict.valueProps.map((prop, idx) => (
              <div key={idx} style={{ padding: "2rem", backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-terracotta)", marginBottom: "1rem" }}>{prop.title}</h3>
                <p style={{ lineHeight: 1.5 }}>{prop.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CATERING SECTION */}
        <section id="catering" style={{ padding: "6rem 0" }} className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--color-green)", marginBottom: "1.5rem" }}>{dict.catering.headline}</h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "3rem" }}>{dict.catering.body}</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "3rem" }}>
            {dict.catering.events.map((event, idx) => (
              <span key={idx} style={{ padding: "0.5rem 1rem", backgroundColor: "var(--color-light-gray)", borderRadius: "20px", fontWeight: 500 }}>
                {event}
              </span>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="https://wa.me/526141826737" target="_blank" rel="noopener noreferrer" className="btn-primary whatsapp-cta" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
              {dict.catering.cta}
            </a>
          </div>
        </section>

        {/* MENU PREVIEW SECTION */}
        <section id="menu" style={{ backgroundColor: "var(--color-light-gray)", padding: "6rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.5rem", color: "var(--color-terracotta)", marginBottom: "1.5rem", textAlign: "center" }}>{dict.menu.title}</h2>
            <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>{dict.menu.body}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
              {dict.menu.categories.map((cat, idx) => (
                <div key={idx} style={{ padding: "1.5rem", backgroundColor: "white", borderRadius: "12px", textAlign: "center", fontWeight: "bold", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                  {cat}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href="https://wa.me/526141826737" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ backgroundColor: "white" }}>
                {dict.menu.cardCta}
              </a>
            </div>
          </div>
        </section>

        {/* HOT SAUCES SECTION */}
        <section id="sauces" style={{ padding: "6rem 0" }} className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--color-red)", marginBottom: "1.5rem" }}>{dict.sauces.headline}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>{dict.sauces.body}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {dict.sauces.products.map((product, idx) => (
              <div key={idx} style={{ padding: "2rem", border: "1px solid var(--color-border)", borderRadius: "16px", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-foreground)", marginBottom: "0.5rem" }}>{product.name}</h3>
                <p style={{ color: "var(--color-red)", fontWeight: 500 }}>{product.profile}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DESSERTS SECTION */}
        <section id="desserts" style={{ backgroundColor: "var(--color-light-gray)", padding: "6rem 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--color-green)", marginBottom: "1.5rem" }}>{dict.desserts.headline}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>{dict.desserts.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {dict.desserts.categories.map((cat, idx) => (
                <span key={idx} style={{ padding: "0.75rem 1.5rem", backgroundColor: "white", borderRadius: "30px", fontWeight: "bold", border: "1px solid var(--color-border)" }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" style={{ padding: "6rem 0" }} className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--color-terracotta)", marginBottom: "2rem" }}>{dict.about.title}</h2>
            <div style={{ fontSize: "1.125rem", lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {dict.about.body}
            </div>
          </div>
        </section>

      </main>
      <Footer dict={dict} lang={typedLang} />
    </>
  );
}
