
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import crest from '../../assets/uw-crest.svg'

export default function BadgerBudsNavbar(props) {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">
                <img
                    alt="Badger Buddies Logo"
                    src={crest}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Stop Bullying
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/Problems">Problems We are facing</Nav.Link>
                    <Nav.Link as={Link} to="/Consequences">Consequences of Bullying</Nav.Link>
                    <Nav.Link as={Link} to="/Prevent">Dealing with Bullying</Nav.Link>
                    <Nav.Link as={Link} to="/Resources">More Resources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
