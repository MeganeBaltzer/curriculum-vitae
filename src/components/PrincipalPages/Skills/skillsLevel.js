/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';

const SkillsLevel = ({ level }) => {
  const filledStars = Math.min(5, Math.max(1, level)); // Limiter le niveau entre 1 et 5
  const emptyStars = 5 - filledStars;

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <FaStar
          key={`star-filled-${index}`}
          fill="gold"
        />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar
          key={`star-empty-${index}`}
          fill="lightgray"
        />
      ))}
    </>
  );
};

SkillsLevel.propTypes = {
  level: PropTypes.any.isRequired,
};

export default SkillsLevel;
