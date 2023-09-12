/* eslint-disable max-len */
import { useState } from 'react';
import Modal from 'react-modal';
import oClock from 'src/assets/img/oclock.png';
import oClockSite from 'src/assets/img/oclocksite.jpg';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Diplome from '../../../assets/img/diplome.png';
import './styles.scss';

const School = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const oClockRedirection = () => {
    window.open('https://oclock.io/formations/developpeur-web', '_blank');
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = Diplome;
    link.target = '_blank';
    link.download = 'titre-professionnel-megane-baltzer.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <div className="school">
      <h1 className="title1">O'Clock, une école virtuelle pour devenir<br />un développeur web compétent et diplômé</h1>
      <div className="container">
        <Card className="card" style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img className="anim schoolImg" style={{ width: '40%', maxHeight: '50%' }} title="Cliquez ici pour visiter le site O'Clock" variant="top" src={oClock} onClick={oClockRedirection} aria-label="Logo O'Clock" />
        </Card>
        <br />
        <Card className="card" style={{ display: 'flex', alignItems: 'center' }}>
          <Card.Img className="anim schoolImg" style={{ width: '60%', maxHeight: '50%' }} title="Cliquez ici pour agrandir l'image" variant="bottom" src={oClockSite} onClick={openModal} aria-label="Page formation du site O'Clock" />
        </Card>
      </div>
      <Modal
        className="modalcontainer"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image en taille réelle"
      >
        <img className="image-modal" src={oClockSite} alt="capture d'écran lisible du site" />
        <button style={{ backgroundColor: '#373741', color: 'white', marginTop: '5px' }} onClick={closeModal} type="button" alt="bouton de fermeture">Fermer la fenêtre</button>
      </Modal>
      <h2>Ma formation : developpeur web & web mobile</h2>
      <p>J'ai commencé ma formation chez O'Clock en novembre 2022. J'ai opté pour une formation intensive de 6 mois avec un socle fullstack et une spécialisation au choix au terme de celui-ci. Nous avons commencé par apprendre les fondamentaux de l'intégration avec le HTML et le CSS3. Nous avons ainsi réussi à donner vie à nos premières pages web. Nous avons ensuite poursuivi en apprenant les rudiments du langage PHP et Javascript.</p>
      <h3>Le socle fullstack</h3>
      <h4>Un peu de back-end avec PHP</h4>
      <p>Nous avons commencé par nous attaquer à PHP pour nous permettre de réaliser de bout en bout un site dynamique et fonctionnel. Nous avons planché sérieusement sur la Programmation Orientée Objet (POO), le développement mobile et la gestion de la base de données avec mySQL, en utilisant principalement Adminer. La suite du programme a porté sur la structure d'une application, la modélisation et l'organisation des données ainsi que l'optimisation du réferencement naturel. Pour résumer, nous sommes devenus des experts MVC et SEO. Pour finir, nous nous sommes penchés sérieusement sur l'infrastructure technique d'administation bien sécurisée et la gestion des interfaces clients.</p>
      <h4>Un peu de front-end avec Javascript</h4>
      <p>Nous avons façonné l'expérience utilisateur en créant de l'interactivité sur nos pages web. Nous avons ainsi appris à utiliser le langage Javascript sans ajouter le moindre Framework, mais ça, c'était en attendant la spécialisation...</p>
      <h3>La spécialisation front-end</h3>
      <p>Arrivée au dernier mois de la formation, j'ai décidé de suivre la spécialité Javascript avec la bibliothèque <em>React</em>. J'ai fait ce choix pour deux raisons: la première est que j'ai une affinité plus prononcée pour l'aspect visuel d'un site et la seconde est qu'une fois le socle de la formation achevé, je me suis rendue compte que nous avions eu l'occasion de pousser nos connaissances de façon plus importante sur la partie back d'un site. Choisir le front pour ma spécialité finale était une façon d'obtenir un profil plus complet, si ce n'est fullstack. Une fois les bases acquises sur <em>React</em>, nous nous sommes penchés sur <em>Axios</em> afin de nous permettre la connexion avec les API, puis <em>Redux</em> afin d'optimiser nos applications si besoin. </p>
      <h3>Mon diplôme "Developpeur web et web mobile"</h3>
      <p>A la suite de formation, je me suis inscrite à l'examen du titre professionnel niveau 5 "Developpeur web et web mobile". C'est avec succès que j'ai passé les tests et ainsi obtenu mon diplôme le 04 août 2023.</p>
      <Image className="anim" onClick={downloadPdf} style={{ width: '15em' }} title="Cliquez ici pour télécharger le titre professionnel" src={Diplome} fluide />
    </div>

  );
};

export default School;
