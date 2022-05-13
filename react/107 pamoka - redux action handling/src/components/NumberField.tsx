import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export type NumberFieldProps = Omit<TextFieldProps, 'type' | 'inputProps'>;

// įgalinti min, max vertes su useState
// nustatyti default inputProp.sx, vietoj to, kad išmesti visą tipą

const NumberField: React.FC<NumberFieldProps> = (props) => (
  <TextField
    type="number"
    inputProps={{
      sx: {
        height: '100%',
        '&[type=number]': {
          MozAppearance: 'textfield',
        },
        '&::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '&::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
      },
    }}
    {...props}
  />
);

export default NumberField;
