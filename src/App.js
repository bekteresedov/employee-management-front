import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import EditEmployee from "./Components/EditEmployee/EditEmployee";
import ViewEmployee from "./Components/ViewEmployee/ViewEmployee";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddEmployee />} />
          <Route exact path="/viewuser/:id" element={<ViewEmployee />} />
          <Route exact path="/edituser/:id" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
