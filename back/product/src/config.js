const DEFAULT_PORT = 3012;
const DEFAULT_MONGODB_URI = 'mongodb://localhost:27017/product';

export default {
  port: process.env.APPLICATION_PORT || DEFAULT_PORT,
  mongodbUri: process.env.MONGODB_URI || DEFAULT_MONGODB_URI,
};
