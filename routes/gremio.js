var router = require("express").Router()
const gremioCtr= require("../controllers/gremio")
router.get('/get', gremioCtr.buscar)

router.post('/add', gremioCtr.add)

module.exports= router;