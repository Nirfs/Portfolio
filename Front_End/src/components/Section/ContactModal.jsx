// Librairies
import Modal from "react-modal"
import { useState } from "react"

// Composants
import { CopyButton } from "../Button/CopyButton"
import { ButtonShake } from "../Button/ButtonShake"

// Assets
import contact_bg from "../../assets/mail_bg.svg"

// Styles
import "../../styles/contactModal.scss"

/**
 * Composant pour afficher un modal de contact.
 * Contient un bouton qui ouvre le modal et permet de copier l'email.
 *
 * @component
 * @returns {JSX.Element} Composant ContactModal.
 */

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("Pieplu.kevin@gmail.com")
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Erreur lors de la copie :", err)
    }
  }

  return (
    <>
      <ButtonShake onClick={handleOpen} bool={true} text="contact" />

      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Formulaire de contact"
        overlayClassName="modal_overlay"
        className="contact_modal_content"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={160}
      >
        <img className="modal_image" src={contact_bg} alt="Fond contact" />
        <h3>Contact</h3>
        <div className="contact_text_container">
          <p>Écris-moi un message — je réponds vite.</p>
          <CopyButton clastext="Pieplu.kevin@gmail.com" />
        </div>
      </Modal>
    </>
  )
}
