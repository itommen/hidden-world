import mongoose from 'mongoose';

mongoose.Promise = Promise;

// TODO: should get connection string from env var
const db = mongoose.createConnection('mongodb://localhost/hidden-world');

db.on('error', () => {
  console.log('mongo failed to load!');
});

db.on('open', () => {
  console.log('mongo is ready');
});

export default db;
