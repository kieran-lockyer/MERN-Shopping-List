require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0-im0dw.mongodb.net/test?retryWrites=true&w=majority`,
  jwtSecret: `${process.env.JWT_SECRET}`,
};
