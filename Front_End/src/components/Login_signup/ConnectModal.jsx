// Librairies
import { useState } from 'react'
import Modal from 'react-modal'
// Composants
import { useAuth } from '../../context/AuthProvider'
import { loginUser } from '../../api/fetch';
// Styles
import '../../styles/connectModal.scss'

export function ConnectModal(){
    const [isOpen, setIsOpen] = useState(false)
    const {token,login, logout} = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleOpen = () => {setIsOpen(true)}
    const handleClose = () => {setIsOpen(false)}

    const handleSubmit = async (e) =>  {
        e.preventDefault()        
        try {
            const token = await loginUser(email, password);
            login(token);
            handleClose();
        } catch (err) {
            alert(err.message);
        }
    };
    
    return(
    <>
            {!token ?
            <button onClick={handleOpen} className="open-modal-btn">
                Connexion admin
            </button> :
            <button onClick={logout} className="open-modal-btn">
                Deconnexion
            </button>
            }
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel='modal de connexion'
            overlayClassName='modal_overlay'
            className='connect_modal_content'
            shouldCloseOnOverlayClick
            closeTimeoutMS={160}
        >
              <form className='form_connect' method="POST" onSubmit={handleSubmit}>
                <h2>Connexion</h2>
                <div className='input_grp'>
                    <label htmlFor="email">Adresse e-mail</label>
                    <input 
                        className="input button--submit" 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="exemple@mail.com" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className='input_grp'>
                    <label htmlFor="password">Mot de passe</label>
                    <input 
                    className='input'
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input className="input" type="submit" value="Se connecter"/>

                <div className="form-footer">
                </div>
            </form>
        </Modal>
    </>
    )
}