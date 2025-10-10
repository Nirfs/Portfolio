// Styles
import '../../styles/skillCard.scss'

export function SkillCard({ className, title, text, sources, image_src, alt }) {
  return (
    <div className={`skill-card ${className ?? ''}`}>
      <div className="skill-card__content">
        <h3 className="skill-card__title">{title}</h3>
        <p className="skill-card__desc">{text}</p>

        <div className="skill-card__techs">
          {Array.isArray(sources) &&
            sources.map((item, i) => (
              <div key={i} className="skill-card__tech">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="skill-card__tech-img"
                />
              </div>
            ))}
        </div>
      </div>

      <img
        className="skill-card__picto"
        src={image_src}
        alt={alt}
        loading="lazy"
      />
    </div>
  )
}
