import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import AllPublications from './pages/AllPublications';
import member1 from "./assets/team/member1.jpeg";
import member2 from "./assets/team/member2.jpeg";
import member3 from "./assets/team/member3.jpeg";
import member4 from "./assets/team/member4.jpeg";
import member5 from "./assets/team/member5.jpeg";
import member6 from "./assets/team/member6.jpeg";
import member7 from "./assets/team/member7.jpeg";


const latestPublications = [
  {
    title: "Cancer detection via one-shot learning: integrating gene expression and genomic mutation analysis",
    year: 2025,
    authors: "Petescia, Alessia; Benevento, Gerardo; Falanga, Anna; Macaro, Alessandro; Malandrino, Delfina; Montefusco, Alberto; Sorrentino, Rosalinda; Zaccagnino, Rocco",
    url: "https://hdl.handle.net/11386/4920232",
    doi: "10.1186/s12859-025-06257-3"
  },
  {
    title: "Conventional Chemotherapy and Inflammation: What Is the Role of the Inflammasome in the Tumor Microenvironment?",
    year: 2025,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Di Caprio, Simone; Falanga, Anna; D'Andria, Emmanuel; D'Emanuele Di Villa Bianca, Roberta; Sorrentino, Rosalinda",
    url: "https://hdl.handle.net/11386/4919535",
    doi: "10.3390/biomedicines13010203"
  },
  {
    title: "Role of the AIM2 Inflammasome in Cancer: Potential Therapeutic Strategies",
    year: 2025,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Di Caprio, Simone; Falanga, Anna; D'Andria, Emmanuel; D'Emanuele Di Villa Bianca, Roberta; Sorrentino, Rosalinda",
    url: "https://hdl.handle.net/11386/4919536",
    doi: "10.3390/biomedicines13020395"
  }
];

// --- Dati Progetti Aggiornati ---
const researchProjects = [
  "IDENTIFICATION OF AIM2 AS A NEW DRUG TARGET IN LUNG CANCER",
  "FIBROFARMA – TRANSCRIPTOMIC AND PROTEOMIC PROFILING OF PATIENTS WITH IDIOPATHIC PULMONARY FIBROSIS AND DEVELOPMENT OF SMALL MOLECULES AND INNOVATIVE PHARMACEUTICAL FORMULATIONS",
  "SPATIAL LUNG – DIGITAL PLATFORM FOR SPATIAL BIOLOGY ON LUNG TISSUES: BIOBANK AND TRANSCRIPTOMIC AND PROTEOMIC ANALYSIS DATABASE",
  "UNCOVERING NOVEL TARGETS AND PATHWAYS TO ENHANCE THE EFFICACY OF COMBINATION IMMUNOTHERAPY FOR LUNG CANCER",
  "TISSUE MICROBIOTA REMODELING DURING LUNG CANCER PROGRESSION: A FUEL FOR IMMUNOSUPPRESSION VIA TREGS INDUCTION",
  "A BASKET STUDY APPROACH IN PRECLINICAL DRUG DEVELOPMENT: THE MTOR PATHWAY IN GLIOBLASTOMA MULTIFORME (GBM) AND IN NON-SMALL-CELL-LUNG-CANCER (NSCLC) TUMOR MODELS."
];
//

const teamMembers = [
  {
    name: "Rosalinda Sorrentino",
    role: "Group Leader since 2023 — PhD, Associate Professor of Pharmacology and Therapy",
    photo: member1
  },
  {
    name: "Michela Terlizzi",
    role: "PhD, Associate Professor of Physiology and Anatomy",
    photo: member2
  },
  {
    name: "Chiara Colarusso",
    role: "Postdoctoral Researcher",
    photo: member3
  },
  {
    name: "Anna Falanga",
    role: "PhD Student",
    photo: member4
  },
  {
    name: "Simone Di Caprio",
    role: "PhD Student",
    photo: member5
  },
  {
    name: "Emanuele D'Andria",
    role: "PhD Student",
    photo: member6
  },
  {
    name: "Alessia Petescia",
    role: "Embedded Data Analyst and Bioinformatician",
    photo: member7
  }
];



function HomePage() {

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">RS Lab</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Rosalinda Sorrentino Lab</h1>
          <p>
            Un centro dedicato alla ricerca, all’innovazione e alla formazione,
            con collaborazioni accademiche e industriali di livello internazionale.
          </p>
          <a href="#about" className="btn-primary">Scopri di più</a>
        </div>
      </section>

      {/* HOME */}
      <section id="about" 
      className="section">
        <h2>About</h2>
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

      {/* TEAM */}
      <section id="team" className="section light">
        <h2>Meet our team</h2>
          <p>
            Our laboratory promotes interdisciplinary research involving researchers, PhD students, university interns, and both academic and private partners worldwide. 
            Our goal is to create innovation and knowledge with a real-world impact.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section light">
        <h2>Projects</h2>
        <div className="projects">
          {/* PROJECTS */}
          {researchProjects.map((projectTitle, index) => (
            <div className="project" key={index}>
              {/* Usiamo <h3> per il titolo, come negli esempi precedenti */}
              <h3>{projectTitle}</h3> 
              {/* Potresti aggiungere qui una <p> con una breve descrizione se l'avessi */}
            </div>
          ))}
        </div>
      </section>
    
    {/* Pubblicazioni */}
      <section id="publications" className="section light">
        <h2>Publications</h2>
        <div className="projects">
          {latestPublications.map((pub, idx) => (
            <div className="project" key={idx}>
              <h3>{pub.title}</h3>
              <p><strong>Year:</strong> {pub.year}</p>
              <p><strong>Authors:</strong> {pub.authors}</p>
              <p>
                <a href={pub.url} target="_blank" rel="noopener noreferrer">Link</a> | DOI: {pub.doi}
              </p>
            </div>
          ))}
        </div>
        <Link to="/all-publications" className="btn-primary" style={{ display: "inline-block" }}>
          All Publications
        </Link>
      </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>We are located at Department of Pharmacy, University of Salerno, Italy</p>
          <p>Fisciano Campus, Building F, Fourth Floor, Room 068 (U.FSTEC-07.P04.068)</p>
          <p>Email: <a href="mailto:rsorrentino@unisa.it">rsorrentino@unisa.it</a></p>
          <p>
            LinkedIn:{" "}
            <a 
              href="https://www.linkedin.com/in/rosalinda-sorrentino-5780656b" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Rosalinda Sorrentino
            </a>
          </p>
        </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 RS Lab — All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-publications" element={<AllPublications />} />
    </Routes>
  );
}

export default App;

