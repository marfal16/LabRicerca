import "./App.css";

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">Laboratorio</div>
        <ul className="nav-links">
          <li><a href="#about">Chi siamo</a></li>
          <li><a href="#research">Cosa facciamo</a></li>
          <li><a href="#projects">Progetti</a></li>
          <li><a href="#contact">Contatti</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Laboratorio di Ricerca Avanzata</h1>
          <p>
            Un centro dedicato alla ricerca, all’innovazione e alla formazione,
            con collaborazioni accademiche e industriali di livello internazionale.
          </p>
          <a href="#about" className="btn-primary">Scopri di più</a>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section id="about" className="section light">
        <h2>Chi siamo</h2>
        <p>
          Il nostro laboratorio promuove la ricerca interdisciplinare con
          dottorandi, ricercatori e partner accademici in tutto il mondo.
          L’obiettivo è creare innovazione e conoscenza con impatto reale.
        </p>
      </section>

      {/* COSA FACCIAMO */}
      <section id="research" className="section">
        <h2>Cosa facciamo</h2>
        <div className="cards">
          <div className="card">
            <h3>🔬 Ricerca sperimentale</h3>
            <p>Progetti innovativi in laboratorio con strumenti di ultima generazione.</p>
          </div>
          <div className="card">
            <h3>📊 Analisi dati</h3>
            <p>Modellazione e interpretazione di dati scientifici complessi.</p>
          </div>
          <div className="card">
            <h3>🌍 Collaborazioni</h3>
            <p>Partnership con università e centri di ricerca internazionali.</p>
          </div>
        </div>
      </section>

      {/* PROGETTI */}
      <section id="projects" className="section light">
        <h2>Progetti recenti</h2>
        <div className="projects">
          <div className="project">
            <h3>Progetto Alpha</h3>
            <p>Studio sull’intelligenza artificiale applicata ai processi industriali.</p>
          </div>
          <div className="project">
            <h3>Progetto BioLab</h3>
            <p>Ricerca sui biomateriali sostenibili per un futuro più verde.</p>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contact" className="section contact">
        <h2>Contatti</h2>
        <p>Email: info@laboratorio.it</p>
        <p>Telefono: +39 0123 456789</p>
        <p>Indirizzo: Via Esempio 123, Città, Italia</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Laboratorio di Ricerca Avanzata — Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

export default App;
