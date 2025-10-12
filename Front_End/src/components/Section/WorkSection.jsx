//Librairies
import { useState } from "react"
import { motion } from "framer-motion";
//Composants
import { useAuth } from '../../context/AuthProvider'
import { AddProjectModal } from "../Project_Modal/AddProjectModal"
import { ProjectCard } from "../Card/ProjectCard"
import { deleteWork } from "../../api/fetch";
import { getWork } from "../../api/fetch";
//Styles
import "../../styles/workSection.scss"


export function WorkSection({worksList: initialWorks }){
    const {token} = useAuth()
    const [filter, setFilter] = useState("all")
    const [worksList, setWorksList] = useState(initialWorks)

    const handleDelete = async (work) => {
        if (!confirm(`Supprimer "${work.title}" ?`)) return;
        await deleteWork(work._id, localStorage.getItem("token"));
        setWorksList(prev => prev.filter(w => w._id !== work._id));
    };
    
    const handleAdd = async () => {
        const updatedWorks = await getWork();
        setWorksList(updatedWorks);
    };

    const filterWork = worksList.filter(work =>
        filter === 'all' ? true : work.category === filter
    )

    
    return(
        <section className='work_section'>
            <nav className='filter'>
                {['all', 'developpement web', 'graphisme'].map((cat) => (
                    <motion.button
                        key={cat}
                        className={filter === cat ? 'active' : ''}
                        onClick={() => setFilter(cat)}
                        whileHover={{scale:1.1}}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        {cat === "all" ? "Tous" : cat}
                    </motion.button>
                ))}
                <motion.div
                    whileHover={{scale:1.1}}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                >
                    <AddProjectModal
                        onWorkCreated={handleAdd}
                    />
                </motion.div>
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
                            handleDelete={() => handleDelete(work)}
                            token={token}
                        />
                    ))}
                </div>
            </section >
        )
      }
          