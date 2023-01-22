const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //mongoDB connecion string
        const con = await mongoose.connect('mongodb://localhost:27017/BD_evolue',
            { useNewUrlParser: true },
            { useUnifiedTopology: true },
            { useFindAndModify: false },
            { userCreateindex: true },
            { async: true });

        console.log('MongoDb conecting Sucessfuly!');

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;