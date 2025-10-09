import { useLoaderData, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import {easeInOut, easeOut, motion, useScroll, useTransform} from 'motion/react'
import bg from '../assets/doodle_illustration.svg'
import '../styles/work.scss'
export function Work(){

    const workList = useLoaderData()
    const {id} = useParams()
    const work = workList.find((item) => item._id === id)

    const stackImages = {
        html: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
        css: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
        javaScript: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
        react: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        node: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        mongoDb: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg',
        scss: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
        photoshop:'https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg',
        illustrator:'https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cs6.svg',
        afterEffect:'https://cdn.worldvectorlogo.com/logos/after-effects-2019.svg'
    }

    if(!work){
        return <NotFound/>
    }

    return(
        <section className="work_section">
            <motion.div 
                className="img_container"
                initial={{ 
                    y: -200,
                    opacity:0
                 }}
                animate={{ 
                    opacity:1,
                    y:0,
                    transition: { 
                        duration: 0.5,
                        ease: easeInOut
                    } 

                }}
                
            >
                <img className='img_principal' src={work.imageUrl} alt={work.img_desc} />
            </motion.div>
            <motion.div 
                className="text_container"
                initial={{ 
                    y: 200,
                    opacity:0
                 }}
                animate={{ 
                    opacity:1,
                    y:0,
                    transition: { duration: 0.5,
                    ease:easeOut
                    } 

                }}
            >
                <h1>{work.title}</h1>
                <p>{work.description}</p>
                <div className="stack_preview">
                    {work.stackUse.map(stack => (
                        <div key={stack} className="stack_container">
                            <img                           
                                src={stackImages[stack]}
                                alt={stack}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    {work.ghLink && <a style={{marginRight:'25px'}}target='_blank' className="input" href={work.ghLink}>Lien github</a>}
                    {work.wsLink && <a target='_blank' className="input" href={work.wsLink}>Voir le projet</a>}
                </div>
            </motion.div>
            <div className="work_img_container">
                {work.secondaryImageUrl && work.secondaryImageUrl.map((img, index) => (
                        <img key={work.title + index} src={img} alt={work.title} />
                ))}
            </div>
            { work.videoUrl ?
             <iframe 
                src={work.videoUrl} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                eferrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
             ></iframe>
             : null}
            <img className='doodle_bg_work'src={bg} alt='illustration pop culture de style doodle'/>
        </section>
    )
}