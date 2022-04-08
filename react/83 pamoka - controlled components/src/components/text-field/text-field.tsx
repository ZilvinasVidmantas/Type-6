import React, { useState, InputHTMLAttributes } from 'react';
import { v4 as createId } from 'uuid';
import { TextFieldWrapper, TextFieldInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type TextFieldProps = InputProps & {
  label: string,
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  type = 'text',
  ...inputProps
}) => {
  const [id] = useState(createId());

  return (
    <TextFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <TextFieldInput
        id={id}
        type={type}
        {...inputProps}
      />
    </TextFieldWrapper>
  );
};

export default TextField;
