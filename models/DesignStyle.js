const mongoose = require('mongoose')

const designStyleSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name of the style"],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter the description of the style"]
    },
    shortDescription: {
        type: String,
        default: "",                    
        maxlength: [200, "Short description cannot be more than 200 characters"]
    },
    keyCharacteristics: [{
        type: String
    }],
    colorPalette: [{
        type: String
    }],
    materials: [{
        type: String
    }],
    bestFor: [{
        type: String
    }],
}, {
    timestamps: true
})

module.exports = mongoose.model('DesignStyle', designStyleSchema)