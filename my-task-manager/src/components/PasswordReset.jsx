import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import  axios  from 'axios';
import Helper from './../utility/Helper';
import { toast } from 'react-hot-toast';

const PasswordReset = () => {
  const [updatePass, setUpdatePass] = useState("");
  const email=localStorage.getItem("Email")
  const otp=localStorage.getItem("otp")

  const Changepass= async ()=>{
        
        if (!updatePass) {
    toast.error("Password Empty");
    return;
  }else{
    try{
            const newpass=await axios.get(`${Helper.BASE_API()}/verifypassword/${email}/${otp}/${updatePass}`)
        if(newpass.status==="fail"){
            
             toast.error("Update Password Fail")
        }else{
           toast.success("Update Password Successfully")
           
        }
    }catch(error){
       console.log(error)
    }

  }

  }

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4">Reset Password</h3>

              <div className="mb-4">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter new password"
                  value={updatePass}
                  onChange={(e) => setUpdatePass(e.target.value)}
                />
              </div>

              <Button onClick={Changepass} variant="primary" className="w-100">
                Update Password
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordReset;