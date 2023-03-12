import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { firstName, lastName, email } = user;

  useEffect(() => {
    loadUsers();
  }, []);

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employee/update/${id}`, user);
    navigate("/");
  };

  const loadUsers = async () => {
    const response = await axios.get(
      `http://localhost:8080/employee/find/${id}`
    );
    setUser(response.data);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditEmployee;
