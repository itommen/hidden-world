import db from '../../config/mongoose';

import convert from '../common/convert';
import { byId } from '../common/validated-query';
import ensure from '../common/validate';
import validation from '~/common/validators/tripPart';

const TripPart = db.model('TripPart');

const mimizedProperties = ['id', 'name', 'days', 'start', 'end', 'flight'];
const fullProperties = [
  ...mimizedProperties,
  'description',
  { orignalName: 'images', newName: 'savedImages' },
  'hotels'
];

export async function getAll() {
  return (await TripPart.find()).map(tripPart => convert(tripPart, mimizedProperties));
}

export async function fetch({ params: { id } }) {
  const tripPart = await byId(TripPart, id);
  return convert(tripPart, fullProperties);
}

export async function insert({ body, files }) {
  ensure(body, validation);

  const tripPart = await new TripPart({
    ...body,
    images: files.map(({ filename }) => filename)
  }).save();

  return convert(tripPart, mimizedProperties);
}

export async function update({ body, files }) {
  ensure(body, validation);

  const tripPart = await TripPart.findById(body.id).exec();

  tripPart.$set({
    ...body,
    images: tripPart.images.concat(files.map(({ filename }) => filename))
  });

  await tripPart.save();
}

export async function remove({ params: { id } }) {
  await TripPart.findByIdAndRemove(id);
}
