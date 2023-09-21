const mongoose = require("mongoose");

const url = "mongodb+srv://bot:bot@apibot.bubym.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url , {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("Conectado a MongoDB, GG"))
.catch(err => console.error(err))