import { useLoaderData, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import '../styles/work.scss'
export function Work(){

    const workList = useLoaderData()
    const {id} = useParams()
    const work = workList.find((item) => item.id === id)

    if(!work){
        return <NotFound/>
    }

    return(
        <section className="work_section">
            <img className='img_principal' src={work.img} alt={work.img_desc} />
            <div className="text_container">
                <h1>{work.name}</h1>
                <p>{work.description}</p>
            </div>
            <div className="work_img_container">
                {work.presentation_img && work.presentation_img.map((img, index) => (
                        <img key={index} src={img} alt={`${work.img_desc} ${index}`} />
                ))}
            </div>
            { work.video ? <video src={work.video} controls width="00"></video> : null }
        </section>
    )
}