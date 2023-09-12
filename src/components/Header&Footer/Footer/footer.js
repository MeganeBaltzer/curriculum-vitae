import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cv from 'src/assets/img/cv.png';
import './styles.scss';

const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = cv;
  link.target = '_blank';
  link.download = 'curriculum-vitae-megane-baltzer.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Footer() {
  return (
    <div className="footer-wrapper">
      <Card className="text-center">
        <Card.Header className="text-white bg-blue">Informations complémentaires</Card.Header>
        <Card.Body className="bg-floatedblue p-3">
          <Card.Title>Vous êtes intéressé.e par ma candidature ?</Card.Title>
          <Card.Text>
            N'hésitez pas à télécharger mon curriculum-vitae en version papier.
          </Card.Text>
          <Button className="anim" variant="blue" onClick={downloadPdf}>Télécharger mon CV</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Merci</Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
