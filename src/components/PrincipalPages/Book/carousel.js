import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

function BookCarousel({ name, description, image }) {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image}
        alt={name}
      />
      <Carousel.Caption>
        <h3>{name}</h3>
        <p>{description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

BookCarousel.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

export default BookCarousel;
