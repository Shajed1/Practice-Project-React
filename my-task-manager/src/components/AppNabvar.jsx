
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "../assets/images/gemini-svg.svg"
function AppNavbar() {
    return (

        <Navbar
            style={{
                background: "linear-gradient(90deg, #0f172a, #1e293b)"
            }}
            data-bs-theme="dark"
        >
                <Container>
                    <Navbar.Brand ><img
                        alt="logo"
                        src={logo}
                        width="45"
                        height="45"
                    /></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>

                    </Nav>
                </Container>
            </Navbar>

    )
}

export default AppNavbar;