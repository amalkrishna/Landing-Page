import React from 'react';
import { Nav,Navbar,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

function Navbars(props) {

  return (
    <Navbar collapseOnSelect >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">BuyBlue</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="tog">
        <NavDropdown eventKey={1} title="Men" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Option 1</MenuItem>
          <MenuItem eventKey={3.2}>Option 2</MenuItem>
          <MenuItem eventKey={3.3}>Option 3</MenuItem>
        </NavDropdown>
          <NavDropdown eventKey={2} title="Women" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Option 1</MenuItem>
            <MenuItem eventKey={3.2}>Option 2</MenuItem>
            <MenuItem eventKey={3.3}>Option 3</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={3} title="Kids" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Option 1</MenuItem>
            <MenuItem eventKey={3.2}>Option 2</MenuItem>
            <MenuItem eventKey={3.3}>Option 3</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={3} title="Accessories" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Option 1</MenuItem>
            <MenuItem eventKey={3.2}>Option 2</MenuItem>
            <MenuItem eventKey={3.3}>Option 3</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
          <img src={process.env.PUBLIC_URL + '/images/nav/bag.png'} alt="navImg"/>
          </NavItem>
          <NavItem eventKey={2} href="#">
          <img src={process.env.PUBLIC_URL + '/images/nav/user.png'} alt="navImg"/>
          </NavItem>
          <NavItem eventKey={3} href="#">
          <img src={process.env.PUBLIC_URL + '/images/nav/search.png'} alt="navImg"/>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

}

export default Navbars;
