require('dotenv').config();
const {MONGO_USER, MONGO_PASS, MONGO_HOST} = process.env
module.exports = {
    databases: {
        mongodb: {
            connectionString: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/?retryWrites=true&w=majority`
        }
    }
}