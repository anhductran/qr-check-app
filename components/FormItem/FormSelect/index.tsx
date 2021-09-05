import React from 'react';
import { Select } from 'antd';

type FormSelectProps = {
  options?: Array<{ name?: string; value?: string | any }>;
  defaultValue?: string | any;
};

const { Option } = Select;

function FormSelect({ options, ...props }: FormSelectProps) {
  return (
    <Select {...props}>
      {options?.map((option) => (
        <Option key={option?.value} value={option?.value}>
          {option?.name}
        </Option>
      ))}
    </Select>
  );
}

export default FormSelect;
