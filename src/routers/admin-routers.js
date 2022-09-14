const router = require('express').Router();
const {getAdmin, postAdmin, putAdmin, deleteAdmin} = require("../controllers/admin-controllers")


router.get('/admin', getAdmin)
router.post('/admin', postAdmin)
router.put('/admin', putAdmin)
router.delete('/admin', deleteAdmin)

module.exports = router;