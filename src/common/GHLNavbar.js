import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

class GHLNavbar extends React.Component {
    render() {
        return <div>
            <Navbar color="info" expand="md" light >
                <NavbarBrand href="/">
                    GHL
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() {}}/>
            </Navbar>
        </div>
    }
}

export default GHLNavbar;