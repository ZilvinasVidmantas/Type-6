import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Typography,
  Box,
  Paper,
  IconButton,
  Button,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import validationSchema from './validation-schema';
import CategoryPanelPagePropertyFormConfiguration, { emptyCollectionRef } from './category-panel-page-property-form-configuration';

let idCounter = 0;

const formatPropertyData = ({ name, type, collection } = {}) => {
  idCounter += 1;

  return {
    id: String(idCounter),
    name: name ?? '',
    type: type ?? 'range',
    collectionRef: collection ?? emptyCollectionRef,
    collectionName: '',
  };
};

const formatProperty = ({
  name, type, collectionRef, collectionName,
}) => {
  const formattedProperty = { name, type };
  if (type !== 'range') {
    if (collectionRef === emptyCollectionRef) {
      formattedProperty.collection = collectionName;
    } else {
      formattedProperty.collection = collectionRef;
    }
  }

  return formattedProperty;
};

let initialValues = {
  propertiesData: [formatPropertyData()],
};

const CategoryPanelPagePropertyForm = ({ collections, properties, onSubmit }) => {
  const onFormSubmit = ({ propertiesData }) => {
    const pendingProperties = propertiesData.map(formatProperty);
    onSubmit(pendingProperties);
  };

  const {
    values: { propertiesData },
    dirty,
    errors,
    touched,
    isValid,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onFormSubmit,
    enableReinitialize: true,
  });

  const addProperty = () => {
    setFieldValue(
      'propertiesData',
      [
        ...propertiesData,
        formatPropertyData(),
      ],
    );
  };

  const deleteProperty = (id) => {
    setFieldValue(
      'propertiesData',
      propertiesData.filter((x) => x.id !== id),
    );
  };

  const changePropertyKey = (id, key, value) => {
    setFieldValue(
      'propertiesData',
      propertiesData.map((x) => (x.id === id
        ? { ...x, [key]: value }
        : x)),
    );
  };

  const handleProertyBlur = (index, { target: { name } }) => {
    const touchedProperties = touched.propertiesData ?? {};
    touchedProperties[index] = touchedProperties[index] ?? {};
    touchedProperties[index][name] = true;
    setFieldTouched('propertiesData', touchedProperties);
  };

  useEffect(() => {
    const formattedProperties = properties.map(formatPropertyData);
    if (formattedProperties.length > 0) {
      initialValues = {
        propertiesData: [...formattedProperties],
      };
      setFieldValue(
        'propertiesData',
        formattedProperties,
      );
    }
  }, [properties]);

  return (
    <Paper component="form" sx={{ p: 3, mt: 2 }} onSubmit={handleSubmit}>
      <Typography sx={{ fontSize: 22, mb: 3 }}>
        Kategorijos savybių konfigūracija
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {
          propertiesData.map((propertyData, i) => (
            <CategoryPanelPagePropertyFormConfiguration
              key={propertyData.id}
              collections={collections}
              {...propertyData}
              errors={errors.propertiesData && errors.propertiesData[i]}
              touched={touched.propertiesData && touched.propertiesData[i]}
              onKeyChange={changePropertyKey}
              onDelete={deleteProperty}
              onBlur={(e) => handleProertyBlur(i, e)}
            />
          ))
        }
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton
          size="large"
          color="secondary"
          onClick={addProperty}
        >
          <AddCircleIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!dirty || !isValid}
        >
          Atnaujinti savybes
        </Button>
      </Box>
    </Paper>
  );
};

export default CategoryPanelPagePropertyForm;
