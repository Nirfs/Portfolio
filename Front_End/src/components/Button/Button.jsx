/**
 * Bouton réutilisable affichant un label et exécutant une action au clic.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - Texte affiché sur le bouton.
 * @param {Function} props.onClickButton - Fonction appelée lors du clic sur le bouton.
 * @returns {JSX.Element} Composant Button.
 */

export function Button({label, onClickButton}){
    return(
        <button onClick={onClickButton}>{label}</button>
    )
}