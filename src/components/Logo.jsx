import logoImage from '../assets/img/m.png';

const Logo = () => {
    return (
    <div className='head'>
      <img src={logoImage} alt="Logo" className="logo" />
      <h1>Busca personajes de Rick and Morty</h1>
    </div>
    );
  };
  
  export default Logo;