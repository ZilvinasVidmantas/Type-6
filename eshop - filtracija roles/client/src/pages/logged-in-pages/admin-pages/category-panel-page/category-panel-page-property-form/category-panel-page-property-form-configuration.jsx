import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const emptyCollectionRef = 'Nauja kolekcija';

const propertyTypeOptions = ['range', 'options', 'autocomplete'];

const typeRequiresCollection = (type) => ['options', 'autocomplete'].includes(type);

const isNewCollection = (collection) => collection === emptyCollectionRef;

const CategoryPanelPagePropertyFormConfiguration = ({
  collections,
  id,
  name,
  type,
  collectionRef,
  collectionName,
  errors,
  touched,
  onBlur,
  onKeyChange,
  onDelete,
}) => {
  const [collectionOptions, setCollectionOptions] = useState([emptyCollectionRef]);
  const initLoad = useRef(true);

  useEffect(() => {
    setCollectionOptions([emptyCollectionRef, ...collections]);
    initLoad.current = false;
  }, [collections]);

  if (initLoad.current) {
    return <Box />;
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Savybės pavadinimas"
        name="name"
        value={name}
        onChange={(e) => onKeyChange(id, 'name', e.target.value)}
        onBlur={onBlur}
        error={touched && touched.name && !!errors && !!errors.name}
        helperText={touched && touched.name && !!errors && errors.name}
      />
      <TextField
        label="Savybės filtro tipas"
        select
        inputProps={{
          sx: { width: 150 },
        }}
        name="type"
        value={type}
        onChange={(_, { props: { value } }) => onKeyChange(id, 'type', value)}
        onBlur={onBlur}
        error={touched && touched.type && !!errors && !!errors.type}
        helperText={touched && touched.type && !!errors && errors.type}
      >
        {propertyTypeOptions.map((x) => (
          <MenuItem key={x} value={x}>{x}</MenuItem>
        ))}
      </TextField>
      {
        typeRequiresCollection(type) && (
          <>
            <TextField
              label="Pasirinkite kolekcija"
              select
              inputProps={{
                sx: { width: 150 },
              }}
              name="collectionRef"
              value={collectionRef}
              onChange={(_, { props: { value } }) => onKeyChange(id, 'collectionRef', value)}
              onBlur={onBlur}
              error={touched && touched.collectionRef && !!errors && !!errors.collectionRef}
              helperText={touched && touched.collectionRef && !!errors && errors.collectionRef}
            >
              {collectionOptions.map((x) => (
                <MenuItem key={x} value={x}>{x}</MenuItem>
              ))}
            </TextField>
            {
              isNewCollection(collectionRef) && (
                <TextField
                  label="Nauja kolekcija"
                  name="collectionName"
                  value={collectionName}
                  onChange={(e) => onKeyChange(id, 'collectionName', e.target.value)}
                  onBlur={onBlur}
                  error={touched && touched.collectionName && !!errors && !!errors.collectionName}
                  helperText={
                    touched && touched.collectionName && !!errors && errors.collectionName
                  }
                />
              )
            }
          </>
        )
      }
      <IconButton
        color="error"
        sx={{ alignSelf: 'center' }}
        size="small"
        onClick={() => onDelete(id)}
      >
        <DeleteIcon sx={{ fontSize: 25 }} />
      </IconButton>
    </Box>
  );
};

export default CategoryPanelPagePropertyFormConfiguration;
