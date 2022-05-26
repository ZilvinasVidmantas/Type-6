/* eslint-disable */
import React, { useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  TextField,
  MenuItem,
  Grid,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useFormik } from 'formik';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategories,
  categoriesSelector,
} from '../../../../store/categories';
import {
  fetchCollections,
  collectionsSelector,
} from '../../../../store/collections';
import {
  createProduct,
  productSelector,
  resetProduct,
  fetchProduct,
  updateProduct,
} from '../../../../store/product';
import FileUploadField from '../../../../components/file-upload-field';
import validationSchema from './validation-schema';

let initialValues = {
  category: '',
  images: [],
  properties: [],
};

const ProductFormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const collections = useSelector(collectionsSelector);
  const product = useSelector(productSelector);

  const onSubmit = ({ category, images, properties }) => {
    const formData = new FormData();
    formData.append('category', category);
    properties.forEach(({ name, value }) => {
      formData.append(name, value);
    });
    if (product) {
      // Update
      images.forEach(({ file, src }) => {
        if (file) {
          formData.append('images', file);
        } else {
          formData.append('oldImages', src);
        }
      });
      dispatch(updateProduct({
        id: product.id,
        formData,
      }));
    } else {
      // Create
      images.forEach(({ file }) => {
        formData.append('images', file);
      });
      dispatch(createProduct(formData));
    }
  };

  const {
    values,
    errors,
    dirty,
    isValid,
    handleSubmit,
    setFieldValue,
    setValues,
    setErrors,
    setTouched,
  } = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit,
  });

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const category = categories.find((x) => x.id === categoryId);
    const properties = category.properties.map((prop) => {
      const formattedProp = { ...prop };
      if (formattedProp.type !== 'range') {
        formattedProp.data = collections.find((c) => c.title === prop.collection).data;
      }
      formattedProp.value = '';
      return formattedProp;
    });
    setValues({
      ...values,
      category: categoryId,
      properties,
    });
  };

  const handleImageChange = (newImages) => {
    setFieldValue('images', newImages);
  };

  const handlePropertyChange = (name, value) => {
    setFieldValue('properties', values.properties.map((x) => (x.name === name
      ? { ...x, value }
      : x)));
  };

  const handleResetProduct = () => {
    dispatch(resetProduct());
    initialValues = {
      category: '',
      images: [],
      properties: [],
    };
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  useEffect(() => {
    if (categories.length > 0 && collections.length > 0 && location.state) {
      dispatch(fetchProduct(location.state.id));
    }
  }, [categories, collections]);

  useEffect(() => {
    if (product) {
      const {
        category: categoryId,
        images,
        ...props
      } = product;
      const category = categories.find((x) => x.id === categoryId);
      const properties = category.properties.map((prop) => {
        const formattedProp = { ...prop };
        if (formattedProp.type !== 'range') {
          formattedProp.data = collections.find((c) => c.title === prop.collection).data;
        }
        formattedProp.value = props[prop.name];
        return formattedProp;
      });
      const productFormData = {
        category: product.category,
        images: product.images.map((x) => ({
          src: x,
        })),
        properties,
      };
      initialValues = productFormData;
      setValues(initialValues, true);
    }
  }, [product]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCollections());

    return () => {
      dispatch(resetProduct());
      initialValues = {
        category: '',
        images: [],
        properties: [],
      };
    };
  }, []);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <Typography variant="h2" sx={{ mb: 3 }}>
        {`${product ? 'Atnaujinti' : 'Kurti naują'} produktą`}
      </Typography>
      <Grid container columnSpacing={4} component="form" onSubmit={handleSubmit}>
        <Grid item xs={7}>

          <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 3,
          }}
          >
            <TextField
              label="Pasirinkite kategoriją"
              select
              fullWidth
              name="category"
              value={values.category}
              onChange={handleCategoryChange}
              error={!!errors.category}
              helperText={errors.category}
            >
              {categories.map((x) => (
                <MenuItem key={x.id} value={x.id}>{x.title}</MenuItem>
              ))}
            </TextField>
            <Divider textAlign="left">Produkto savybės</Divider>
            {values.properties.length > 0 && values.properties.map((x, i) => (
              <TextField
                key={x.name}
                label={x.name}
                type={x.type === 'range' ? 'number' : 'text'}
                select={x.type !== 'range'}
                name={`properties[${i}]`}
                onChange={(e) => handlePropertyChange(x.name, e.target.value)}
                value={x.value}
                error={!!errors.properties && !!errors.properties[i]}
                helperText={
                  !!errors.properties && errors.properties[i] && errors.properties[i].value
                }
              >
                {x.type === 'range' ? null : x.data.map((d) => (
                  <MenuItem key={d.id} value={d.id}>{d.title}</MenuItem>
                ))}
              </TextField>
            ))}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ alignSelf: 'center' }}
              size="large"
              disabled={!dirty || !isValid}
            >
              {product ? 'Atnaujinti' : 'Kurti'}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{
            p: 2,
            mb: 0,
            border: errors.images ? 1 : 'none',
            borderColor: 'error.main',
          }}
          >
            <FileUploadField
              imgDataArr={values.images}
              onChange={handleImageChange}
              sx={{
                width: '100%',
              }}
            />
            {errors.images && (
              <Typography color="error">{errors.images}</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      {product && (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mb: 4, fontSize: 22, mt: 3 }}
          onClick={handleResetProduct}
        >
          Kurti naują produktą
          <AddCircleIcon sx={{ fontSize: 32, ml: 2 }} />
        </Button>
      )}
    </Box>
  );
};

export default ProductFormPage;
