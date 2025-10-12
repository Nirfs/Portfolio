//Librairies
import { useState, useEffect } from 'react'
//Composants
import { FileInput } from './FileInput'
import { StackSelector } from './StackSelector'
import { createWork } from '../../api/fetch'; 
//Styles
import '../../styles/projectForm.scss'

export function ProjectForm({ onClose, onWorkCreated  }) {
  const MAX_SIZE = 5 * 1024 * 1024
  const MAX_FILES = 6

  const [mainFile, setMainFile] = useState(null)
  const [mainPreview, setMainPreview] = useState(null)
  const [secondaryFiles, setSecondaryFiles] = useState([])
  const [selectedStacks, setSelectedStacks] = useState([])

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [ghLink, setGhLink] = useState('')
  const [wsLink, setWsLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [erreur, setErreur] = useState('')

  useEffect(() => {
    return () => {
      if (mainPreview) URL.revokeObjectURL(mainPreview)
    }
  }, [mainPreview])

  const clearPreviewsAndFiles = () => {
    if (mainPreview) URL.revokeObjectURL(mainPreview)
    setMainFile(null)
    setMainPreview(null)
    setSecondaryFiles([])
  }

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (loading) return;
  setLoading(true);

  try {
    if (!title.trim()) throw new Error('Titre requis');
    if (!mainFile) throw new Error('Image principale requise');

    const workText = {
      title: title.trim(),
      description: desc.trim(),
      category: category.trim() || null,
      videoUrl,
      stackUse: selectedStacks,
      ghLink,
      wsLink,
    };

    const formData = new FormData();
    formData.append('work', JSON.stringify(workText));
    formData.append('image', mainFile);
    secondaryFiles.forEach((file) => formData.append('secondaryImages', file));

    await createWork(formData);


      if (onWorkCreated) {
        onWorkCreated();
      }

    clearPreviewsAndFiles();
    setTitle('');
    setDesc('');
    setCategory('');
    setVideoUrl('');
    setGhLink('');
    setWsLink('');
    setSelectedStacks([]);
    onClose();
  } catch (err) {
    setErreur(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="upload_form">
      <FileInput
        label="Image principale"
        file={mainFile}
        setFile={setMainFile}
        preview={mainPreview}
        setPreview={setMainPreview}
        maxSize={MAX_SIZE}
        required
      />
      <div className="upload_title">
        <label htmlFor="titre">Titre</label>
        <input
          className='input'
          id="titre"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="upload_cat">
        <label htmlFor="category">Catégorie</label>
        <input
          className='input'
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="upload_area">
        <label htmlFor="description">Description</label>
        <textarea
          className='input'
          id="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <FileInput
        label={`Images secondaires (max ${MAX_FILES})`}
        multiple
        files={secondaryFiles}
        setFiles={setSecondaryFiles}
        maxSize={MAX_SIZE}
      />

      <div className="video_title">
        <label htmlFor="video">Url Video</label>
        <input
          className='input'
          id="video"
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>

      <StackSelector selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />

      <div className="gitHub_link">
        <label htmlFor="gitHub_link">Lien Github</label>
        <input
          className='input'
          id="gitHub_link"
          type="text"
          value={ghLink}
          onChange={(e) => setGhLink(e.target.value)}
        />
      </div>
      <div className="webSite_link">
        <label htmlFor="webSite_link">Lien du site</label>
        <input
          className='input'
          id="webSite_link"
          type="text"
          value={wsLink}
          onChange={(e) => setWsLink(e.target.value)}
        />
      </div>

      {erreur && <p className="error-message">{erreur}</p>}

      <button style={{marginTop: '20px'}}className='input' type="submit" disabled={loading}>
        {loading ? 'Envoi en cours...' : 'Valider'}
      </button>
    </form>
  )
}
