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
    const mainDir = path.join('images', 'main');
    const secondaryDir = path.join('images', 'secondary');

    if (!fs.existsSync(mainDir)) fs.mkdirSync(mainDir, { recursive: true });
    if (!fs.existsSync(secondaryDir)) fs.mkdirSync(secondaryDir, { recursive: true });

    const processImage = async (file, folder, width, quality) => {
      const extension = 'webp';
      const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${extension}`;
      const outputPath = path.join(folder, filename);

      await sharp(file.buffer)
        .resize({ width })
        .toFormat(extension, { quality })
        .toFile(outputPath);

      return filename;
    };

    // Image principale
    if (req.files.image && req.files.image.length > 0) {
      const mainFilename = await processImage(req.files.image[0], mainDir, 800, 95);
      req.files.image[0].filename = `main/${mainFilename}`;
    }

    // Images secondaires
    if (req.files.secondaryImages && req.files.secondaryImages.length > 0) {
      for (const file of req.files.secondaryImages) {
        const filename = await processImage(file, secondaryDir, 450, 85);
        file.filename = `secondary/${filename}`;
      }
    }

    next();
  } catch (err) {
    console.error("Erreur d'optimisation :", err);
    return res.status(500).json({ error: "Erreur lors de l’optimisation des images" });
  }
};

module.exports = { upload, imageOptimizer };
