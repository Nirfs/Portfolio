// Librairies
import { useEffect } from "react"

// Styles
import "../../styles/fileInput.scss"

/**
 * Composant d'upload de fichiers avec aperçu et gestion de plusieurs fichiers.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - Texte affiché au-dessus de l'input.
 * @param {File|null} props.setFile - Setter pour le fichier unique sélectionné.
 * @param {string|null} props.preview - URL d'aperçu pour le fichier sélectionné.
 * @param {Function} props.setPreview - Setter pour l'URL d'aperçu.
 * @param {File[]} props.files - Tableau des fichiers sélectionnés (pour multiple).
 * @param {Function} props.setFiles - Setter pour le tableau de fichiers.
 * @param {boolean} [props.multiple=false] - Autoriser la sélection multiple.
 * @param {number} props.maxSize - Taille maximale autorisée par fichier (en octets).
 * @returns {JSX.Element} Composant FileInput.
 */

export function FileInput({ label, setFile, preview, setPreview, files, setFiles, multiple, maxSize }) {
  const handleChange = (e) => {
    if (multiple) {
      const selected = Array.from(e.target.files || []).filter((f) => f.size <= maxSize)
      setFiles(selected)
      return
    }

    const f = e.target.files?.[0]
    if (!f) {
      if (preview) URL.revokeObjectURL(preview)
      setFile(null)
      setPreview(null)
      return
    }

    if (f.size > maxSize) return

    if (preview) URL.revokeObjectURL(preview)
    setFile(f)
    setPreview(URL.createObjectURL(f))
  }

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  return (
    <div className="upload_image">
      <div className="main_preview">
        <label>{label}</label>
        {preview && <img src={preview} alt="Aperçu" />}
      </div>
      <input className="input" type="file" multiple={multiple} onChange={handleChange} />
      {files && files.length > 0 && <p>{files.length} fichier(s) sélectionné(s)</p>}
    </div>
  )
}
