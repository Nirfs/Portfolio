import { motion } from 'motion/react';
import '../../styles/titleAnimation.scss';

export function TitleAnimation({ title, text, id }) {
  return (
    <section className="title-section" id={id}>
      <motion.h2
        className="title-section__title"
        initial={{ opacity: 0, scale: 0, y: 60, rotate: -3 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        {title}
      </motion.h2>
      <p className="title-section__text">{text}</p>
    </section>
  );
}
