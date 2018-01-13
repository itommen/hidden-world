import user from './user';
import countries from './country';
import tripPart from './trip-part';

export default app => {
  app.use('/api/user', user);
  app.use('/api/countries', countries);
  app.use('/api/tripPart', tripPart);
};
