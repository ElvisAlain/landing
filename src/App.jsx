// src/App.jsx
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="main-wrapper">
      
      {/* SECCIÓN 1: HERO - Ahora más compacto */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">Elvis Calzada / ITC Tec</p>
          <h1 className="hero-giant-title">
            <span className="italic">Computer Science</span><br/>Engineering
          </h1>
          <p className="hero-statement">
            Teziutlán, Puebla.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: PORTAFOLIO */}
      <section className="portfolio-section">
        <h2 className="section-title">Soluciones Implementadas</h2>
        
        <div className="dynamic-grid">
          
          {/* 1. Talk Tutors */}
          <PortfolioItem 
            type="E-Learning Plataforma"
            title="Talk Tutors"
            description="Lideré la creación de la página de conexión para tutores, diseñando una experiencia de matching educativa limpia y escalable."
            color="cream"
            offset="down"
            delay="1"
          />

          {/* 2. Radek Portal */}
          <PortfolioItem 
            type="Internship / Fintech"
            title="Radek Portal"
            description="Desarrollo full-stack del módulo de remisiones y la página de Addenda, optimizando flujos de facturación complejos."
            color="dark"
            offset="up"
            delay="2"
          />

          {/* 3. HemoDonantes - EL HACKATHON */}
          <PortfolioItem 
            type="Hackathon Winner 🏆"
            title="HemoDonantes"
            description="Proyecto ganador del Hackathon patrocinado por Google Cloud. Software funcional para la gestión de donantes de sangre, fusionando usabilidad con seguridad de datos."
            color="cream"
            offset="down"
            delay="3"
          />

          {/* 4. AnafilApp */}
          <PortfolioItem 
            type="Mobile / Health"
            title="AnafilApp"
            description="App móvil nativa (iOS y Android) para la gestión ágil de emergencias de anafilaxia, brindando soporte vital rápido."
            color="dark"
            offset="up"
            delay="4"
          />

          {/* 5. Banco de Alimentos */}
          <PortfolioItem 
            type="Web / Social Impact"
            title="Banco de Alimentos"
            description="Plataforma web desarrollada para el Banco de Alimentos de Chihuahua, optimizando su visibilidad y proceso de donaciones."
            color="cream"
            offset="down"
            delay="5"
          />

          {/* 6. Python Tec */}
          <PortfolioItem 
            type="Web / Education"
            title="Python @ Tec"
            description="Página interactiva diseñada para promover e impulsar el aprendizaje del lenguaje Python entre la comunidad estudiantil."
            color="cream"
            offset="up"
            delay="6"
          />

        </div>
      </section>

      {/* SECCIÓN 3: STACK & CONTACTO */}
      <footer className="refined-footer">
        <div className="stack-block">
          <h3>Especialización</h3>
          <p>iOS / SwiftUI · Android / Compose · React · Go · Elixir</p>
        </div>
        <div className="links-block">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">elvis.dev@tec.mx</a>
        </div>
      </footer>
    </div>
  )
}

// Actualizamos el componente para recibir el 'delay' de la animación
function PortfolioItem({ type, title, description, color, offset, delay }) {
  const cardClass = `portfolio-card ${color} offset-${offset} delay-${delay}`;
  return (
    <div className={cardClass}>
      <p className="card-type">{type}</p>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href="#" className="view-project-btn">Ver Detalle</a>
    </div>
  )
}

export default App