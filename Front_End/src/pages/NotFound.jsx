//librairie
import { Link } from 'react-router-dom'
//style
import '../styles/notFound.scss'

export function NotFound(){
    return(
        <>
            <div className="error_Container">
                <h1> 404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </>
    )

}