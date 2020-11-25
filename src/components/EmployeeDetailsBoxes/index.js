import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AntdButton from "../AntdButton";
import InputBox from "../InputBox";
import AntdFormWraper from "../AntdFormWrapper";
import actions from "../../redux/employee/actions";
import "antd/dist/antd.css";

function EmployeeDetailsBoxes() {
  const dispatch = useDispatch();
  const { selectedEmployeeDetail, selected } = useSelector(
    (state) => state.employees
  );

  const onFinish = (values) => {
    dispatch(actions.postEmployeeDetails({ values, id: selected }));
  };

  return (
    <AntdFormWraper name="employee-details" onFinish={onFinish}>
      <InputBox
        name="Email"
        label="Email"
        defaultValue={selectedEmployeeDetail.email}
      />
      <InputBox
        name="Company Name"
        label="Company Name"
        defaultValue={selectedEmployeeDetail["company"]["name"]}
      />
      <AntdButton />
    </AntdFormWraper>
  );
}

export default EmployeeDetailsBoxes;
