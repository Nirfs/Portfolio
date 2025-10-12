// Assets
import bonhomme from '../assets/headLoader.svg';

// Styles
import '../styles/loader.scss';

/**
 * Composant Loader affichant une animation SVG
 * 
 * @returns {JSX.Element}
 */
export function Loader() {
  return (
    <div className="loader_container">
      <object
        data={bonhomme}
        type="image/svg+xml"
        style={{ width: '300px', height: 'auto' }}
      />
    </div>
  );
}
