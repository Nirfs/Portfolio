const mongoose = require("mongoose")

const workSchema = mongoose.Schema({
    userId : {type: String, required: true},
    imageUrl : {type: String, required: true},
    title : {type: String, required: true},
    description : {type: String, required: true},
    category: {type: String, required: true},
    secondaryImageUrl: { type: [String], default: [] },
    stackUse: { type: [String], default: [] },
    videoUrl: { type: String },
    ghLink:{ type: String },
    wsLink:{ type: String },
    imagePublicId: { type: String, required: true}, 
    secondaryImagePublicIds: { type: [String], default: [] },
})

module.exports = mongoose.model("Work", workSchema)