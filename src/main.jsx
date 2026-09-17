import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { CalendarCheck, Clock3, Languages, MapPin, MessageCircle, Phone, Scissors, Sparkles, Star } from "lucide-react";
import en from "./locales/en.json";
import es from "./locales/es.json";
import "./styles.css";

const PHONE_DISPLAY = "+52 55 5516 9106";
const PHONE_WHATSAPP = "525555169106";
const LANGUAGE_KEY = "teos-barbershop-language";
const translations = { es, en };
const galleryImages = [
  "/photos/outsideBarberShop.png",
  "/photos/barberSalon.png",
  "/photos/barber.png",
  "/photos/haircut.png",
];

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  return savedLanguage === "en" || savedLanguage === "es" ? savedLanguage : "es";
}

function whatsappLink(message) {
  return `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = translations[language];
  const alternateLanguage = language === "es" ? "en" : "es";

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
    document.title = `${content.business.name} | Condesa`;
  }, [language, content.business.name]);

  return (
    <main>
      <header className="topbar" aria-label={content.navigation.ariaLabel}>
        <a className="brand" href="#inicio" aria-label={content.navigation.homeLabel}>
          <span className="brandMark">T</span>
          <span>{content.business.name}</span>
        </a>
        <nav>
          <a href="#servicios">{content.navigation.services}</a>
          <a href="#galeria">{content.navigation.gallery}</a>
          <a href="#contacto">{content.navigation.contact}</a>
        </nav>
        <div className="headerActions">
          <button
            className="languageToggle"
            type="button"
            onClick={() => setLanguage(alternateLanguage)}
            aria-label={`${content.navigation.languageLabel}: ${translations[alternateLanguage].meta.languageName}`}
            title={content.navigation.languageLabel}
          >
            <Languages size={18} />
            <span>{alternateLanguage.toUpperCase()}</span>
          </button>
          <a className="iconButton" href={`tel:+${PHONE_WHATSAPP}`} aria-label={content.navigation.callLabel}>
            <Phone size={20} />
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroMedia" aria-hidden="true"><img src={galleryImages[0]} alt="" /></div>
        <div className="heroContent">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.business.name}</h1>
          <p>{content.business.tagline}</p>
          <div className="heroActions">
            <a className="primaryButton" href={whatsappLink(content.hero.message)} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />{content.hero.book}
            </a>
            <a className="secondaryButton" href="#servicios">{content.hero.prices}</a>
          </div>
          <div className="quickFacts" aria-label={content.hero.factsLabel}>
            <span><Clock3 size={18} />{content.business.hours}</span>
            <span><MapPin size={18} />{content.business.address}</span>
          </div>
        </div>
      </section>

      <section className="intro" aria-label={content.intro.ariaLabel}>
        <div><Scissors size={26} /><h2>{content.intro.title}</h2></div>
        <p>{content.intro.body}</p>
      </section>

      <section id="servicios" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">{content.servicesSection.eyebrow}</p>
          <h2>{content.servicesSection.title}</h2>
        </div>
        <div className="serviceGrid">
          {content.services.map((service) => (
            <article className="serviceCard" key={service.name}>
              <div><h3>{service.name}</h3><p>{service.note}</p></div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="galeria" className="galleryBand">
        <div className="sectionHeader">
          <p className="eyebrow">{content.gallerySection.eyebrow}</p>
          <h2>{content.gallerySection.title}</h2>
        </div>
        <div className="galleryGrid">
          {content.gallery.map((item, index) => (
            <article className="photoCard" key={item.title}>
              <img src={galleryImages[index]} alt={item.title} />
              <div><h3>{item.title}</h3><p>{item.caption}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof">
        <div aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => <Star key={index} size={24} fill="currentColor" />)}
        </div>
        <blockquote>{content.review.quote}</blockquote>
        <p>{content.review.caption}</p>
      </section>

      <section id="contacto" className="contact">
        <div>
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.body}</p>
        </div>
        <div className="contactPanel">
          <Sparkles size={26} />
          <h3>{PHONE_DISPLAY}</h3>
          <p>{content.business.address}</p>
          <a className="primaryButton full" href={whatsappLink(content.contact.message)} target="_blank" rel="noreferrer">
            <CalendarCheck size={20} />{content.contact.button}
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
