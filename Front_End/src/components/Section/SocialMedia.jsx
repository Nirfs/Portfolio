//assets
import mail from '../../assets/plane.svg';
import linkedin from '../../assets/linkedin.svg';
import gitHub from '../../assets/github.svg';
//style
import '../../styles/socialMedia.scss'; 

export function SocialMedia() {
 const socialMedia = [
    { src: mail, alt: 'Envoyer un email', link: 'mailto:pieplu.kevin@gmail.com' },
    { src: linkedin, alt: 'Profil LinkedIn', link: 'https://www.linkedin.com/in/kevin-pieplu/'},
    { src: gitHub, alt: 'Profil gitHub', link: 'https://github.com/Nirfs?tab=repositories'}
  ];

    return (
    <section className="social-media">
        <h2>RESAUX SOCIAUX</h2>
        <p>Pour me rejoindre sur mes resaux sociaux ou m'envoyer un mail n'hésite pas !</p>
            <div>
        {socialMedia.map((media, index) => (
            <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            >
            <img
                src={media.src}
                alt={media.alt}
                loading="lazy"
            />
            </a>
        ))}
      </div>
    </section>
  );
}