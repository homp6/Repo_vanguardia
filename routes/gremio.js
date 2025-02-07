var router = require("express").Router()
const gremioCtr= require("../controllers/gremio")
router.get('/get', gremioCtr.buscar)

router.post('/add', gremioCtr.add)

router.post('/addWizard', gremioCtr.AddMembers)

router.get('/getGremio', gremioCtr.obtenerGremio)

module.exports= router;