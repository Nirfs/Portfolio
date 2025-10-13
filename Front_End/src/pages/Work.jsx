// Librairies
import { useLoaderData, useParams } from "react-router-dom"
import { easeInOut, easeOut, motion } from "framer-motion"
// Composants
import { NotFound } from "./NotFound"
import { useScollTo } from "../hook/useScollTo"

// Styles
import "../styles/work.scss"

export function Work() {
  const scrollTo = useScollTo()
  const workList = useLoaderData()
  const { id } = useParams()
  const work = workList.find((item) => item._id === id)

  const stackIcons = {
    html: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    css: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    javaScript: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    react: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    node: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    mongoDb: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
    scss: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
    photoshop: "https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg",
    illustrator: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cs6.svg",
    afterEffect: "https://cdn.worldvectorlogo.com/logos/after-effects-2019.svg",
  }

  if (!work) return <NotFound />

  return (
    <>
    <section className="work-section" aria-labelledby="work-title">
      <motion.div
        className="work-cover"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } }}
      >
        <img
          fetchPriority="high"
          className="work-cover__image"
          src={work.imageUrl}
          alt={work.img_desc ?? work.title}
        />
      </motion.div>

      <motion.article
        className="work-content"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: easeOut } }}
      >
        <h1 id="work-title">{work.title}</h1>
        <p>{work.description}</p>

        <div className="work-stack">
          {Array.isArray(work.stackUse) &&
            work.stackUse.map((stack) => (
              <div key={stack} className="work-stack__item" title={stack}>
                <img src={stackIcons[stack] ?? ""} alt={stack} loading="lazy" />
              </div>
            ))}
        </div>

        <div className="work-links">
          {work.ghLink && (
            <a
              className="input"
              target="_blank"
              rel="noopener noreferrer"
              href={work.ghLink}
            >
              GitHub
            </a>
          )}
          {work.wsLink && (
            <a
              className="input"
              target="_blank"
              rel="noopener noreferrer"
              href={work.wsLink}
            >
              Voir le projet
            </a>
          )}
        </div>
      </motion.article>

      {Array.isArray(work.secondaryImageUrl) && work.secondaryImageUrl.length > 0 && (
        <div className="work-gallery">
          {work.secondaryImageUrl.map((img, index) => (
            <img
              fetchPriority="low"
              key={`${work._id || work.title}-${index}`}
              src={img}
              alt={`${work.title} — visuel ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      )}

      {work.videoUrl && (
        <div className="work-video">
          <iframe
            src={work.videoUrl}
            title={`${work.title} — vidéo`}
            allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}
    </section>
  </>
  )
}
