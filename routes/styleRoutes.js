const express = require('express')
const router = express.Router()

const { 
    getAllStyles, 
    getStyleById, 
    createStyle, 
    updateStyle, 
    deleteStyle 
} = require('../controllers/styleController')

// Obtener todos los estilos
router.get('/', getAllStyles)

// Obtener un estilo por ID
router.get('/:id', getStyleById)

// Crear nuevo estilo
router.post('/', createStyle)

// Actualizar estilo
router.put('/:id', updateStyle)

// Eliminar estilo
router.delete('/:id', deleteStyle)

module.exports = router