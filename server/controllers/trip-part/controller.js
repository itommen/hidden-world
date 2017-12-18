import empty from 'http-reject-empty';

import { noop } from 'lodash';

import db from '../../config/mongoose';

import validate from '../common/validate';
import validation from '~/common/validators/tripPart';

const TripPart = db.model('TripPart');

const conertToMinimizeTripPart = ({ id, name, days, start, end, flight }) => ({
  id,
  name,
  start,
  end,
  flight,
  days
});

export function getAll() {
  return TripPart.find()
    .then(x => x.map(conertToMinimizeTripPart));
}

export function fetch({ params: { id } }) {
  return TripPart.findById(id)
    .then(empty);
}

export function insert({ body }) {
  return validate(body, validation)
    .then(() => new TripPart(body).save())
    .then(conertToMinimizeTripPart);
}

export function update({ body }) {
  return validate(body, validation)
    .then(() => TripPart.update({ _id: body.id }, { $set: body }))
    .then(noop);
}
