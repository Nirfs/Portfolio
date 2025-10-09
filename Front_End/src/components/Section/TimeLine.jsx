//styles
import '../../styles/timeline.scss'

export function Timeline(){
    return(
        <>
            <div className="timeline">
                <ol>
                    <li>
                    <div>
                        <time>2015</time> 
                        <p><strong>Faculté de psychologie Université de Caen Basse Normandie </strong> <br/> diplome non obtenue</p>
                    </div>
                    </li>
                    <li>
                        <div>
                            <time>2016 - 2019</time> 
                            <p><strong>BTS Design graphique Opt communication et médias numériques</strong> <br/> 3 ans à l'école de design Nantes Atlantique</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2017</time> 
                            <p><strong>Stagiaire</strong><br/>6 semaine a Casus Ludi.<br/>Réalisation de NewsGame (jeux vidéo). Animation 2D, écriture d'histoire intéractive</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2018 - 2019</time> 
                            <p> <strong>Alternant puis Graphiste</strong><br/>18 mois à Compas-tis.<br/> Création de video en motion design, mise en page, design web et integration HTML et CSS</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2020 - 2023</time> 
                            <p><strong>Graphiste</strong><br/>3 ans à Meltdown. Création d'assets graphiques resaux sociaux, illustration, cartes, vidéo promo, textile ...</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2025</time> 
                            <p><strong>Formation Developpeur web</strong><br/>Openclassroom. Acquisition de compétences en HTML, CSS, JS, REACT, NODE, MONGO DB. Gestion de projet avec la méthode Agile ect..</p>
                        </div>
                    </li>
                    <li></li>
                </ol>
            </div>
        </>
    )
}