//librairie
import { useLoaderData } from 'react-router-dom'
//composant
import { PresentationAnimation } from '../components/PresentationAnimation'
import { SkillAnimation } from '../components/SkillAnimation'
import { Card } from '../components/Card'
//assets
import bg from '../assets/doodle_illustration.svg'
//styles
import '../styles/home.scss'
import { useState } from 'react'



export function Home(){
    const worksList = useLoaderData()
    const [filter, setFilter] = useState("all")

    const filterWork = worksList.filter(work =>
        filter === 'all' ? true : work.category === filter
    )
    console.log(filter)
    return(
        <>
            <section>
                <img className='doodle_bg'src={bg} alt='illustration pop culture de style doodle'/>
                <PresentationAnimation/>
            </section>
            <div className='empty_container'></div>
            <section>
                <SkillAnimation/>
            </section>
            <section className='work_section'>
                <h2>TRAVAUX</h2>
                <nav className='filter'>
                 {['all', 'dev web', 'graphisme'].map((cat) => (
                    <button
                        key={cat}
                        className={filter === cat ? 'active' : ''}
                        onClick={() => setFilter(cat)}
                    >
                        {cat === "all" ? "Tous" : cat}
                    </button>
                 ))}
                </nav>
                 <div className="card_section">
                    {filterWork.map((work) => (
                        <Card 
                        key={work.id} 
                        navLink={`/work/${work.id}`}
                        src={work.img} 
                        name={work.name} 
                        />
                    ))}
                </div>
            </section>
        </> 
    )
}