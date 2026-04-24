const asyncHandler = require("express-async-handler")
const DesignStyle = require("../models/DesignStyle");

const getAllStyles = asyncHandler(async (req, res) => {
    const styles = await DesignStyle.find({})
    res.status(200).json(styles)
})

const getStyleById = asyncHandler(async (req, res) => {
    const style = await DesignStyle.findById(req.params.id)

    if (!style) {
        res.status(404)
        throw new Error("Style no encontrado")
    }

    res.status(200).json(style)
})

const createStyle = asyncHandler(async (req, res) => {
    const { name, description, imageUrl } = req.body;

    
    if (!name) {
        res.status(400)
        throw new Error("Teclea el nombre del estilo")
    }
    if (!description) {
        res.status(400)
        throw new Error("Teclea la descripcion del estilo")
    }
    if (!imageUrl) {
        res.status(400)
        throw new Error("Teclea la URL de la imagen")
    }

    const style = await DesignStyle.create({
        name,
        description,
        imageUrl
        
    })

    if (style) {
        res.status(201).json(style)
    } else {
        res.status(500)
        throw new Error("Hubo un error al crear el estilo")
    }
})

const updateStyle = asyncHandler(async (req, res) => {
    const style = await DesignStyle.findById(req.params.id)

    if (!style) {
        res.status(404)
        throw new Error("Style no encontrado")
    }

    const styleUpdated = await DesignStyle.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )

    res.status(200).json(styleUpdated)
})

const deleteStyle = asyncHandler(async (req, res) => {
    const style = await DesignStyle.findById(req.params.id)

    if (!style) {
        res.status(404)
        throw new Error("Style no encontrado")
    }

    await DesignStyle.deleteOne({ _id: req.params.id })
    res.status(200).json({ "Mensaje": "Estilo eliminado" })
})

module.exports = {
    getAllStyles,
    getStyleById,
    createStyle,
    updateStyle,
    deleteStyle
}