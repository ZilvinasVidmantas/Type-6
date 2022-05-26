import React from 'react';
import {
  Paper,
  TextField,
  Button,
} from '@mui/material';

const CollectionPanelPageForm = React.forwardRef(({
  title,
  editMode,
  setTitle,
  onSubmit,
}, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '') {
      onSubmit();
      setTitle('');
    }
  };

  return (
    <Paper component="form" sx={{ display: 'flex' }} onSubmit={handleSubmit}>
      <TextField
        label="title"
        size="small"
        sx={{ flexGrow: 1 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        color={editMode ? 'secondary' : 'primary'}
        inputRef={ref}
      />
      <Button variant="contained" color={editMode ? 'secondary' : 'primary'} type="submit">
        {editMode ? 'Update' : 'Add'}
      </Button>
    </Paper>
  );
});

export default CollectionPanelPageForm;
