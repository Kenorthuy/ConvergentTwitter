import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import ROUTES from "../misc/routes"

export default function MyNav () {
    return (
        <Navbar id="nav" bg="light" expand="lg">
            <Navbar.Brand
                as={Link}
                to="/Home"
            >Convergent Template Site</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    { ROUTES.map(route => {
                        return <Nav.Link as={Link} to={route.path}>{route.title}</Nav.Link>
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}