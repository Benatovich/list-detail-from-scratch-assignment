import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  console.log(pokemon, 'pokemon');
  return (
    <Link className='pokemon-link' key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
      <div className='pokemon'>
        <img src={pokemon.image} />
        {pokemon.title}
      </div>
    </Link>
  );
}