import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokeDetail() {
  const [pokemon, setPokemon] = useState({});
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
      <div className='pokedata'>
        <p>{pokemon.species_id}</p>
        <p>{pokemon.pokemon}</p>
        <p>Type 1: {pokemon.type_1}</p>
        <p>Type 2: {pokemon.type_2}</p>
        <img className='pokemon-img' src={pokemon.url_image}/>
        <p>Color 1: {pokemon.color_1}</p>
        <p>Generation: {pokemon.generation_id}</p>
        <p>Color 2: {pokemon.color_2}</p>

        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Special Attack: {pokemon.special_attack}</p>
        <p>Special Defense: {pokemon.special_defense}</p>
      </div>
    </div>
  );
}