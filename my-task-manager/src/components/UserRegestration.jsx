
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import Helper from './../utility/Helper';

const UserRegistration = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      password: e.target.password.value,
    };
console.log(formData);
    try {
      const res = await axios.post(
        `${Helper.BASE_API()}/regester`,
        formData
      );

      console.log("Success:", res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const redirectToLogin = (formData) => {
    if (formData.length > 0) {
      window.location.href = "/login";
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h3 className="text-center text-primary fw-bold mb-4">
                User Registration
              </h3>

              <Form onSubmit={handleSubmit}>
                <Form.Control name="firstName" placeholder="First Name" className="mb-3" />
                <Form.Control name="lastName" placeholder="Last Name" className="mb-3" />
                <Form.Control name="email" placeholder="Email" className="mb-3" />
                <Form.Control name="mobile" placeholder="Mobile" className="mb-3" />
                <Form.Control name="password" type="password" placeholder="Password" className="mb-3" />

                <Button onClick={redirectToLogin} type="submit" className="w-100">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegistration;