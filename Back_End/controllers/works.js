const Work = require('../models/Work')
const cloudinary = require('../middleware/cloudinary-config')

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

    const imageUrl = mainImage ? mainImage.imageUrl : null;
    const imagePublicId = mainImage ? mainImage.publicId : null;

    const secondaryImageUrl = secondaryFiles.map(file => file.imageUrl);
    const secondaryImagePublicIds = secondaryFiles.map(file => file.publicId);

    const work = new Work({
        ...workObject,
        userId: req.auth.userId,
        imageUrl,
        imagePublicId,
        secondaryImageUrl,
        secondaryImagePublicIds
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

            const publicIdsToDelete = [];
            
            if (work.imagePublicId) {
                publicIdsToDelete.push(work.imagePublicId);
            }
            if (Array.isArray(work.secondaryImagePublicIds)) {
                publicIdsToDelete.push(...work.secondaryImagePublicIds.filter(id => id));
            }
            
            const deletionPromises = publicIdsToDelete
                .map(publicId => {
                    return cloudinary.uploader.destroy(publicId)
                        .catch(err => {
                            console.warn(`Erreur suppression Cloudinary ${publicId}: ${err.message}`);
                            return true; 
                        });
                });
            

            Promise.all(deletionPromises)
                .then(() => {
                    return Work.deleteOne({ _id: req.params.id });
                })
                .then(() => res.status(200).json({ message: 'Projet et images supprimés !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}