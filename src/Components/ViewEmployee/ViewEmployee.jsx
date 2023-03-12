import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewEmployee.scss";
function ViewEmployee() {
  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    getEmployee(id);
  }, []);

  const getEmployee = async (id) => {
    const { data } = await axios.get(
      `http://localhost:8080/employee/find/${id}`
    );
    setUser(data);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">User Details</h2>

            <div className="card">
              <div className="card-header">
                <h5>Details of user id : {user.id}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Name:</b>
                    {user.firstName}
                  </li>
                  <li className="list-group-item">
                    <b>UserName:</b>
                    {user.lastName}
                  </li>
                  <li className="list-group-item">
                    <b>Email:</b>
                    {user.email}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-danger my-2" to={"/"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ViewEmployee;
