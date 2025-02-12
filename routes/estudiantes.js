var router = require("express").Router()
const estudiantesCtr= require("../controllers/estudiantes")
router.get('/', estudiantesCtr.getAllEstudiantes)
router.get('/v2/movie', estudiantesCtr.fetchData)

module.exports= router;