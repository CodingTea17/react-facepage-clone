import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, InputGroup, InputGroupButton, Input } from 'reactstrap';

function Header(props){
  return(
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">Facepage</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/" className="text-primary">Notifications</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components" className="text-primary">Messages</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <InputGroup>
            <Input />
            <InputGroupButton color="primary">Search</InputGroupButton>
          </InputGroup>
          <NavItem>
            <NavLink href="/components" className="text-primary">Tweet</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
