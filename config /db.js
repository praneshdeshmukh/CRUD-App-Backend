const mongoose = require('mongoose')

const connectToDb = async () => {
    // .then() .catch(()=>{})
    mongoose.connect(process.env.MONGO_URL)
    .then ((conn) => {
        console.log(`CONNECTION TO DB:  ${conn.connection.host}`)
    })    
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    }) 
}
// 
module.exports = connectToDb
