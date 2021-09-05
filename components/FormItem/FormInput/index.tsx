import React from 'react';
import { Input, InputProps } from 'antd';

type FormInputProps = InputProps & {
  enterButton?: any;
};

function FormInput({ ...props }: FormInputProps) {
  return <Input {...props} />;
}

export default FormInput;
