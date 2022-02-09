import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  console.log(pokemon, 'pokemon');
  return (
    <Link className='pokemon-link' key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
      <div className='pokemon'>
        <img src={pokemon.url_image} />
        <p>{pokemon.pokemon}</p>
      </div>
    </Link>
  );
}