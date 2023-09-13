import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NameFilter = ({ filteredByTheName, setFilteredByTheName }) => (
  <Container>
    <Form
      className="mt-3 mb-1 w-80 text-blue bg-meerschaum rounded p-1"
      aria-label="Recherche et filtres"
    >
      <Form.Group className="mb-3" controlId="formSearchFilters">
        <Form.Control
          type="text"
          className="text-center"
          placeholder="Saisissez une compétence..."
          value={filteredByTheName}
          onChange={(event) => {
            setFilteredByTheName(event.target.value);
          }}
          aria-label="Recherche"
        />
      </Form.Group>
    </Form>
  </Container>
);

NameFilter.propTypes = {
  filteredByTheName: PropTypes.string.isRequired,
  setFilteredByTheName: PropTypes.func.isRequired,
};

export default NameFilter;
