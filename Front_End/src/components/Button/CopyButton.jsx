// Librairies
import { useState } from "react"

// Styles
import '../../styles/copyButton.scss'

/**
 * Bouton permettant de copier un texte dans le presse-papiers.
 *
 * @component
 * @param {Object} props
 * @param {string} props.text - Texte à copier.
 * @returns {JSX.Element} Composant avec texte et bouton de copie.
 */

export function CopyButton({ text }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Erreur lors de la copie :", err)
    }
  }

  return (
    <div className="button_copy">
      <p type="text" value={text}>
        {text}
      </p>

      <button className='input' type="button" onClick={handleCopy}>
        {isCopied ? "Copié !" : "Copier"}
      </button>
    </div>
  )
}
