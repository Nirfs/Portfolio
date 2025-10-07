import { useLoaderData, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import '../styles/work.scss'
export function Work(){

    const workList = useLoaderData()
    const {id} = useParams()
    const work = workList.find((item) => item._id === id)

    if(!work){
        return <NotFound/>
    }

    return(
        <section className="work_section">
            <img className='img_principal' src={work.imageUrl} alt={work.img_desc} />
            <div className="text_container">
                <h1>{work.title}</h1>
                <p>{work.description}</p>
            </div>
            <div className="work_img_container">
                {work.secondaryImageUrl && work.secondaryImageUrl.map((img, index) => (
                        <img key={title + index} src={img} alt={work.title} />
                ))}
            </div>
            { work.video ? <video src={work.video} controls width="00"></video> : null }
        </section>
    )
}