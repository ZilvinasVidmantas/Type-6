import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  TextFieldProps,
  Button,
} from '@mui/material';

export type NumberFieldProps = Omit<TextFieldProps, 'type' | 'value' | 'inputProps' | 'onChange' | 'onBlur'> & {
  min?: number,
  max?: number,
  value?: number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: number) => void,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>, value: number) => void,
};

const buttonSx = {
  p: 0,
  minWidth: 20,
  minHeight: 20,
  lineHeight: 'initial',
  flexGrow: 1,
};

const NumberField: React.FC<NumberFieldProps> = ({
  min,
  max,
  disabled,
  value,
  onChange,
  onBlur,
  ...props
}) => {
  const [amount, setAmount] = useState<number | string>(value ?? 0);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueStr = e.target.value;
    if (valueStr === '') {
      setAmount(valueStr);
    } else {
      const newAmount: number = Math.floor(Number(valueStr));
      let numericValue: number;
      if (max) {
        numericValue = newAmount > max ? max : newAmount;
      } else {
        numericValue = newAmount;
      }

      setAmount(numericValue);
      if (onChange) onChange(e, numericValue);
    }
  };

  const handleTextFieldBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    let numericValue: number = newAmount;
    if (min && newAmount < min) {
      numericValue = min;
    }
    if (max && newAmount > max) {
      numericValue = max;
    }
    setAmount(numericValue);
    if (onBlur) onBlur(e, numericValue);
  };

  useEffect(() => {
    if (value) {
      setAmount(value);
    }
  }, [value]);

  return (
    <Box sx={{ display: 'flex' }}>
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
        disabled={disabled}
        value={amount}
        onChange={handleTextFieldChange}
        onBlur={handleTextFieldBlur}
        {...props}
      />
      <Box sx={{
        display: 'flex', flexDirection: 'column', height: '100%',
      }}
      >
        <Button
          variant="contained"
          size="small"
          sx={buttonSx}
          disabled={disabled}
          disableElevation
        >
          +
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={buttonSx}
          disabled={disabled}
          disableElevation
        >
          -
        </Button>
      </Box>
    </Box>
  );
};

export default NumberField;
