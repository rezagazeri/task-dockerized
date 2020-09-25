import dotenv from 'dotenv';

import App from "./app";

dotenv.config({
  path: '../config.env'
});


new App();