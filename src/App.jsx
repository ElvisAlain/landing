// src/App.jsx
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="main-wrapper">
      
      {/* SECCIÓN 1: HERO (Inspiración en imagen_3 de Squarespace) */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">Elvis Calzada / ITC Tec</p>
          <h1 className="hero-giant-title">
            <span className="italic">Computer Science</span> Engineering
          </h1>
          <p className="hero-statement">
            Teziutlán, Puebla.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: PORTAFOLIO (Layout superpuesto - Inspiración en imagen_4) */}
      <section className="portfolio-section">
        <h2 className="section-title">Soluciones Implementadas</h2>
        
        <div className="dynamic-grid">
          {/* PROYECTO 1 - Talk Tutors */}
          <PortfolioItem 
            type="E-Learning Plataforma"
            title="Talk Tutors"
            description="Lideré la creación de la página de conexión para tutores, diseñando una experiencia de matching educativa limpia y escalable."
            color="cream"
          />

          {/* PROYECTO 2 - Radek */}
          <PortfolioItem 
            type="Internship / Fintech"
            title="Radek Portal"
            description="Desarrollo full-stack del módulo de remisiones y la página de Addenda, optimizando flujos de facturación complejos."
            color="dark"
            offset="down" // Empuja esta tarjeta hacia abajo
          />

          {/* PROYECTO 3 - HemoApp */}
          <PortfolioItem 
            type="Mobile / Health"
            title="HemoDonantes"
            description="Prototipo y software funcional para la gestión de donantes de sangre, fusionando usabilidad con seguridad de datos."
            color="cream"
            offset="up" // Empuja esta tarjeta hacia arriba
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

// Componente para los items de portafolio con layout superpuesto
function PortfolioItem({ type, title, description, color, offset }) {
  const cardClass = `portfolio-card ${color} ${offset ? `offset-${offset}` : ''}`;
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