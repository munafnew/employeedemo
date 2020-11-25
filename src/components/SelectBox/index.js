import React from "react";
import { Select, Form } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

function SelectEmployee({ dafulatValue, options, label, ...props }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Form.Item label={label}>
        <Select
          labelInValue
          style={{ width: 200 }}
          defaultValue={{ value: dafulatValue }}
          {...props}
        >
          {options.map((e) => (
            <Option key={e.id} value={e.id}>
              {e.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
}

export default SelectEmployee;
