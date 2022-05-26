import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const { originalname} = file;
    const ext = originalname.slice(originalname.indexOf('.'));
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const imgUploadMiddleware = multer({ storage });

export default imgUploadMiddleware;