import mongoose from 'mongoose';

import users from '../server/modals/User/User.seed';
import durationTypes from '../server/modals/DurationType/DurationType.seed';

mongoose.connect('mongodb://localhost/hidden-world');

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', (err) => console.log('error! ' + err));
db.once('open', function () {
    Promise.all(saveAll(users), saveAll(durationTypes))
        .then(() => {
            console.log('seed completed');
            db.close();
        });
});

const saveAll = models => models.map(x => x.save());