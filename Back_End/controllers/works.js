const Work = require('../models/Work')
const fs = require('fs');
const path = require('path');

exports.getAllWorks = (req, res) => {
    Work.find()
        .then(works => res.status(200).json(works))
        .catch(err => res.status(400).json(err))
}

exports.getWork = (req, res) => {
    Work.findOne({ _id: req.params.id })
    .then(work => {
      if (!work) return res.status(404).json({ message: 'Projet non trouvé !' });
      res.status(200).json(work);
    })
    .catch(err => res.status(400).json({ err }));
};

exports.createWork = (req, res) => {
  
    const workObject = JSON.parse(req.body.work);
    delete workObject._userId;

    const mainImage = req.files?.image?.[0];
    const secondaryFiles = req.files?.secondaryImages || [];

    const imageUrl = mainImage
      ? `${req.protocol}://${req.get('host')}/images/${mainImage.filename}`
      : null;

    const secondaryImageUrl = secondaryFiles.map(file =>
      `${req.protocol}://${req.get('host')}/images/${file.filename}`
    );

    const work = new Work({
      ...workObject,
      userId: req.auth.userId,
      imageUrl,
      secondaryImageUrl
    });

    work.save()
        .then(() => res.status(201).json({ message: 'Projet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteWork = (req, res) => {
  Work.findOne({ _id: req.params.id })
    .then(work => {
      if (!work) return res.status(404).json({ message: 'Projet non trouvé' });
      if (work.userId.toString() !== req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
      }

      // on regroupe toutes les images à supprimer
      const images = [];

      // image principale
      if (work.imageUrl) images.push(work.imageUrl);

      // images secondaires
      if (Array.isArray(work.secondaryImageUrl)) {
        images.push(...work.secondaryImageUrl);
      }

      // Extraction du chemin après /images/
      const getRelativePath = (url) => {
        if (!url) return null;
        const parts = url.split('/images/');
        return parts[1] ? parts[1] : null;
      };

      // Suppréssions de toutes les images trouvées
      images.forEach(imgUrl => {
        const relativePath = getRelativePath(imgUrl);
        if (!relativePath) return;

        const filePath = `images/${relativePath}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.warn(`Erreur suppression ${filePath}: ${err.message}`);
          } else {
            console.log(`Supprimé: ${filePath}`);
          }
        });
      });

      Work.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Projet et images supprimés !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}