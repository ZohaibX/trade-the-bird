import * as React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

const Header = (props) => {
  

  return (
    <Navbar collapseOnSelect style={{height: "100px", fontFamily: "lobster", fontSize: "20px"}} bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >
    <Link to="/" className="font-weight-bold my-5" style={{fontFamily: "lobster", fontSize: "40px", color: "white", fontStyle: "none", textDecoration: "none"}} >
      Trade - Bird
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className="me-auto">
      <Nav.Link className='mx-2'>Features</Nav.Link>
      <Nav.Link className='mx-2'>Features 2</Nav.Link>
    </Nav>
    <Nav>
      <Link to="/register" className="my-auto mx-5" style={{ fontStyle: "none", color:"grey", textDecoration: "none"}} >
        Register
      </Link>
      <Link to="/sign-in" className="my-auto " style={{ fontStyle: "none", color:"grey", textDecoration: "none"}} eventKey={2} >
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

export default (Header);
// in App.tsx file, currentUserDetails are already fetched
// and App.tsx file is directly connected to the every route we render --- notice --- only routes - pages
// normal components (not pages) will be connected to App.tsx by using that components in that App.tsx
