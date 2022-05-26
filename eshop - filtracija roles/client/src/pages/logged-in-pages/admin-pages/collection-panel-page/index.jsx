import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
  CircularProgress,
  Alert,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CollectionPanelPageGrid from './collection-panel-page-grid';
import CollectionPanelPageForm from './collection-panel-page-form';
import {
  collectionErrorSelector,
  collectionSelector,
  fetchCollection,
  createCollectionItem,
  updateCollectionItem,
  deleteCollectionItem,
  deleteError,
} from '../../../../store/collections';

const CollectionPanelPage = () => {
  const titleInputRef = useRef(null);
  const [editedItemId, setEditedItemId] = useState(null);
  const [titleField, setTitleField] = useState('');
  const { state: { id } } = useLocation();
  const { data, title } = useSelector(collectionSelector(id)) ?? {};
  const error = useSelector(collectionErrorSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(createCollectionItem({
      collectionId: id,
      title: titleField,
    }));
  };

  const updateItem = () => {
    dispatch(updateCollectionItem({
      collectionId: id,
      itemId: editedItemId,
      title: titleField,
    }));
    setEditedItemId(null);
  };

  const deleteItem = (itemId) => {
    dispatch(deleteCollectionItem({
      collectionId: id,
      itemId,
    }));
  };

  const editItem = (itemId) => {
    if (itemId === editedItemId) {
      setEditedItemId(null);
      setTitleField('');
    } else {
      setEditedItemId(itemId);
      const editedItem = data.find((x) => x.id === itemId);
      setTitleField(editedItem.title);
      titleInputRef.current.focus();
    }
  };

  useEffect(() => {
    dispatch(fetchCollection(id));
  }, [id]);

  useEffect(() => () => {
    // ComponentWillUnmount
    dispatch(deleteError());
  }, []);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      {(!title || !data)
        ? (
          <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
            <CircularProgress size={100} />
          </Box>
        )
        : (
          <>
            <Typography
              element="h1"
              variant="h2"
              sx={{ textTransform: 'capitalize', mb: 3 }}
            >
              {title}
            </Typography>

            {error && (
              <Alert
                onClose={() => dispatch(deleteError())}
                color="error"
                sx={{ my: 2 }}
              >
                {error}
              </Alert>
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <CollectionPanelPageForm
                title={titleField}
                editMode={Boolean(editedItemId)}
                setTitle={setTitleField}
                onSubmit={editedItemId ? updateItem : addItem}
                ref={titleInputRef}
              />
              <CollectionPanelPageGrid
                data={data.map((x) => ({ ...x, edited: x.id === editedItemId }))}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            </Box>
          </>
        )}
    </Box>
  );
};

export default CollectionPanelPage;
