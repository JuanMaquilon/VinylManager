import React, { Component } from 'react';
import { Nav, NavItem, NavLink, NavbarBrand, Navbar , Collapse,NavbarToggler   } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
     <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
          VINYL MANAGER
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink >Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;