const mongoose = require("mongoose")

const workSchema = mongoose.Schema({
    userId : {type: String, required: true},
    imageUrl : {type: String, required: true},
    title : {type: String, required: true},
    description : {type: String, required: true},
    category: {type: String, required: true},
    secondaryImageUrl: { type: [String], default: [] },
})

module.exports = mongoose.model("Work", workSchema)