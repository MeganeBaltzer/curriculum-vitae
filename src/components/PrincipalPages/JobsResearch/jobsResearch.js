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
        <p>Actuellement à la recherche de mon premier challenge dans le milieu de la programmation, j'aimerais intégrer une entreprise en qualité de développeur Front-end. Je pense pouvoir apporter à une société les aptitudes nécessaires pour accomplir efficacement les missions propres à ce poste.</p>
        <p>En premier lieu, je souhaiterais vous indiquer que mon profil correspond tout à fait aux qualités attendues pour être développeur front-end. En effet, en plus de mon savoir-faire, je peux compter sur mon sens des responsabilités et sur ma rigueur. Je suis aussi quelqu’un d’ouvert avec un bon sens du contact et une vraie envie d’apprendre. Je pense que ce sont des valeurs incontournables pour atteindre le niveau de performance attendu par votre société.</p>
        <p>En outre, comme le montre mon CV, mon expérience professionnelle m’a permis de développer des compétences utiles dans n'importe quel domaine. J'ai eu de nombreuses responsabilités, aussi bien au niveau des performances mais également du social. Je me suis toujours adaptée aux différentes missions et aux différents postes que l'on m'a confiés. Cette expérience prouve bien que face aux aléas et nécessités de la profession de développeur web, je serai capable d’y répondre en toute autonomie.</p>
        <p>Intégrer une entreprise représente pour moi un réel enjeu pour mon avenir et j’espère que mon profil retiendra toute votre attention. Je reste à votre disposition pour toute information complémentaire et je suis à votre disposition pour un prochain entretien.</p>
        <p>Veuillez agréer, Madame, Monsieur, mes respectueuses salutations.</p>
      </div>
      <p className="jobsResearchSignature">Mégane Baltzer</p>
      <div style={{ borderTop: '0.5px solid #94A1C2', margin: '3em' }} />
      <h2 style={{ marginBottom: '1em' }}>Quelles sont mes attentes ?</h2>
      <p className="jobsResearchExpectations"><strong>Actuellement en recherche d'emploi</strong>, je suis intéressée par toutes propositions qui conviennent à mon profil (CDI, CDD ou stage). Dans l'idéal, j'aimerais commencer par <strong>un stage de 6 mois ou 1 an</strong> afin de développer sereinement mes compétences dans le monde professionnel. En effet, étant donné que je ne subis pas de quelconque pression pour retrouver un emploi de façon urgente, je pense qu'un stage serait plus confortable pour mon évolution.</p>
    </section>
    <Button className="anim" style={{ marginTop: '2em' }} variant="blue" onClick={downloadPdf}>Télécharger ma lettre de motivation</Button>
  </div>
);

export default JobsResearch;
