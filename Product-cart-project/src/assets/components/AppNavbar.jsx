import {Container, Nav, Navbar} from "react-bootstrap";

import {Link, NavLink} from "react-router-dom";
import logo from "../images/shopping-logo.svg"
import ValidationHelper from "../../utility/ValidationHelper.js";

const AppNavbar = () => {

 const logout = () => {
   sessionStorage.clear();
   window.location.href = "/";
 }
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
                        ValidationHelper.islogin()?(<button onClick={logout} className={"btn btn-success"}>Logout</button>):
                            (<Link to="/login" className={"btn btn-success"}>Login</Link>)
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;