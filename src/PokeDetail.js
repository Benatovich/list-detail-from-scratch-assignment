import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokeDetail() {
  const [pokemon, setPokemon] = useState({});
  const [pokepage, setPokepage] = useState([1]);
  const params = useParams();

  useEffect(() => {
    async function whosThatPokemon() {
      const data = await getSinglePokemon(params.id);

      setPokemon(data);
    }

    whosThatPokemon();
  }, [params.id]);

  return (
    <div className='pokedetail'>
      {/* <>
        <h2>Current Pokemon: #{pokemon.species_id} {pokemon.pokemon}</h2>
        <div className='buttons'>
          <button 
            onClick={() => setPokepage(pokepage - 1)}
            disabled={pokepage === 1}>Previous Page</button>
          <button
            onClick={() => setPokepage(pokepage + 1)}>Next Page</button>
        </div>
      </> */}
      <div className='pokedata'>
        <p>PokeNumber: {pokemon.species_id}</p>
        <p>PokeName: {pokemon.pokemon}</p>
        <p>Generation: {pokemon.generation_id}</p>

        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Type 1: {pokemon.type_1}</p>
        <p>Type 2: {pokemon.type_2}</p>
        
        <p className='side'>Height: {pokemon.height}<br></br><br></br>Weight: {pokemon.weight}</p>
        <img className='pokemon-img' src={pokemon.url_image}/>
        <p className='side'>Ability 1: {pokemon.ability_1}<br></br><br></br>Ability 2: {pokemon.ability_2}<br></br><br></br>Hidden Ability: {pokemon.ability_hidden}</p>
        
        <p>HP: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        
        <p>Speed: {pokemon.speed}</p>
        <p>Special Attack: {pokemon.special_attack}</p>
        <p>Special Defense: {pokemon.special_defense}</p>
      </div>
    </div>
  );
}