import { useState } from "react";
import axios from "axios";
import Helper from "../utility/Helper";
import { toast } from 'react-hot-toast';
import {useNavigate} from "react-router-dom";

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }else{
        console.log("Form Data:", formData);
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${Helper.BASE_API()}/login`,
        formData
      );

  if (res.data.status === "success") {
      Helper.loginSet(res.data.token);
    toast.success("Login successful!");
    console.log(res.data);
    navigate("/"); // Redirect to dashboard on successful login
    window.location.reload();
  } else {
    toast.error(res.data.message || "Login failed!");
  }


    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.log("Login Error:", error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      
      <div className="card shadow-lg p-4 border-0" style={{ width: "380px", borderRadius: "15px" }}>
        
        <h3 className="text-center mb-4 fw-bold">Login</h3>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default UserLogin;