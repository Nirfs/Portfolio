//librairies
import { useLoaderData } from 'react-router-dom'
//composants
import { HeroSection } from '../components/Section/HeroSection'
import { SkillsSection } from '../components/Section/SkillsSection'
import { WorkSection } from '../components/Section/WorkSection'
import { SocialMedia } from '../components/Section/SocialMedia'
import { useScollTo } from '../hook/useScollTo'
import  Timeline  from '../components/Section/TimeLine'
import { TitleAnimation } from '../components/Section/TitleAnimation'
//assets
import bg from '../assets/doodle_illustration.svg'
//styles
import '../styles/home.scss'

export function Home(){

    const scrollTo = useScollTo()
    const worksList = useLoaderData()
    
    return(
        <>
            <img
                decoding="async"
                fetchPriority="high"
                loading="lazy"
                className="doodle_bg"
                src={bg}
                alt="Illustration doodle pop culture"
            />

            <section aria-labelledby="en-tête" className='home_section'>
                <HeroSection />
            </section>

            <section aria-labelledby="competences" className='home_section'>
                <TitleAnimation
                    title="COMPÉTENCES"
                    text="Petit tour d’horizon de mes compétences, entre design et développement."
                    id="competences"
                />
                <SkillsSection />
            </section>

            <section aria-labelledby="travaux" className='home_section'> 
                <TitleAnimation
                    title="PROJETS MIS EN AVANT"
                    text="Une sélection de projets marquants : entre graphisme, développement et créations personnelles."
                    id="travaux"
                />
                <WorkSection worksList={worksList} />
            </section>



            <section aria-labelledby="parcours" className='home_section'>
                <TitleAnimation
                    title="PARCOURS ÉTUDIANT ET PROFESSIONNEL"
                    text="Un aperçu des expériences et formations qui ont jalonné mon parcours."
                    id="parcours"
                />
                <Timeline />
            </section>


            <section aria-labelledby="reseaux" className='home_section media'>
                
            <TitleAnimation
                title="RÉSEAUX SOCIAUX"
                text="Pour me rejoindre sur mes réseaux sociaux ou m'envoyer un mail, n'hésite pas !"
                id="reseaux"
            />
                <SocialMedia />
            </section>
        </> 
    )
}