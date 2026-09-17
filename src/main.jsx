import React from "react";
import { createRoot } from "react-dom/client";
import {
  CalendarCheck,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import "./styles.css";

const business = {
  name: "Barber Shop",
  tagline: "Cortes, estilo y cuidado personal con trato de barrio y acabado profesional.",
  phoneDisplay: "+52 55 5516 9106",
  phoneWhatsapp: "525555169106",
  address: "Sucursal Condesa, Ciudad de Mexico",
  hours: "Abierto hoy",
};

const services = [
  { name: "Alaciado o moldeado", price: "$120", note: "Acabado rapido para salir impecable." },
  { name: "Dama / Caballero / Ninos", price: "$175", note: "Corte clasico, moderno o familiar." },
  { name: "Barba rasurado", price: "$195", note: "Perfilado limpio con detalle." },
  { name: "Bigote", price: "$80", note: "Ajuste expres para mantener forma." },
  { name: "Facial", price: "$539", note: "Limpieza y descanso para la piel." },
  { name: "Depilado de ceja", price: "$190", note: "Definicion natural y precisa." },
  { name: "Planchado", price: "$190", note: "Estilo pulido para eventos o diario." },
  { name: "Maquillaje", price: "$950", note: "Look completo para ocasion especial." },
  { name: "Tintes / efectos / modeling", price: "$954", note: "Color, textura y transformacion." },
];

const gallery = [
  {
    title: "Fachada con identidad",
    caption: "Una presencia de calle clara ayuda a que nuevos clientes te ubiquen rapido.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Silla principal",
    caption: "El sitio vende confianza mostrando el espacio real donde atiendes.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Cuidado facial",
    caption: "Fotos de proceso comunican higiene, oficio y atencion al detalle.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Resultados listos",
    caption: "Antes y despues, cortes y barbas son ideales para cerrar citas.",
    image:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=85",
  },
];

function whatsappLink(message) {
  return `https://wa.me/${business.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
}

function App() {
  return (
    <main>
      <header className="topbar" aria-label="Navegacion principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brandMark">B</span>
          <span>{business.name}</span>
        </a>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galeria</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="iconButton" href={`tel:${business.phoneWhatsapp}`} aria-label="Llamar">
          <Phone size={20} />
        </a>
      </header>

      <section id="inicio" className="hero">
        <div className="heroMedia" aria-hidden="true">
          <img src={gallery[0].image} alt="" />
        </div>
        <div className="heroContent">
          <p className="eyebrow">Barberia y estetica en Condesa</p>
          <h1>{business.name}</h1>
          <p>{business.tagline}</p>
          <div className="heroActions">
            <a
              className="primaryButton"
              href={whatsappLink("Hola, quiero agendar una cita en Barber Shop.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} />
              Agendar por WhatsApp
            </a>
            <a className="secondaryButton" href="#servicios">
              Ver precios
            </a>
          </div>
          <div className="quickFacts" aria-label="Datos rapidos">
            <span>
              <Clock3 size={18} />
              {business.hours}
            </span>
            <span>
              <MapPin size={18} />
              {business.address}
            </span>
          </div>
        </div>
      </section>

      <section className="intro" aria-label="Propuesta del negocio">
        <div>
          <Scissors size={26} />
          <h2>Un demo hecho para vender citas, no solo para verse bonito.</h2>
        </div>
        <p>
          Esta estructura sirve como plantilla comercial: portada con foto real,
          boton directo a WhatsApp, lista de precios clara, prueba visual y cierre
          de contacto. Para cada negocio local solo cambias textos, colores,
          servicios y fotos.
        </p>
      </section>

      <section id="servicios" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Menu de servicios</p>
          <h2>Precios claros para decidir rapido</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.note}</p>
              </div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="galeria" className="galleryBand">
        <div className="sectionHeader">
          <p className="eyebrow">Galeria</p>
          <h2>Fotos que convierten confianza en citas</h2>
        </div>
        <div className="galleryGrid">
          {gallery.map((item) => (
            <article className="photoCard" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof">
        <div>
          <Star size={24} fill="currentColor" />
          <Star size={24} fill="currentColor" />
          <Star size={24} fill="currentColor" />
          <Star size={24} fill="currentColor" />
          <Star size={24} fill="currentColor" />
        </div>
        <blockquote>
          "Excelente atencion, buen corte y ambiente de barberia tradicional."
        </blockquote>
        <p>Texto demo editable para resenas de Google, Facebook o clientes reales.</p>
      </section>

      <section id="contacto" className="contact">
        <div>
          <p className="eyebrow">Agenda hoy</p>
          <h2>Convierte visitas en mensajes directos al negocio</h2>
          <p>
            El boton abre WhatsApp con mensaje precargado para reducir friccion y
            facilitar que el cliente reserve desde el celular.
          </p>
        </div>
        <div className="contactPanel">
          <Sparkles size={26} />
          <h3>{business.phoneDisplay}</h3>
          <p>{business.address}</p>
          <a
            className="primaryButton full"
            href={whatsappLink("Hola, vi su pagina y quiero preguntar por disponibilidad.")}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarCheck size={20} />
            Pedir disponibilidad
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
