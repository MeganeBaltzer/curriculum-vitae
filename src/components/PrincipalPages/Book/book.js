/* eslint-disable max-len */
import Carousel from 'react-bootstrap/Carousel';
import BookCarousel from './carousel';
import booksdata from '../../../datas/book';

function Book() {
  return (
    <Carousel>
      {booksdata.map((book) => (
        <div>
          <BookCarousel key={book.id} {...book} />
        </div>
      ))}
    </Carousel>
  );
}

export default Book;
