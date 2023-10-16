/* eslint-disable max-len */
import Button from 'react-bootstrap/Button';
import lettreDeMotivation from '../../../assets/img/lettreDeMotivation.png';
import './styles.scss';

const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = lettreDeMotivation;
  link.target = '_blank';
  link.download = 'lettre-de-motivation-megane-baltzer.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const JobsResearch = () => (
  <div className="jobsResearchContainer">
    <section>
      <h1 style={{ marginBottom: '1em' }}>Ma lettre de motivation</h1>
      <div className="jobsResearchText">
        <p>Actuellement à la recherche de mon premier challenge dans le milieu de la programmation, j'aimerais intégrer une entreprise en qualité de développeur Front-end. Je pense disposer des aptitudes nécessaires pour accomplir efficacement les missions propres à ce poste.</p>
        <p>Mon profil correspond tout à fait aux qualités attendues pour être développeur front-end. En effet, en plus de mon savoir-faire, je peux compter sur mon sens des responsabilités et sur ma rigueur. Je suis aussi quelqu’un d’ouvert avec un bon sens du contact et une vraie envie d’apprendre.</p>
        <p>Comme le montre mon CV, mon expérience professionnelle m’a permis de développer des compétences utiles dans tous les domaines (SEO, community management, gestion de projets, etc). J'ai eu de nombreuses responsabilités, aussi bien au niveau des performances mais également du  management. Je me suis toujours adaptée aux différentes missions et aux postes que l'on m'a confiés. Cette expérience prouve que je serai capable de répondre en toute autonomie aux aléas et nécessités de la profession de développeur web.</p>
        <p>Intégrer une entreprise représente pour moi un réel enjeu pour mon avenir et j’espère que mon profil retiendra toute votre attention. Je reste à votre disposition pour toute information complémentaire et pour un prochain entretien.</p>
        <p>Veuillez agréer, Madame, Monsieur, mes respectueuses salutations.</p>
      </div>
      <p className="jobsResearchSignature">Mégane Baltzer</p>
      <div style={{ borderTop: '0.5px solid #94A1C2', margin: '3em' }} />
      <h2 style={{ marginBottom: '1em' }}>Quelles sont mes attentes ?</h2>
      <p className="jobsResearchExpectations"><strong>Actuellement en recherche d'emploi</strong>, je suis intéressée par toutes propositions qui conviennent à mon profil (CDI, CDD ou stage courte durée avec possibilité d'embauche à son terme).</p>
    </section>
    <Button className="anim" style={{ marginTop: '2em' }} variant="blue" onClick={downloadPdf}>Télécharger ma lettre de motivation</Button>
  </div>
);

export default JobsResearch;
