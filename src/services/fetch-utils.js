import { client, checkError } from './client';

export async function getPokemon(from = 0, to = 150) {
  const response = await client
    .from('pokemon')
    .select()
    .range(from, to);

  return checkError(response);
}

export async function getSinglePokemon(id) {
  const response = await client
    .from('pokemon')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}