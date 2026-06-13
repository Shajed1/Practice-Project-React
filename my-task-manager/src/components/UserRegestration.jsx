import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import Helper from './../utility/Helper';
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

const UserRegistration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      password: e.target.password.value,
    };
   

if (
  !formData.firstName ||
  !formData.lastName ||
  !formData.email ||
  !formData.mobile ||
  !formData.password
) {
  toast.error("Please fill in all fields");
} else {
  setLoading(true);
  try {

      const res = await axios.post(
        `${Helper.BASE_API()}/regester`,
        formData
      );

      console.log("Success:", res.data);
    } catch (error) {
      console.log("Error:", error);
    
    }
      setLoading(false);
      toast.success("Registration successful! Please log in.");
      navigate("/login");
  };
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

<Button
  type="submit"
  className="w-100"
  disabled={loading}
>
  {loading ? (
    <>
      <Spinner animation="border" size="sm" className="me-2" />
      Loading...
    </>
  ) : (
    "Register"
  )}
</Button>
<div className="text-center mt-3">
  <span>Already have an account? </span>
  <Link to="/login" className="text-primary fw-bold text-decoration-none">
    Login
  </Link>
</div>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegistration;