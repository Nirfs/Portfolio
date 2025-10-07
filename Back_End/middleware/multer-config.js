const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const storage = multer.memoryStorage();


const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // max 5 Mo
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'secondaryImages', maxCount: 10 }
]);


const imageOptimizer = async (req, res, next) => {
  if (!req.files) return next();

  try {

    if (!fs.existsSync('images')) {
      fs.mkdirSync('images');
    }

    // Fonction utilitaire pour traiter une image
    const processImage = async (file) => {
      const extension = 'webp';
      const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${extension}`;
      const outputPath = path.join('images', filename);

      await sharp(file.buffer)
        .resize({ width: 600 })
        .toFormat(extension, { quality: 80 })
        .toFile(outputPath);

      return filename;
    };

    // Traitement de l’image principale
    if (req.files.image && req.files.image.length > 0) {
      const mainFilename = await processImage(req.files.image[0]);
      req.files.image[0].filename = mainFilename;
    }

    // Traitement des images secondaires
    if (req.files.secondaryImages && req.files.secondaryImages.length > 0) {
      for (const file of req.files.secondaryImages) {
        const filename = await processImage(file);
        file.filename = filename;
      }
    }

    next();
  } catch (err) {
    console.error("Erreur d'optimisation :", err);
    return res.status(500).json({ error: "Erreur lors de l’optimisation des images" });
  }
};

module.exports = { upload, imageOptimizer };