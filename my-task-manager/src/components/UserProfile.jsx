import { Container, Card, Row, Col, Button, Badge } from "react-bootstrap";
import Helper from './../utility/Helper';
import { useEffect,useState } from "react";
import  axios  from 'axios';
import { Link } from "react-router-dom";
const UserProfilePage = () => {
  const [user, setUser] = useState({});
 const token=localStorage.getItem("token");
const TheOtp=localStorage.getItem("otp")

  const userShow = async ()=>{
    try {
      const users = await axios.get(
        `${Helper.BASE_API()}/profileDetails`,
        {
          headers: { token }
        }
      );

        setUser(users.data.data[0]);
        console.log("FULL RESPONSE:", users.data);

}catch(error){
        console.log("ERROR:", error.response || error);
}
  }
    useEffect(()=>{
    userShow();
     },[])


    return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow border-0 rounded-4">
            <Card.Body className="p-4">

              <div className="text-center mb-4">
                <h2 className="fw-bold">My Profile</h2>
                <p className="text-muted mb-0">
                  Manage your account information
                </p>
              </div>

              <hr />

              <div className="mb-3">
                <strong>First Name:</strong>
                <p className="mb-1">{user?.firstName}</p>
              </div>

              <div className="mb-3">
                <strong>Last Name:</strong>
                <p className="mb-0">{user?.lastName}</p>
              </div>

              <div className="mb-3">
                <strong>Email:</strong>
                <div className="d-flex align-items-center gap-2 mt-1">
                  <span>{user?.email}</span>
                  {TheOtp>0?(<Badge bg="success">Verified</Badge>):(<Badge bg="danger">Unverified</Badge>)}
                  

<Link
  to="/verify"
  className="btn btn-outline-primary btn-sm ms-2"
>
  Verify Email
</Link>
                </div>
              </div>

              <div className="mb-4">
                <strong>Mobile:</strong>
                <p className="mb-0">{user?.mobile}</p>
              </div>

<div className="d-grid mt-3">
  <Link
    to="/passwordreset"
    className="btn btn-outline-primary rounded-pill fw-semibold py-2"
  >
    Update Password →
  </Link>
</div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;