import Pokemon from './Pokemon.js';

export default function PokeList({ pokemon }) {
  return (
    <div className='pokelist'>
      {
        pokemon.map(pokemon => <Pokemon 
          key={pokemon.id}
          pokemon={pokemon}
        />)
      }
    </div>
  );
}