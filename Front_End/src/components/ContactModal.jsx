// ContactModal.jsx
import Modal from "react-modal";
import contact_bg from "../assets/mail_bg.svg";
import { ButtonShake } from "./ButtonShake";
import { useState } from "react";
import { motion } from "motion/react";
import '../styles/contactModal.scss'
import { CopyButton } from "./CopyButton";

export function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);
    
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Erreur lors de la copie :", err);
        }
    };

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
        <img className='modal_image'src={contact_bg} />
        <h3>Contact</h3>
        <div className="contact_text_container">
         <p>Écris-moi un message — je te réponds vite.</p>
        <CopyButton text={"Pieplu.kevin@gmail.com"}></CopyButton>
        </div>

      </Modal>
    </>
  );
}
