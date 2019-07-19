import mongoose from 'mongoose';
import config from '../config';

// Use native ES6 Promises
mongoose.Promise = global.Promise;

function initializeDb() {
  mongoose.connection
    .on('error', (error) => { console.error('MongoDB Connection error:', error); })
    .on('close', () => { console.log('Mongodb closed!'); })
    .once('open', () => { console.log('Mongodb connected!'); });

  mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
}

function disconnectDb() {
  mongoose.disconnect();
}
export default {
  initialize: initializeDb,
  disconnect: disconnectDb,
};
