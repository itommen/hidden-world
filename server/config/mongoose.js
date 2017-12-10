import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connection = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
const db = mongoose.createConnection(connection);
db.on('error', () => {
  console.log('mongo failed to load!');
});

db.on('open', () => {
  console.log('mongo is ready');
});

export default db;
