import empty from 'http-reject-empty';

import { noop } from 'lodash';

import db from '../../config/mongoose';

import convert from '../common/convert';

import validate from '../common/validate';
import validation from '~/common/validators/tripPart';

const TripPart = db.model('TripPart');

const mimizedProperties = ['id', 'name', 'days', 'start', 'end', 'flight'];
const fullProperties = [
  ...mimizedProperties,
  'description',
  { orignalName: 'images', newName: 'savedImages' }
];

export function getAll() {
  return TripPart.find()
    .then(x => x.map(tripPart => convert(tripPart, mimizedProperties)));
}

export function fetch({ params: { id } }) {
  return TripPart.findById(id)
    .then(empty)
    .then(result => convert(result, fullProperties));
}

export function insert({ body, files }) {
  return validate(body, validation)
    .then(() => {
      body.images = files.map(({ filename }) => filename);
    })
    .then(() => new TripPart(body).save())
    .then(tripPart => convert(tripPart, mimizedProperties));
}

export function update({ body, files }) {
  return validate(body, validation)
    .then(() => TripPart.findById(body.id).exec())
    .then(tripPart => {
      const images = tripPart.images.concat(files.map(({ filename }) => filename));
      tripPart.$set({
        ...body,
        images
      });
      return tripPart.save();
    })
    .then(noop);
}
