/* eslint-disable max-len */
import { useState } from 'react';
import clipboard from 'clipboard-copy';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Photo from '../../../assets/img/photo.png';

function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => {
    clipboard(text)
      .then(() => {
        <p>'Texte copié dans le presse-papiers avec succès'</p>;
        console.log('Texte copié dans le presse-papiers avec succès');
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        <p>'Erreur, le texte n'a pas été copié dans le presse-papiers'</p>;
        console.error('Erreur lors de la copie dans le presse-papiers :', err);
        setIsCopied(false);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '25rem' }}>
        <Card.Img style={{ marginBottom: '2em' }} variant="top" src={Photo} />
        <Card.Body>
          <Card.Title>Mégane Baltzer</Card.Title>
          <Card.Text>
            <em style={{ fontStyle: 'italic' }}>Développeuse mobile et web mobile<br />spécialisée Front-end</em>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item
            onClick={() => copyToClipboard('4 venelle de la Mésange Bleue, 93160 Noisy-le-Grand')}
            style={{ cursor: 'pointer' }}
            title="Cliquez pour copier l'adresse postale"
          >
            4 venelle de la Mésange Bleue, 93160 Noisy-le-Grand
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => copyToClipboard('baltzermegane@gmail.com')}
            style={{ cursor: 'pointer' }}
            title="Cliquez pour copier l'adresse mail"
          >
            baltzermegane@gmail.com
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => copyToClipboard('06.12.13.53.94')}
            style={{ cursor: 'pointer' }}
            title="Cliquez pour copier le numéro de téléphone"
          >
            06.12.13.53.94
          </ListGroup.Item>
        </ListGroup>
        {isCopied && (
          <p style={{ color: 'green' }}>Texte copié avec succès dans le presse-papiers !</p>
        )}
      </Card>
    </div>
  );
}


export default Contact;
