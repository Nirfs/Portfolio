//styles
import '../styles/skillCard.scss'

export function SkillCard({className, title, text, sources, image_src}){
    return(
        <div className={`card ${className}`}>
            <div className="skill_content_container">
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="skill_logo_container">
                    {sources.map((item,i) => (
                        <div key={i} className="techno_container">
                            <img src={item.src} alt={item.alt}></img>
                        </div>
                    ))}
                </div>
            </div>

            <img className='picto_skill'src={image_src}/>
        </div>
    )
}