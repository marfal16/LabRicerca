import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import AllPublications from './pages/AllPublications';
import member1 from "./assets/team/member1.jpeg";
import member2 from "./assets/team/member2.jpeg";
import member3 from "./assets/team/member3.jpeg";
import member4 from "./assets/team/member4.jpeg";
import member5 from "./assets/team/member5.jpeg";
import member6 from "./assets/team/member6.jpeg";
import member7 from "./assets/team/member7.jpeg";
import pub1 from "./assets/pub1.jpg";
import sfondo from "./assets/sfondo.jpg";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';

const latestPublications = [
  {
    title: "Cancer detection via one-shot learning: integrating gene expression and genomic mutation analysis",
    year: 2025,
    authors: "Petescia, Alessia; Benevento, Gerardo; Falanga, Anna; Macaro, Alessandro; Malandrino, Delfina; Montefusco, Alberto; Sorrentino, Rosalinda; Zaccagnino, Rocco",
    url: "https://hdl.handle.net/11386/4920232",
    doi: "10.1186/s12859-025-06257-3",
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
  "Identification of aim2 as a new drug target in lung cancer",
  "Fibrofarma – transcriptomic and proteomic profiling of patients with idiopathic pulmonary fibrosis and development of small molecules and innovative pharmaceutical formulations",
  "Spatial lung – digital platform for spatial biology on lung tissues: biobank and transcriptomic and proteomic analysis database",
  "Uncovering novel targets and pathways to enhance the efficacy of combination immunotherapy for lung cancer",
  "Tissue microbiota remodeling during lung cancer progression: a fuel for immunosuppression via tregs induction",
  "A basket study approach in preclinical drug development: the mtor pathway in glioblastoma multiforme (gbm) and in non-small-cell-lung-cancer (nsclc) tumor models."
];
//

const teamMembers = [
  {
    name: "Rosalinda Sorrentino",
    role: "Group Leader since 2016 — PhD, Associate Professor of Pharmacology and Therapy",
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

// Definisci lo stile
const heroStyle = {
  backgroundImage: `url(${pub1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '80vh', 
};

function HomePage() {

  return (
    <div className="App">

      {/* HERO */}
      <section id="home" className="hero" style={heroStyle}>
        <div className="hero-content">
          <h1>Rosalinda Sorrentino Lab</h1>
          <p>
            Un centro dedicato alla ricerca, all’innovazione e alla formazione,
            con collaborazioni accademiche e industriali di livello internazionale.
          </p>
         </div>
          <a href="#about" className="btn-scroll">Scopri di più </a>

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
        <h2>Meet our Team</h2>
          <p>
            Our laboratory promotes interdisciplinary research involving researchers, PhD students, university students, and both academic and private partners worldwide. 
            Our goal is to create innovation and knowledge in Lung Cancer Immunoncology and therapy with a real-world impact.
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
              <p><strong>{projectTitle}</strong> </p> 
            </div>
          ))}
        </div>
      </section>
    
{/* PUBLICATIONS */}
<section id="publications" className="section light">
  <h2>Publications</h2>

  <div className="projects">
    {latestPublications.map((pub, idx) => (
      <div className="project" key={idx}>
        {/* immagine opzionale */}
        {pub.image && (
          <div className="project-image">
            <img src={pub.image} alt={pub.title} />
          </div>
        )}

        <div className="project-content">
          <h3>{pub.title}</h3>
          <p><strong>Year:</strong> {pub.year}</p>
          <p><strong>Authors:</strong> {pub.authors}</p>
          <p>
            <a href={pub.url} target="_blank" rel="noopener noreferrer">
              View Publication
            </a>
            {pub.doi && <> | DOI: {pub.doi}</>}
          </p>
        </div>
      </div>
    ))}
  </div>

  <Link 
    to="/all-publications" 
    className="btn-primary" 
    style={{ display: "inline-block", marginTop: "2rem" }}
  >
    View All Publications →
  </Link>
</section>


<section id="contact" className="section contact">
  <h2>Contact</h2>
  <div className="contact-container">
    <div className="contact-info">
  <div className="info-block">
    <h4>Location</h4>
    <p>
      Department of Pharmacy, University of Salerno<br />
      Fisciano Campus, Building F, Fourth Floor<br />
      Room 068 (U.FSTEC-07.P04.068)
    </p>
  </div>

  <div className="info-block">
    <h4>Email</h4>
    <a href="mailto:rsorrentino@unisa.it">rsorrentino@unisa.it</a>
  </div>

  <div className="info-block">
    <h4>LinkedIn</h4>
    <a
      href="https://www.linkedin.com/in/rosalinda-sorrentino-5780656b"
      target="_blank"
      rel="noopener noreferrer"
    >
      Rosalinda Sorrentino
    </a>
  </div>
</div>

    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const subject = encodeURIComponent(form.subject.value);
        const body = encodeURIComponent(form.message.value);
        window.location.href = `mailto:rsorrentino@unisa.it?subject=${subject}&body=${body}`;
      }}
    >
      <h3>Send us a message</h3>
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  </div>
</section>

    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* NAVBAR: Mantenuto fisso */}
      <Navbar /> 
      
      {/* SCROLL E ROUTER: Controllano solo il contenuto che cambia */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-publications" element={<AllPublications />} />
      </Routes>
      
      {/* FOOTER: Mantenuto fisso */}
      <Footer /> 
    </div>
  );
}

export default App;


