import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';
import PokeList from './PokeList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 19;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokemons = await getPokemon(from, to);

      setPokemon(pokemons);
    }

    fetch();
  }, [page]);

  return (
    <>
      <h2>Current Page: {page}</h2>
      <div className='buttons'>
        <button 
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={pokemon.length < perPage}>Next Page</button>
      </div>
      <PokeList pokemon={pokemon}/>
    </>
  );
}

export default App;