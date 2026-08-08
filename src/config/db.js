const mongoose = require("mongoose")



function connectToDB() {

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:");
        console.error(error.message);
    });

}


module.exports = connectToDB