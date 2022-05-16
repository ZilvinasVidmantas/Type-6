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
  const [fieldValue, setFieldValue] = useState<number | string>(value ?? 0);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueStr = e.target.value;
    if (valueStr === '') {
      setFieldValue(valueStr);
    } else {
      const newAmount: number = Math.floor(Number(valueStr));
      const numericValue: number = max && newAmount > max ? max : newAmount;

      setFieldValue(numericValue);
      if (onChange) onChange(e, numericValue);
    }
  };

  const handleTextFieldBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    const numericValue: number = min && newAmount < min ? min : newAmount;

    setFieldValue(numericValue);
    if (onBlur) onBlur(e, numericValue);
  };

  useEffect(() => {
    setFieldValue(value ?? 0);
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
        value={fieldValue}
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
          onClick={() => setFieldValue(Number(fieldValue) + 1)}
          disabled={disabled || Boolean(max && fieldValue >= max)}
          disableElevation
        >
          +
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={buttonSx}
          onClick={() => setFieldValue(Number(fieldValue) - 1)}
          disabled={disabled || Boolean(min && fieldValue <= min)}
          disableElevation
        >
          -
        </Button>
      </Box>
    </Box>
  );
};

export default NumberField;
