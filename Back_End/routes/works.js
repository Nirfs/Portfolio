const express = require('express');
const router = express.Router();

const workCtrl = require('../controllers/works');

const { upload, imageOptimizer } = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/', workCtrl.getAllWorks)
router.get('/:id', workCtrl.getWork)

router.post('/', auth, upload, imageOptimizer, workCtrl.createWork);
router.delete("/:id",auth, workCtrl.deleteWork);

module.exports = router;