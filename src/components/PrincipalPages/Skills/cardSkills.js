/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Card, Col, Container } from 'react-bootstrap';
import SkillLevel from './skillsLevel';

const CardSkills = ({
  name, level, picture, color, text, experience,
}) => (
  <Col>
    <Container>
      <Card className="p-0 box position-relative">
        <Card.Header
          className={`text-center text-${text} bg-${color}`}
          style={{
            fontSize: '1em', width: 'auto', height: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}
        >{name}
        </Card.Header>
        <Card.Img
          style={{ width: '300px', height: '11em', borderRadius: '0' }}
          variant="top"
          src={picture}
          alt={name}
        />
        <Card.Body style={{ backgroundColor: 'white' }}>
          <Card.Text
            className="text-center text-blue"
            aria-label="Bouton pour en savoir plus sur la compétence"
            style={{
              fontSize: 'small',
            }}
          >
            <strong>Expérience :</strong><br />{experience}
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            display: 'flex', flexDirection: 'column', backgroundColor: '#f8f5f2', color: '#373741',
          }}
        >
          <small
            style={{ fontSize: 'small' }}
            className="text-muted text-center"
            aria-label={`Niveau: ${level}`}
          >
            <span>Niveau : </span>
            <SkillLevel
              level={level}
            />
          </small>
        </Card.Footer>
      </Card>
    </Container>

  </Col>

);

CardSkills.propTypes = {
  picture: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};

export default CardSkills;
