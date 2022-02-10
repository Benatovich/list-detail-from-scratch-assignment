import Pokemon from './Pokemon.js';
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemon } from './services/fetch-utils.js';

// function component
export function __PokeList({ pokemon }) {
  // this.setState({ count: count + 1 })
  const [count, setCounter] = useState(0);
}

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