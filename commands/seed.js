import seeder from 'mongoose-seed';

import usersData from '../server/modals/User/seed';

// TODO: should get the database from envar
seeder.connect('mongodb://localhost/hidden-world', function () {
  seeder.loadModels([
    './server/modals/User/index.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['User'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels([usersData], () => {
      seeder.disconnect();
    });
  });
});
