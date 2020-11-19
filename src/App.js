import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "simple-react-loader";
import SelectEmployee from "./components/selectEmployee/selectEmployee";
import EmployeeDetails from "./components/employeeDetails/employeeDetails";
import "./App.css";

function App() {
  const { loading, error } = useSelector((state) => state.employees);

  return (
    <div className="App">
      <SelectEmployee />
      <EmployeeDetails />
    </div>
  );
}

export default App;
