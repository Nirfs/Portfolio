// middleware/upload-cloud.js

const multer = require("multer");
const sharp = require("sharp");
const cloudinary = require("../middleware/cloudinary-config");
const { Readable } = require('stream');

// 1. Multer configuré pour utiliser memoryStorage (C'est parfait, on garde ça !)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'secondaryImages', maxCount: 10 }
]);

// 2. Le nouvel Optimiseur/Uploader
const imageCloudUploader = async (req, res, next) => {
  if (!req.files) return next();

  try {
    // Fonction utilitaire pour envoyer le buffer optimisé à Cloudinary
    const uploadStream = (buffer, folderName) => {
      return new Promise((resolve, reject) => {
        // Crée un stream lisible à partir du buffer
        const stream = Readable.from(buffer);
        
        // Lance l'upload sur Cloudinary
        const cloudinaryStream = cloudinary.uploader.upload_stream(
          { 
            folder: `mon-portfolio/${folderName}`,
            resource_type: 'image' 
          },
          (error, result) => {
            if (result) {
              resolve({ 
                imageUrl: result.secure_url, 
                publicId: result.public_id 
              });
            } else {
              reject(error);
            }
          }
        );
        
        stream.pipe(cloudinaryStream);
      });
    };

    // Fonction pour optimiser le buffer (utilise Sharp)
    const optimizeAndUpload = async (fileBuffer, folder, width, quality) => {
      const optimizedBuffer = await sharp(fileBuffer)
        .resize({ width })
        .toFormat('webp', { quality })
        .toBuffer(); // N'écrit plus sur le disque, retourne un buffer
      
      return uploadStream(optimizedBuffer, folder);
    };

    // --- Image principale ---
    if (req.files.image && req.files.image.length > 0) {
      const { imageUrl, publicId } = await optimizeAndUpload(
        req.files.image[0].buffer, 
        'main', 
        800, 
        95
      );
      // On attache les résultats à l'objet file pour les utiliser dans le contrôleur
      req.files.image[0].imageUrl = imageUrl; 
      req.files.image[0].publicId = publicId;
    }

    // --- Images secondaires ---
    if (req.files.secondaryImages && req.files.secondaryImages.length > 0) {
      for (let i = 0; i < req.files.secondaryImages.length; i++) {
        const file = req.files.secondaryImages[i];
        const { imageUrl, publicId } = await optimizeAndUpload(
          file.buffer, 
          'secondary', 
          450, 
          95
        );
        // On attache les résultats
        file.imageUrl = imageUrl;
        file.publicId = publicId;
      }
    }

    next();
  } catch (err) {
    console.error("Erreur d'upload Cloudinary :", err);
    return res.status(500).json({ error: "Erreur lors de l’optimisation et de l’envoi des images" });
  }
};

module.exports = { upload, imageCloudUploader };