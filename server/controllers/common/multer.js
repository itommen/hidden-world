import multer from 'multer';

import uuid from 'uuid/v4';

import { deserialize } from '~/common/multipart-form';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${uuid()}${file.originalname.substr(file.originalname.lastIndexOf('.'))}`);
  }
});

const fileFilter = (req, file, cb) => {
  cb(null, file.mimetype.startsWith('image'));
};

const upload = multer({
  storage,
  fileFilter
});

export default name => [
  upload.array(name),
  (req, res, next) => {
    req.body = deserialize(req.body);
    next();
  }
];
