import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import img from '../images/logo-color.svg';

const Header = (props) => {
  return (
    <Navbar
      collapseOnSelect
      style={{ minHeight: '110px', fontFamily: 'cursive', fontSize: '20px' }}
      bg="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="font-weight-bold my-5"
            style={{
              fontFamily: 'lobster',
              fontSize: '40px',
              color: 'white',
              fontStyle: 'none',
              textDecoration: 'none',
            }}
          >
            <img
              src={`http://localhost:3000/logo-color.svg`}
              style={{ height: '100px', marginTop: '-5px' }}
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/post-ad"
              className="mx-1"
              style={{
                color: 'white',
                borderRadius: '10px',
                boxShadow: '5px 5px black',
              }}
            >
              Post Ad
            </Nav.Link>
            <Nav.Link
              className="mx-1"
              style={{
                color: 'white',
                borderRadius: '10px',
                boxShadow: '5px 5px black',
              }}
            >
              Pet Accessories
            </Nav.Link>
            <Nav.Link
              className="mx-1"
              style={{
                color: 'white',
                borderRadius: '10px',
                boxShadow: '5px 5px black',
              }}
            >
              Query Section
            </Nav.Link>
          </Nav>
          <Nav>
            <Link
              to="/register"
              className="my-auto mx-2"
              style={{
                fontStyle: 'none',
                borderRadius: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
                boxShadow: '5px 5px black',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Register
            </Link>
            <Link
              to="/sign-in"
              className="my-auto mx-2"
              style={{
                fontStyle: 'none',
                borderRadius: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
                boxShadow: '5px 5px black',
                color: 'white',
                textDecoration: 'none',
              }}
              eventKey={2}
            >
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// function mapStateToProps({ currentUser }) {
//   return { currentUser };
// }
// mapStateToProps have state object as an argument, we can fetch state[Data] like this as obvious

export default Header;
// in App.tsx file, currentUserDetails are already fetched
// and App.tsx file is directly connected to the every route we render --- notice --- only routes - pages
// normal components (not pages) will be connected to App.tsx by using that components in that App.tsx
