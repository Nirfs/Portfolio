//Librairies
import { Outlet } from 'react-router-dom';
//Composant
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
//styles
import '../styles/abstract/global.scss'
export function Layout(){ 
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}