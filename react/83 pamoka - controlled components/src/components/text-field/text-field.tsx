import React, { useState } from 'react';
import { v4 as createId } from 'uuid';
import { TextFieldWrapper, TextFieldInput } from './styles';

type TextFieldProps = {
  label: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
};

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange }) => {
  const [id] = useState(createId());

  return (
    <TextFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <TextFieldInput
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
    </TextFieldWrapper>
  );
};

export default TextField;
