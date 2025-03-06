const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema({
    filename: String,
    url: String
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("storage", StorageScheme);