import React, { useState } from 'react';
import { v4 as createId } from 'uuid';
import { TextFieldWrapper, TextFieldInput } from './styles';

type TextFieldProps = {
  label: string;
};

const TextField: React.FC<TextFieldProps> = ({ label }) => {
  const [id] = useState(createId());

  return (
    <TextFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <TextFieldInput type="text" id={id} />
    </TextFieldWrapper>
  );
};

export default TextField;
