import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Container, Card, Form, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import ButtonSpinner from "./ButtonSpinner";
import Helper from "./../utility/Helper";


const VerifyMail = () => {
  const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");

    try {
      setSubmitted(true);

      const res = await axios.get(
        `${Helper.BASE_API()}/RecoverVerifymail/${email}`
      );

      if (res.data.status === "success") {
        toast.success(res.data.message || "OTP sent successfully");
        localStorage.setItem("Email", email);
        navigate("/Otpverify")
      } else {
        toast.error("Request failed!");
        setSubmitted(false);
      }
    } catch (error) {
      console.log(error)
      
    }setSubmitted(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
      }}
    >
      <Container style={{ maxWidth: "420px" }}>
        <Card className="p-4 shadow border-0 rounded-4">
          <h3 className="text-center fw-bold mb-2">
            Verify Your Email
          </h3>

          <p className="text-center text-muted mb-4">
            Enter your email to receive OTP
          </p>

          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100"
              disabled={submitted}
            >
              {submitted ? <ButtonSpinner/> : "Send OTP"}
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default VerifyMail;