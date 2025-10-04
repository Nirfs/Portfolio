import { useState } from 'react';
import Modal from 'react-modal';
import '../styles/connectModal.scss'
export function ConnectModal(){
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {setIsOpen(true)}
    const handleClose = () => {setIsOpen(false)}
    return(
    <>
            <button onClick={handleOpen} className="open-modal-btn">
                Se connecter
            </button>
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel='modal de connexion'
            overlayClassName='connect_modal_overlay'
            className='connect_modal_content'
            shouldCloseOnOverlayClick
            closeTimeoutMS={160}
        >
              <form className='form_connect' action="/login" method="POST">
                <h2>Connexion</h2>
                <div className='input_grp'>
                    <label htmlFor="email">Adresse e-mail</label>
                    <input className="button--submit" type="email" id="email" name="email" placeholder="exemple@mail.com" required/>
                </div>
                <div className='input_grp'>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" required/>
                </div>

                <input type="submit" value="Se connecter"/>

                <div className="form-footer">
                </div>
            </form>
        </Modal>
    </>
    )
}