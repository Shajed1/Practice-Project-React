import { Container, Row, Col } from "react-bootstrap";

function AppFooter() {
    return (
        <footer
            className="py-5 mt-auto"
            style={{
                background: "#111827",
                color: "#fff",
            }}
        >
            <Container>
                <Row>
                    <Col md={4}>
                        <h4 className="fw-bold">DevSpireX</h4>
                        <p className="text-light">
                            Professional web development and creative digital solutions.
                        </p>
                    </Col>

                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className="text-decoration-none text-light">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-decoration-none text-light">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="text-decoration-none text-light">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-decoration-none text-light">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Contact</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +880 1234-567890</p>
                        <p>Bangladesh</p>
                    </Col>
                </Row>

                <hr className="border-secondary" />

                <div className="text-center">
                    © {new Date().getFullYear()} DevSpireX. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
}

export default AppFooter;
