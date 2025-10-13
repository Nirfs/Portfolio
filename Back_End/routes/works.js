// routes/works.js

const express = require('express');
const router = express.Router();

const workCtrl = require('../controllers/works');

// *** CHANGEMENT ICI ***
// Remplacez 'imageOptimizer' par 'imageCloudUploader' (ou le nom de votre nouveau middleware Cloudinary)
const { upload, imageCloudUploader } = require('../middleware/multer-config'); // ou multer-config, selon votre nommage
const auth = require('../middleware/auth');

router.get('/', workCtrl.getAllWorks)
router.get('/:id', workCtrl.getWork)

// *** ET ICI ***
router.post('/', auth, upload, imageCloudUploader, workCtrl.createWork); 
router.delete("/:id",auth, workCtrl.deleteWork);

module.exports = router;