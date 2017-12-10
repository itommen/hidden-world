import empty from 'http-reject-empty';
import { noop, isEmpty } from 'lodash';

import db from '../../config/mongoose';

import validation from '~/common/validators/tripPart';

const TripPart = db.model('TripPart');

const conertToMinimizeTripPart = ({ id, name, days, start, end }) => ({
  id,
  name,
  start,
  end,
  days
});

export function getAll() {
  return TripPart.find()
    .then(x => x.map(conertToMinimizeTripPart));
}

export function insert({ body }) {
  const validationErrors = validation(body);
  if (!isEmpty(validationErrors)) {
    return Promise.reject(validationErrors);
  }

  return new TripPart(body).save()
    .then(conertToMinimizeTripPart);
}
