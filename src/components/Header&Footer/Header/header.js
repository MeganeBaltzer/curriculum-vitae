import {
  Nav, Navbar,
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import datas from '../../../datas/roads';

function Header() {
  const activeLink = ' mx-3 fs-6 border-bottom border-3 border-brown text-brown text-decoration-none pb-2 ';
  const normalLink = ' mx-3 fs-6 text-white text-decoration-none pb-2 transition-normal';

  return (
    <header>
      <Navbar
        expand="lg"
        className="px-4 py-0 sticky-header"
        style={{
          position: 'fixed', top: '0', width: '100%', zIndex: '1000'
        }}
        bg="blue"
        variant="dark"
        aria-label="header"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-between">
          <Nav style={{ margin: '2%' }} className="align-items-center">
            {
              datas.map((data) => (
                <NavLink
                  style={{ margin: '1%' }}
                  to={data.route}
                  aria-label={data.label}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  key={data.label}
                >
                  <h1
                    style={{ fontSize: '1em', marginBottom: 0 }}
                  >
                    {data.label}
                  </h1>
                </NavLink>
              ))
            }
            <NavDropdown style={{ marginTop: '-1%' }} title="Autres" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="https://www.linkedin.com/in/megane-baltzer/" target="u_blank" eventKey="4.1">Mon Linkedin</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact" eventKey="4.3">Me contacter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </header>

  );
}

export default Header;
