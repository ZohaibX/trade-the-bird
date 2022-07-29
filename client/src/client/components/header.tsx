import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import img from '../images/logo-color.svg';
import { keys } from '../../config/keys';
import SideBar from './home/side-bar';
import SideBar2 from './home/side-bar-2';

const Header = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <Navbar
      collapseOnSelect
      style={{ fontFamily: 'cursive', fontSize: '20px' }}
      bg="dark"
      className="header"
      id="header"
    >
      <Container>
        <Navbar.Brand className="navbar_brand">
          <Link
            to="/"
            className="font-weight-bold my-5 navbar_brand_link"
            style={{
              fontFamily: 'lobster',
              fontSize: '40px',
              color: 'white',
              fontStyle: 'none',
              textDecoration: 'none',
            }}
          >
            {/* REPLACES */}
            <img
              className="navbar_brand_image"
              src={`${keys.ROUTE}/logo-color.svg`}
              style={{ height: '100px', marginTop: '-5px' }}
              alt=""
            />
          </Link>
          <SideBar2 currentUser={currentUser} name="Work" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <SideBar currentUser={currentUser} name="Work" />
        </Navbar.Collapse>
        <Navbar.Collapse className="navbar_side" id="responsive-navbar-nav">
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
              as={Link}
              to="/query-hub"
              className="mx-1"
              style={{
                color: 'white',
                borderRadius: '10px',
                boxShadow: '5px 5px black',
              }}
            >
              Query Hub
            </Nav.Link>
            {currentUser && currentUser.role !== 'Admin' ? (
              <Nav.Link
                as={Link}
                to="/get-my-ads"
                className="mx-1"
                style={{
                  color: 'white',
                  borderRadius: '10px',
                  boxShadow: '5px 5px black',
                }}
              >
                Your Uploads
              </Nav.Link>
            ) : null}
          </Nav>

          {!currentUser && (
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
          )}

          {currentUser && (
            <Nav>
              {/* <Link
                to="/"
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
                {currentUser.username}
              </Link> */}
              <a
                href={`${keys.BACKEND}/api/users/signOut`}
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
                Logout
              </a>
            </Nav>
          )}
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
