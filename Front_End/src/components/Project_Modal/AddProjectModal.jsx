// Librairies
import { useState } from "react"
import Modal from "react-modal"

// Composants
import { useAuth } from "../../context/AuthProvider"
import { ProjectForm } from "./ProjectForm"

// Styles
import "../../styles/addProjectModal.scss"

/**
 * Modal permettant d'ajouter un projet.
 * Affiche un bouton pour ouvrir le modal et le formulaire ProjectForm.
 * Ne s'affiche que si l'utilisateur est authentifié.
 *
 * @component
 * @param {Object} props
 * @param {Function} props.onWorkCreated - Fonction appelée après la création d'un projet.
 * @returns {JSX.Element|null} Composant AddProjectModal ou null si pas de token.
 */

export function AddProjectModal({ onWorkCreated }) {
  const [isOpen, setIsOpen] = useState(false)
  const { token } = useAuth()

  if (!token) return null

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="open-modal-btn input">
        Ajouter un projet
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Ajouter un projet"
        overlayClassName="modal_overlay"
        className="add_modal_content"
        shouldCloseOnOverlayClick
        closeTimeoutMS={160}
      >
        <h3>Ajouter un projet</h3>
        <ProjectForm
          onClose={() => setIsOpen(false)}
          onWorkCreated={onWorkCreated}
        />
      </Modal>
    </>
  )
}
