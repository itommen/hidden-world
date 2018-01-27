import { getCountries } from 'countries-cities';

import db from '../../config/mongoose';

const RelevantCountry = db.model('RelevantCountry');

export async function getAllCountries() {
  const [all, relevant] = await Promise.all([getCountries(), RelevantCountry.find()]);
  return {
    all,
    relevant: relevant.map(x => x.name)
  };
}

export async function add({ body: { countries } }) {
  await RelevantCountry.create(countries.map(name => ({
    name
  })));
}

export async function remove({ body: { countries } }) {
  await RelevantCountry.remove({
    name: {
      $in: countries
    }
  });
}
