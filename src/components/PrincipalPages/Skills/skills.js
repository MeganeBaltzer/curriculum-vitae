/* eslint-disable no-plusplus */
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardSkills from './cardSkills';

const Skills = ({ filteredByTheName, filteredByCategory, skills }) => {
  // Fonction pour mélanger un tableau aléatoirement
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  // Mélangez le tableau skills
  const shuffledSkills = shuffleArray(skills);

  return (
    <div className="page">
      <section aria-label="Toutes les compétences">
        <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={4} className="g-4">
          {shuffledSkills
          // on filtre selon le nom
            .filter((skill) => skill.champs.toLowerCase().normalize('NFD').replace(/\s/g, '').replace(/[\u0300-\u036f]/g, '')
              .includes(filteredByTheName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '')))
            // on filtre selon les catégories
            .filter((skill) => {
              if (filteredByCategory === 'Toutes les compétences') {
                return true;
              }
              return skill.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filteredByCategory.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
            })
            .map((skill) => (
              <CardSkills key={skill.id} {...skill} />
            ))}
        </Row>
      </section>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Skills.defaultProps = {
  skills: null,
};

Skills.propTypes = {
  filteredByTheName: PropTypes.string.isRequired,
  filteredByCategory: PropTypes.any.isRequired,
};

export default Skills;
