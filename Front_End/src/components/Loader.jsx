import '../styles/loader.scss';
import bonhomme from '../assets/headLoader.svg';

export function Loader() {
  return (
    <div className="loader_container">
    <object 
      data={bonhomme} 
      type="image/svg+xml"
      style={{ width: '300px', height: 'auto' }}
    >
    </object>
    </div>
  );
}

