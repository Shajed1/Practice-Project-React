import {Container, Nav, Navbar} from "react-bootstrap";
import ValidationHelper from "../../utility/ValidationHelper.js";
import {NavLink} from "react-router-dom";
import logo from "../images/shopping-logo.svg"

const AppNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container fluid>
                <Navbar.Brand href="#">
                <img src={logo} alt="logo" className="nav-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <NavLink className={"nav-link"} to="/">Home</NavLink>
                        {
                            ValidationHelper.islogin() &&
                            <NavLink className={"nav-link"} to="/cartlist">Cart List</NavLink>
                        }


                    </Nav>
                    {
                        ValidationHelper.islogin()?(<button className={"btn btn-success"}>Logout</button>):(<button className={"btn btn-success"}>Login</button>)
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;