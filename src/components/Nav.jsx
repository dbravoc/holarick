import { useState, useEffect } from 'react';

const Nav = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [personajes, setPersonajes] = useState([]);
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPersonajes(data.results);
        setResultadosFiltrados(data.results); // Actualiza aquí para mostrar todos los personajes inicialmente
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  useEffect(() => {
    if (terminoBusqueda) {
      const filtrados = personajes.filter(personaje =>
        personaje.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      setResultadosFiltrados(filtrados);
    } else {
      setResultadosFiltrados(personajes); // Muestra todos los personajes si no hay término de búsqueda
    }
  }, [terminoBusqueda, personajes]);

  return (
    <div>
      <nav>
            <input
              className="cta"
              type="text"
              placeholder="Buscar..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
            />
      </nav>

      <div className='personajes'>
        {resultadosFiltrados.map((personaje) => (
          <div key={personaje.id} className='persona'>
            <p>{personaje.name}</p>
            <p>{personaje.status}</p>
            <p>{personaje.species}</p>
            <p>{personaje.episodes}</p>



            <img src={personaje.image} alt={`Imagen de ${personaje.name}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
