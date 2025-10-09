//librairies
import { useLoaderData } from 'react-router-dom'
import { useState} from 'react'
//composants
import { PresentationAnimation } from '../components/Section/PresentationAnimation'
import { SkillAnimation } from '../components/Section/SkillAnimation'
import { Card } from '../components/Card/Card'
import { AddProjectModal } from '../components/Project_Modal/AddProjectModal'
import { SocialMedia } from '../components/Section/SocialMedia'
//assets
import bg from '../assets/doodle_illustration.svg'
//styles
import '../styles/home.scss'
import { Timeline } from '../components/Section/TimeLine'



export function Home(){
    const worksList = useLoaderData()
    const [filter, setFilter] = useState("all")
    
    const filterWork = worksList.filter(work =>
        filter === 'all' ? true : work.category === filter
    )

    return(
        <>
            <section>
                <img className='doodle_bg'src={bg} alt='illustration pop culture de style doodle'/>
                <PresentationAnimation/>
            </section>

            <div className='empty_container'></div>

            <section id='competences'>
                <SkillAnimation/>
            </section>

            <section className='work_section'>
                <h2 id='travaux'>TRAVAUX</h2>
                <nav className='filter'>
                 {['all', 'developpement web', 'graphisme'].map((cat) => (
                    <button
                        key={cat}
                        className={filter === cat ? 'active' : ''}
                        onClick={() => setFilter(cat)}
                    >
                        {cat === "all" ? "Tous" : cat}
                    </button>
                 ))}
                 <AddProjectModal/>
                </nav>
                 <div className="card_section">
                    {filterWork.map((work) => (
                        <Card 
                            key={work._id}
                            alt={`photo de ${work.title}`}
                            navLink={`/work/${work._id}`}
                            src={work.imageUrl} 
                            name={work.title} 
                        />
                    ))}
                </div>
            </section >
            <section className='timeline_section'>
                <h2 id='travaux'>PARCOURS</h2>
                <Timeline></Timeline>
            </section>
            <div className='empty_container'></div>
            <SocialMedia/>

        </> 
    )
}