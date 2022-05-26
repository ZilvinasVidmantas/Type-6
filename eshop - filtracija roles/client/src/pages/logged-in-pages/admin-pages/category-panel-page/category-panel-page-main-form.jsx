import React, { useEffect } from 'react';
import {
  Typography,
  Button,
  TextField,
  Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import CategoryPanelPageIconSelect from './category-panel-page-icon-select';

let initialValues = {
  title: '',
  icon: '',
};

const CategoryPanelPageMainForm = ({ category, onSubmit }) => {
  const {
    values,
    dirty,
    handleSubmit,
    handleChange,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit,
  });

  useEffect(() => {
    if (category) {
      initialValues = {
        title: category.title,
        icon: category.icon,
      };
      setValues(initialValues);
    }
  }, [category]);

  const handleIconChange = (_, { props: { value } }) => {
    setFieldValue('icon', value);
  };

  return (
    <Paper
      component="form"
      sx={{
        width: 400,
        p: 3,
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 4,
      }}
      onSubmit={handleSubmit}
    >
      <Typography sx={{ fontSize: 22 }}>Pagrindinė kategorijos informacija </Typography>
      <TextField
        label="Pavadinimas"
        inputProps={{
          sx: { width: 350 },
        }}
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <CategoryPanelPageIconSelect
        value={values.icon}
        onChange={handleIconChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ width: 250, alignSelf: 'center' }}
        disabled={!dirty}
      >
        Išsaugoti pakitimus
      </Button>
    </Paper>
  );
};

export default CategoryPanelPageMainForm;
