import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Helper from './../utility/Helper';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const TaskCreate = () => {

const handleSubmit = async (e) => {
  e.preventDefault();

  const title = e.target.title.value.trim();
  const description = e.target.description.value.trim();

  if (!title || !description) {
    toast.error("Title and Description are required!");
    return;
  }

  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(
      `${Helper.BASE_API()}/createtask`,
      {
        title,
        description,
        status: "pending"
      },
      {
        headers: {
          token: token
        }
      }
    );

    if (res.data.status === "success") {
      toast.success("Task Created Successfully!");
      e.target.reset();
    } else {
      toast.error("Task Creation Failed!");
    }

  } catch (error) {
    console.log(error);
    toast.error("Something went wrong!");
  }
};

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4 fw-bold text-primary">
                Create New Task
              </h3>

              <Form onSubmit={handleSubmit}>
                {/* Title */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Task Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter task title"
                    className="py-2"
                    required
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
                    name="description"
                    placeholder="Enter task description"
                    className="py-2"
                    required
                  />
                </Form.Group>

                {/* Button */}
                <div className="d-grid">
                  {
                    Helper.islogin() ? (
                      <button type="submit" className="btn btn-success">
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