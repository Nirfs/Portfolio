import { useState } from 'react'
import Modal from 'react-modal'
import { useAuth } from '../../context/AuthProvider'
import { ProjectForm } from './ProjectForm'
import '../../styles/addProjectModal.scss'

export function AddProjectModal({onWorkCreated }) {
  const [isOpen, setIsOpen] = useState(false)
  const { token } = useAuth()
  
  if (!token) return null

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="open-modal-btn">
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
