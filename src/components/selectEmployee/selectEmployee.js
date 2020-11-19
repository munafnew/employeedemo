import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "simple-react-loader";
import actions from "../../redux/employee/actions";
import { Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

function SelectEmployee() {
  const dispatch = useDispatch();
  const { loading, error, employees, selectedEmployeeDetail } = useSelector(
    (state) => state.employees
  );
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    dispatch(actions.getEmployeesDetail({ id: value.value }));
  }
  useEffect(() => {
    dispatch(actions.getEmployees());
  }, []);

  if (loading || error) {
    return (
      <div className="centerScreen">
        <Loader showLoader={true} type="pulse" />;
      </div>
    );
  }
  if (selectedEmployeeDetail) {
    return (
      <div style={{ marginBottom: "20px" }}>
        {console.log(selectedEmployeeDetail["name"])}
        <Select
          labelInValue
          defaultValue={{ value: selectedEmployeeDetail["name"] }}
          style={{ width: 200 }}
          onChange={handleChange}
        >
          {employees.map((e) => (
            <Option value={e.id}>{e.name}</Option>
          ))}
        </Select>
      </div>
    );
  }
  return (
    <div className="centerScreen">
      No Employee Data found. something went wrong, please reload.
    </div>
  );
}

export default SelectEmployee;
