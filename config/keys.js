const dotenv = require('dotenv');
dotenv.config()

module.exports = {
    mongoURI: `mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds025772.mlab.com:25772/mern_shopping_list`
}