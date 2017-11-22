import { getCountries } from 'countries-cities';
import { noop } from 'lodash';

import db from '../../config/mongoose';

const RelevantCountry = db.model('RelevantCountry');

export function getAllCountries() {
  return Promise.all([getCountries(), RelevantCountry.find()])
    .then(([all, relevant]) => ({
      all,
      relevant: relevant.map(x => x.name)
    }));
}

export function add({ body: { countries } }) {
  return RelevantCountry.create(countries.map(name => ({
    name
  })))
    .then(noop);
}

export function remove({ body: { countries } }) {
  return RelevantCountry.remove({
    name: {
      $in: countries
    }
  })
    .then(noop);
}
