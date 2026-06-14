import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Helper from "./../utility/Helper";
import toast from "react-hot-toast";

const TaskStore = () => {

  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: ""
  });

  const token = localStorage.getItem("token");


  

  // GET TASKS
  const loadTasks = async () => {
    try {
      const res = await axios.get(
        `${Helper.BASE_API()}/taskread`,
        {
          headers: { token }
        }
      );

      if (res.data.status === "success") {
        setTasks(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // START EDIT
  const startEdit = (task) => {
    setEditId(task._id);
    setFormData({
      title: task.title,
      description: task.description,
      status: task.status
    });
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // UPDATE TASK
const updateTask = async (id) => {
  try {
    await axios.put(
      `${Helper.BASE_API()}/updateTask/${id}`,
      formData,
      {
        headers: {
          token: localStorage.getItem("token")
        }
      }
    );

    alert("Task Updated");
    setEditId(null);
    loadTasks(); // আবার reload করে show করবে

  } catch (error) {
    console.log(error);
    toast.error("Update Failed");
  }
};

  // STATUS TOGGLE QUICK
  const toggleStatus = async (task) => {
    try {
      const newStatus = task.status === "pending" ? "completed" : "pending";

      const res = await axios.put(
        `${Helper.BASE_API()}/updateTask/${task._id}`,
        { ...task, status: newStatus },
        {
          headers: { token }
        }
      );

      if (res.data.status === "success") {
        toast.success("Status Updated");
        loadTasks();
      }

    } catch (error) {
      toast.error("Status Update Failed");
    }
  };

  return (
    <Container className="mt-4">

      <h3 className="text-center fw-bold text-primary mb-4">
        Your Task Board
      </h3>

      <Row>
        {tasks.length === 0 ? (
          <h5 className="text-center text-danger">
            No Tasks Found
          </h5>
        ) : (
          tasks.map((task) => (
            <Col md={6} className="mb-3" key={task._id}>

              <Card className="shadow border-0 rounded-4 p-3">

                {/* EDIT MODE */}
                {editId === task._id ? (
                  <>
                    <Form.Control
                      className="mb-2"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />

                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="mb-2"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />

                    <Form.Select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="mb-2"
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </Form.Select>

                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => updateTask(task._id)}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <h5 className="fw-bold">{task.title}</h5>
                    <p className="text-muted">{task.description}</p>

                    <span
                      className={`badge ${
                        task.status === "completed"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {task.status}
                    </span>

                    <div className="mt-3 d-flex gap-2">

                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => startEdit(task)}
                      >
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant={
                          task.status === "pending"
                            ? "success"
                            : "warning"
                        }
                        onClick={() => toggleStatus(task)}
                      >
                        {task.status === "pending"
                          ? "Mark Complete"
                          : "Reopen"}
                      </Button>

                    </div>
                  </>
                )}

              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default TaskStore;