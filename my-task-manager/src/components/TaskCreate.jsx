
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Helper from './../utility/Helper';
import { Link } from 'react-router-dom';

const TaskCreate = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4 fw-bold text-primary">
                Create New Task
              </h3>

              <Form>
                {/* Title */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Task Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter task title"
                    className="py-2"
                  />
                </Form.Group>

                {/* Description */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Task Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter task description"
                    className="py-2"
                  />
                </Form.Group>

                {/* Button */}
                <div className="d-grid">

{
  Helper.islogin() ? (
    <button className="btn btn-success" disabled>
      Create Task
    </button>
  ) : (
    <Link to="/registration" className="btn btn-success">
      Create Task
    </Link>
  )
}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskCreate;