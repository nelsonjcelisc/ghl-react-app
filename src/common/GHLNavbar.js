import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";

class GHLNavbar extends React.Component {
    render() {
        return <div>
            <Navbar color="info" expand="md" light >
                <NavbarBrand href="/">
                    GHL
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() {
                }}/>
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                Components
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    }
}

export default GHLNavbar;