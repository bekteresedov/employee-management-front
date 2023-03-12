import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/employee/delete/${id}`);
  };

  const getEmployees = async () => {
    const { data } = await axios.get("http://localhost:8080/employee/all");
    setEmployee(data);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteEmployee(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
