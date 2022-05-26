import React, { useRef, useEffect } from 'react';
import {
  Box,
  styled,
  Fab,
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import UserService from '../../../services/user-service';

const mdFixedPortion = 200;

const ImgContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  height: '65vw',
  width: '65vw',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    height: 220,
    width: 220,
    marginLeft: theme.spacing(2),
    marginRight: 'initial',
    marginTop: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    height: `calc(${mdFixedPortion}px + 10vw)`,
    width: `calc(${mdFixedPortion}px + 10vw)`,
  },
  [theme.breakpoints.up('lg')]: {
    height: mdFixedPortion + 0.1 * theme.breakpoints.values.lg,
    width: mdFixedPortion + 0.1 * theme.breakpoints.values.lg,
  },
}));

const Img = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'cover',
  borderRadius: '50%',
});

const calcOffset = (image, imgIcon) => {
  const radius = image.offsetWidth / 2;
  const imageDimension = imgIcon.offsetWidth;

  return radius * (1 - 1 / (2 ** (1 / 2))) - imageDimension / 2.3;
};

const ProfilePageImage = ({ imgSrc }) => {
  const imageRef = useRef(null);
  const imgIconRef = useRef(null);
  const imgUploadRef = useRef(null);

  const handleUploadImgClick = () => {
    const imgUpload = imgUploadRef.current;
    imgUpload.click();
  };

  const handleUploadImgLoaded = async () => {
    const imgUpload = imgUploadRef.current;
    const [img] = imgUpload.files;
    await UserService.uploadImage(img);
  };

  useEffect(() => {
    const adjustImgIconOffset = () => {
      const offset = calcOffset(imageRef.current, imgIconRef.current);
      const imgIcon = imgIconRef.current;

      imgIcon.style.bottom = `${offset}px`;
      imgIcon.style.right = `${offset}px`;
    };
    adjustImgIconOffset();

    window.addEventListener('resize', adjustImgIconOffset);

    return () => {
      window.removeEventListener('resize', adjustImgIconOffset);
    };
  }, []);

  return (
    <ImgContainer>
      <Img src={imgSrc ?? '/no-image-person.jpg'} alt="user image" ref={imageRef} />
      <Fab
        color="primary"
        size="small"
        ref={imgIconRef}
        onClick={handleUploadImgClick}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
        }}
      >
        <AddAPhotoIcon fontSize="small" />
      </Fab>
      <input type="file" accept=".png, .jpg, .jpeg" hidden ref={imgUploadRef} onChange={handleUploadImgLoaded} />
    </ImgContainer>
  );
};

export default ProfilePageImage;
