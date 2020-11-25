import React from "react";
import { Form } from "antd";

function EmployeeDetails({ name, onFinish, children }) {
  const [form] = Form.useForm();

  return (
    <div>
      <Form form={form} name={name} onFinish={onFinish}>
        {children}
      </Form>
    </div>
  );
}

export default EmployeeDetails;
