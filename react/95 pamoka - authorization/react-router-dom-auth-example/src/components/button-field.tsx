import React from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  PaperProps,
  TextFieldProps,
  ButtonProps,
  useTheme,
} from '@mui/material';

type ButtonFieldProps = {
  btnText?: string,
  label?: string,
  name?: string,
  PaperProps?: PaperProps,
  TextFieldProps?: TextFieldProps,
  ButtonProps?: ButtonProps,
}

const defaultButtonProps: ButtonProps = {
  type: "submit",
  variant: "contained",
  color: "primary",
  sx: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
}

const ButtonField: React.FC<ButtonFieldProps> = ({
  btnText = "submit",
  label = "Field label",
  name = "unonymous",
  PaperProps,
  TextFieldProps,
  ButtonProps,
}) => {
  const theme = useTheme();

  let finalButtonProps = defaultButtonProps;
  if (ButtonProps) {
    let { sx } = ButtonProps;

    if (sx) {
      if (typeof sx === 'function') {
        sx = sx(theme);
      }
    } else {
      sx = {};
    }

    const finalSx = {
      ...defaultButtonProps.sx,
      ...sx
    }

    finalButtonProps = {
      ...defaultButtonProps,
      ...ButtonProps,
      sx: finalSx
    }
  }

  return (
    <Paper sx={{ display: 'inline-flex' }} elevation={3} {...PaperProps}>
      <Box sx={{ p: 1 }}>
        <TextField
          label={label}
          name={name}
          size="small"
          variant="standard"
          InputProps={{
            sx: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }
          }}
          {...TextFieldProps}
        />
      </Box>
      <Button {...finalButtonProps}>
        {btnText}
      </Button>
    </Paper>
  )
}

export default ButtonField;