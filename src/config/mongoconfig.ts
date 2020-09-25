/* eslint-disable prettier/prettier */
import { ConnectionOptions } from 'mongoose';

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE
} = process.env;

// export const MONGO_URI =`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
export const MONGO_URI= `mongodb://${MONGO_USERNAME}:${
   encodeURIComponent(MONGO_PASSWORD)
  }@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

// `mongodb://${MONGO_USERNAME}:${
//   encodeURIComponent(MONGO_PASSWORD)
// }@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
