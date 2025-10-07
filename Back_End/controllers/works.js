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
      if (!work) return res.status(404).json({ message: 'Livre non trouvé !' });
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
        .then(() => res.status(201).json({ message: 'travail enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteBook = (req, res) => {
  Work.findOne({ _id: req.params.id })
    .then(work => {
      if (!work) return res.status(404).json({ message: 'travail non trouvé' });

      if (work.userId !== req.auth.userId) {
        return res.status(401).json({ message: 'Non autorisé' });
      }

      const allUrls = [work.imageUrl, ...(work.secondaryImagesUrl || [])];
      const allFiles = allUrls.map(url => {
        try {
          const { pathname } = new URL(url);
          return path.basename(pathname);
        } catch (err) {
          return url.split('/').pop();
        }
      });

      const deleteNext = (index = 0) => {
        if (index >= allFiles.length) {
          return work.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'travail et images supprimés !' }))
            .catch(error => res.status(400).json({ error }));
        }

        const filePath = path.join(__dirname, '..', 'images', allFiles[index]);
        fs.unlink(filePath, err => {
          if (err && err.code !== 'ENOENT') {
            console.error('Erreur suppression image:', err);
          }
          deleteNext(index + 1);
        });
      };

      deleteNext();
    })
    .catch(error => res.status(500).json({ error }));
};