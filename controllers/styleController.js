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
        throw new Error("Interior design not found")
    }

    res.status(200).json(style)
})

const createStyle = asyncHandler(async (req, res) => {
    const { name, description} = req.body;

    
    if (!name) {
        res.status(400)
        throw new Error("Teclea el nombre del estilo")
    }
    if (!description) {
        res.status(400)
        throw new Error("Teclea la descripcion del estilo")
    }

    const style = await DesignStyle.create({
        name,
        description
        
    })

    if (style) {
        res.status(201).json(style)
    } else {
        res.status(500)
        throw new Error("There was an error creating the style")
    }
})

const updateStyle = asyncHandler(async (req, res) => {
    const style = await DesignStyle.findById(req.params.id)

    if (!style) {
        res.status(404)
        throw new Error("Interior design not found")
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
        throw new Error("Interior design not found")
    }

    await DesignStyle.deleteOne({ _id: req.params.id })
    res.status(200).json({ "Mensaje": "Interior design deleted" })
})

module.exports = {
    getAllStyles,
    getStyleById,
    createStyle,
    updateStyle,
    deleteStyle
}