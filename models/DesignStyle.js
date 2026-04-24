const mongoose = require('mongoose')

const designStyleSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Porfavor teclea el nombre del estilo"],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, "Porfavor teclea la descripcion del estilo"]
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
    imageUrl: {
        type: String,
        required: [true, "Porfavor teclea la URL de la imagen"]
    },
    gallery: [{
        type: String
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('DesignStyle', designStyleSchema)