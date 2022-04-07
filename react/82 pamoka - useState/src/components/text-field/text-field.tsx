import React, { useState } from 'react';
import { v4 as createId } from 'uuid';
import { TextFieldWrapper, TextFieldInput } from './styles';

const TextField: React.FC = () => {
  const [id] = useState(createId());

  return (
    <TextFieldWrapper>
      <label htmlFor={id}>Field name</label>
      <TextFieldInput type="text" id={id} />
    </TextFieldWrapper>
  );
};

export default TextField;
