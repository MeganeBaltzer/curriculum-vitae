import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filteredByCategory, setfilteredByCategory }) => (
  <Container>
    <Form
      className="mb-5 w-80 text-blue bg-meerschaum rounded p-1"
      aria-label="Recherche et filtres"
    >
      <Form.Select
        className="mb-2"
        aria-label="Catégorie de compétence"
        style={{ color: '#4a536b' }}
        value={filteredByCategory}
        onChange={(event) => {
          // console.log(event.target.value);
          (setfilteredByCategory(event.target.value));
        }}
      >
        <option value="Toutes les compétences">Toutes les compétences</option>
        <option value="Front-end">Front-end</option>
        <option value="Back-end">Back-end</option>
        <option value="Management">Management</option>
        <option value="Langues">Langues</option>
        <option value="Integration">Integration</option>
        <option value="SEO">SEO</option>
        <option value="Soft skills">Soft skills</option>
      </Form.Select>
    </Form>
  </Container>
);

CategoryFilter.propTypes = {
  filteredByCategory: PropTypes.string.isRequired,
  setfilteredByCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
