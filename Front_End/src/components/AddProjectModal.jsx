import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import '../styles/connectModal.scss'
import { useAuth } from '../hook/authProvider'
import '../styles/addProjectModal.scss'


export function AddProjectModal(){
    const API_URL = 'http://localhost:4000';
    
    //Images
    const [mainFile, setMainFile] = useState(null)
    const [mainPreview, setMainPreview] = useState(null)
    const [secondaryFiles, setSecondaryFiles] = useState([])
    const [selectedStacks, setSelectedStacks] = useState([]);
    
    //form
    const [title, setTitle] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [erreur, setErreur] = useState("")
    const [ghLink, setGhLink] = useState("")
    const [wsLink, setWsLink] = useState("")

    const {token} = useAuth()

    useEffect(() => {
        return () => {
            if (mainPreview) URL.revokeObjectURL(mainPreview)
        }
    }, [mainPreview])

    //modale
    const handleOpen = () => {setIsOpen(true)}
    const handleClose = () => {
        setIsOpen(false)
        clearPreviewsAndFiles()
        setErreur("")
    }

    if (!token) return null

    const MAX = 6
    const MAX_SIZE = 5 * 1024 * 1024

    const onSecondaryChange = (e) => {
        const files = Array.from(e.target.files || [])

        if (files.length === 0) {
            setErreur("Aucun fichier sélectionné")
            return
        }
        const ok = files.filter(f => f.type.startsWith('image/') && f.size <= MAX_SIZE)       
        setSecondaryFiles(prev => [...prev, ...ok].slice(0, MAX))
  
        if (ok.length === 0) {
            setErreur("Aucun fichier valide (format ou taille incorrecte)")
            return
        }

        setErreur("")
    }

    const onMainChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) {
            if (mainPreview) {
                URL.revokeObjectURL(mainPreview)
            }
                setMainFile(null)
                setMainPreview(null)
            return
        }

        if (!file.type.startsWith('image/')) {
            setErreur("Le fichier doit être une image")
            return
        }

        if (mainPreview) {
            URL.revokeObjectURL(mainPreview)
        }

        if (file.size > MAX_SIZE) {
            setErreur("L'image est trop volumineuse (max 5MB)")
            return
        }

        const url = URL.createObjectURL(file)
        setMainFile(file) 
        setMainPreview(url)
        setErreur("")
    }

    const clearPreviewsAndFiles = () => {
        if (mainPreview) URL.revokeObjectURL(mainPreview)

        setMainFile(null)
        setMainPreview(null)
        setSecondaryFiles([])
    }
    
    const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)

    try {
        if (!title.trim()) throw new Error('Titre requis')
        if (!mainFile) throw new Error('Image principale requise')

        const workText = {
            title: title.trim(),
            description: desc.trim(),
            category: category.trim() || null,
            videoUrl: videoUrl,
            stackUse: selectedStacks,
            ghLink: ghLink,
            wsLink: wsLink,
        }

        const formData = new FormData()
        formData.append('work', JSON.stringify(workText))
        formData.append('image', mainFile)
        secondaryFiles.forEach(file => formData.append('secondaryImages', file))

        const rep = await fetch(`${API_URL}/api/work`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
        })

        if (!rep.ok) {
            const err = await rep.json().catch(() => ({}))
            throw new Error(err.error?.message || err.message || 'Erreur upload')
        }

        const data = await rep.json()
        console.log('Upload OK', data)

        // Reset form
        clearPreviewsAndFiles()
        setTitle('')
        setDesc('')
        setCategory('')
        setVideoUrl('')
        setSelectedStacks([])
        setIsOpen(false)
    } catch (err) {
        console.error('Upload failed:', err)
        setErreur(err.message)
    } finally {
        setLoading(false)
    }
}

    return(
        <>
            <button onClick={handleOpen} className="open-modal-btn">
                Ajouter un projet
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={handleClose}
                contentLabel='modal de connexion'
                overlayClassName='modal_overlay'
                className='add_modal_content'
                shouldCloseOnOverlayClick
                closeTimeoutMS={160}
            >
                <h3>Ajouter un projet</h3>
                <div className="preview">
                    {mainPreview && (
                        <img src={mainPreview} alt="Aperçu" /> 
                    )}
                </div>
                <form className="upload_form" onSubmit={handleSubmit}>
                    <div className="upload_image">
                        <label htmlFor="main-image">Ajouter l'image principale</label>
                        <input
                            className='input'
                            type="file"
                            id="main-image"
                            accept="image/*"
                            onChange={onMainChange}
                            required
                        />
                    </div>
                    
                    <div className="upload_title">
                        <label htmlFor="titre">Titre</label>
                        <input
                            className='input'
                            type="text" 
                            name="titre"  
                            id="titre"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className='upload_cat'>
                        <label htmlFor="category">Catégories</label>
                        <input
                            className='input'
                            type="text" 
                            name="category"  
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    
                    <div className='upload_area'>
                        <label htmlFor="description">Description</label>
                        <textarea                        
                            id="description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    
                    <div className="upload_image">
                        <label htmlFor="secondary-images">Ajouter des images secondaires (max {MAX})</label>
                        <input
                            className='input'
                            type="file"
                            id="secondary-images"
                            accept="image/*"
                            multiple
                            onChange={onSecondaryChange}
                        />
                        {secondaryFiles.length > 0 && (
                            <p className="file-count">{secondaryFiles.length} fichier(s) sélectionné(s)</p>
                        )}
                    </div>

                    <div className="video_title">
                        <label htmlFor="video">Url Video</label>
                        <input 
                        className='input'
                            type="video" 
                            name="video"  
                            id="video"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                        />
                    </div>
                    
                    {erreur && <p className="error-message">{erreur}</p>}
                    <fieldset>
                        <legend>Choisir les stack du projet</legend>
                        {["html", "css", "javaScript", "react", "node", "mongoDb", "scss", "photoshop", "illustrator", "afterEffect"].map(stack => (
                            <div key={stack}>
                            <input
                                type="checkbox"
                                id={stack}
                                name="interest"
                                value={stack}
                                checked={selectedStacks.includes(stack)}
                                onChange={(e) => {
                                const { value, checked } = e.target;
                                if (checked) {
                                    setSelectedStacks([...selectedStacks, value]);
                                } else {
                                    setSelectedStacks(selectedStacks.filter(s => s !== value));
                                }
                                }}
                            />
                            <label htmlFor={stack}>{stack}</label>
                            </div>
                        ))}
                    </fieldset>

                    <div className='gitHub_link'>
                        <label htmlFor="gitHub_link">Lien Github</label>
                        <input
                            className='input'
                            type="gitHub_link" 
                            name="gitHub_link"  
                            id="gitHub_link"
                            value={ghLink}
                            onChange={(e) => setGhLink(e.target.value)}
                        />
                    </div>

                    <div className='webSite_link'>
                        <label htmlFor="webSite_link">Lien du site</label>
                        <input
                            className='input'
                            type="webSite_link" 
                            name="webSite_link"  
                            id="webSite_link"
                            value={wsLink}
                            onChange={(e) => setWsLink(e.target.value)}
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Envoi en cours...' : 'Valider'}
                    </button>
                </form>
            </Modal>    
        </>
    )
}