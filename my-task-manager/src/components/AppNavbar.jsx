
import logo from "../assets/images/gemini-svg.svg"
import Helper from "../utility/Helper.js";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Helper.logout();
    navigate("/");
    window.location.reload();
  };
    return (
        <Navbar expand="lg" className="bg-body-tertiary "> 
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" className="nav-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        {
                            Helper.islogin() &&
                            <NavLink className={"nav-link"} to="/storetask">Your Task</NavLink>
                        }
                                                {
                            Helper.islogin() &&
                            <NavLink className={"nav-link"} to="/profile">Your Profile</NavLink>
                        }


                    </Nav>
                    {
                        Helper.islogin()?(<button onClick={handleLogout} className={"btn btn-success"}>Logout</button>):
                            (<Link to="/registration" className={"btn btn-success"}>Login</Link>)
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;

