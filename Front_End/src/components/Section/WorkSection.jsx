//Librairies
import { useState } from "react"
//Composants
import { AddProjectModal } from "../Project_Modal/AddProjectModal"
import { ProjectCard } from "../Card/ProjectCard"
//Styles
import "../../styles/workSection.scss"
export function WorkSection({worksList}){
    const [filter, setFilter] = useState("all")
    const filterWork = worksList.filter(work =>
    filter === 'all' ? true : work.category === filter

    )
    return(
        <section className='work_section'>
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
                        <ProjectCard
                            fetchPriority='low'
                            key={work._id}
                            alt={`photo de ${work.title}`}
                            navLink={`/work/${work._id}`}
                            src={work.imageUrl} 
                            name={work.title} 
                        />
                    ))}
                </div>
            </section >
        )
      }
          