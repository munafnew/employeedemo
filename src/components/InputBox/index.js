import React from "react";
import { Input, Form } from "antd";
import "antd/dist/antd.css";

function InputBox({ name, label, defaultValue, ...props }) {
  return (
    <Form.Item name={name} label={label}>
      <Input defaultValue={defaultValue} {...props} />
    </Form.Item>
  );
}

export default InputBox;
