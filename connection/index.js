const mongoose = require('mongoose');


mongoose.connect(`mongodb://127.0.0.1:27017/social-network-api`)
const db =  mongoose.connection;
db.on('error', (error) => {
    console.log(error)
})

module.exports = db;