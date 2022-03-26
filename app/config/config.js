const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  mongoDbUrl:process.env.MONGO_DB_URL,
  port: process.env.PORT
};
