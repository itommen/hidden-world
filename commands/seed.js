import 'dotenv/config';
import seeder from 'mongoose-seed';

import usersData from '../server/modals/User/seed';
import relevantCountriesData from '../server/modals/RelevantCountry/seed';

seeder.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, function () {
  seeder.loadModels([
    './server/modals/User/index.js',
    './server/modals/RelevantCountry/index.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['User', 'RelevantCountry'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels([usersData, relevantCountriesData], () => {
      seeder.disconnect();
    });
  });
});
