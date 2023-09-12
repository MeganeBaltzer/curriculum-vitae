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
        aria-label="Catégorie de recette"
        style={{ color: '#4a536b' }}
        value={filteredByCategory}
        onChange={(event) => {
          // console.log(event.target.value);
          (setfilteredByCategory(event.target.value));
        }}
      >
        <option value="Toutes les catégories">Toutes les catégories</option>
        <option value="Front-end">Front-end</option>
        <option value="Back-end">Back-end</option>
        <option value="Management">Management</option>
        <option value="Langues">Langues</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="SEO">SEO</option>
        <option value="Soft Skills">Soft Skills</option>
      </Form.Select>
    </Form>
  </Container>
);

CategoryFilter.propTypes = {
  filteredByCategory: PropTypes.string.isRequired,
  setfilteredByCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
