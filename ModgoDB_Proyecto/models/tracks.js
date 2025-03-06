const mongoose = require("mongoose")

const mongooseDelete = require("mongoose-delete")

const TrackScheme = new mongoose.Schema(
    {
        name: String,
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            age: {
                type: Number
            },
        },
        album: {
            name: {
                type: String,
            }
        },
        cover: {
            url: {
                type: String
            }
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

TrackScheme.plugin(mongooseDelete, { overrideMethods: "all" })

module.exports = mongoose.model("tracks", TrackScheme)