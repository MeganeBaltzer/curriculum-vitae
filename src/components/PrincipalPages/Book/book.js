import Carousel from 'react-bootstrap/Carousel';
import booksdata from '../../../datas/book';
import './styles.scss';

function Book() {
  return (
    <Carousel data-bs-theme="dark" className="carousel">
      {booksdata.map((book) => (
        <Carousel.Item className="bookImageContainer" key={book.id}>
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            <img
              className="bookImage"
              src={book.image}
              alt={book.name}
              title="Cliquez ici pour visiter le site"
            />
          </a>
          <Carousel.Caption className="bookTextContainer">
            <h1 className="bookText" style={{ fontFamily: 'Times New Roman' }}>
              {book.name}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Book;
