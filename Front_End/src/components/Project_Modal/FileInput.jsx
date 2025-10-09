import { useEffect } from 'react'
import '../../styles/fileInput.scss'

export function FileInput({ label, file, setFile, preview, setPreview, files, setFiles, multiple, maxSize }) {
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
      <div className='main_preview'>
          <label>{label}</label>
          {preview && <img src={preview} alt="Aperçu" />}
        </div>
        <input className='input' type="file" multiple={multiple} onChange={handleChange} />
      {files && files.length > 0 && <p>{files.length} fichier(s) sélectionné(s)</p>}
    </div>
  )
}
