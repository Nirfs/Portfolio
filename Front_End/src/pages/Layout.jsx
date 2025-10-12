//Librairies
import { Outlet } from 'react-router-dom';
//Composants
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
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