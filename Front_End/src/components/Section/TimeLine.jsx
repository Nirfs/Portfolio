// Assets
import fac from '../../assets/fac.svg'
import bts from '../../assets/bts.svg'
import devWeb from '../../assets/dev_web_picto.svg'
import casus from '../../assets/casus_ludi.svg'
import melt from '../../assets/meltdown.svg'
import compas from '../../assets/compas.svg'

// Styles
import '../../styles/timeline.scss'

/**
 * Données de la timeline
 */

const timelineData = [
  { id: 1, year: '2015', title: 'Faculté de psychologie', icon: fac },
  { id: 2, year: '2016-2019', title: 'BTS Design graphique', icon: bts },
  { id: 3, year: '2017', title: 'Stagiaire Casus Ludi', icon: casus },
  { id: 4, year: '2018-2019', title: 'Graphiste Compas-tis', icon: compas },
  { id: 5, year: '2020-2023', title: 'Graphiste Meltdown', icon: melt },
  { id: 6, year: '2025', title: 'Développeur web', icon: devWeb }
]

/**
 * Étape individuelle de la timeline
 *
 * @param {Object} props
 * @param {string} props.year - Année ou période
 * @param {string} props.title - Titre de l'événement
 * @param {string} props.icon - Chemin vers l'icône
 * @param {boolean} props.isLast - Si c'est la dernière étape
 * @returns {JSX.Element}
 */
function TimelineStep({ year, title, icon, isLast }) {
  return (
    <li className="timeline-step">
      <img className="step-icon" src={icon} alt={`picto pour ${title}`} />
      <div className="step-year">{year}</div>
      <div className="step-title">{title}</div>
      {!isLast && <div className="step-connector"></div>}
    </li>
  )
}

/**
 * Composant principal de la timeline horizontale
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Timeline() {
  return (
    <div className="timeline-wrapper">
      <ul className="timeline-horizontal">
        {timelineData.map((event, index) => (
          <TimelineStep
            key={event.id}
            year={event.year}
            title={event.title}
            icon={event.icon}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </ul>
    </div>
  )
}
