
import { useState } from "react"
import '../styles/copyButton.scss'
export function CopyButton ({ text }){
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
        <p type="text" value={text} readOnly>{text}</p>
        <button onClick={handleCopy}>
            {isCopied ? "Copié !" : "Copier"}
        </button>
    </div>
    ) 
}