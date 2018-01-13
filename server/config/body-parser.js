import bodyParser from 'body-parser';
import unless from 'express-unless';

const json = bodyParser.json();
json.unless = unless;

const urlencoded = bodyParser.urlencoded({ extended: true });
urlencoded.unless = unless;

const isMultipartForm = req => req.is('multipart/form-data');

export default app => {
  app.use(json.unless(isMultipartForm));
  app.use(urlencoded);
};
