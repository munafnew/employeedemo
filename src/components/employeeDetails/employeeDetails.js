import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Select } from "antd";
import { Loader } from "simple-react-loader";
import actions from "../../redux/employee/actions";
import "antd/dist/antd.css";

function EmployeeDetails() {
  const dispatch = useDispatch();
  const { loading, selectedEmployeeDetail, selected } = useSelector(
    (state) => state.employees
  );

  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(actions.postEmployeeDetails({ values, id: selected }));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          {console.log(selectedEmployeeDetail)}
          <Form.Item name="Email" label="Email">
            <Input defaultValue={selectedEmployeeDetail.email} />
          </Form.Item>
          <Form.Item name="Company Name" label="Company Name">
            <Input
              defaultValue={
                selectedEmployeeDetail &&
                selectedEmployeeDetail["company"]["name"]
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}

export default EmployeeDetails;
