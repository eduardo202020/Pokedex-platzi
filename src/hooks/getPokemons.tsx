export interface IGetPokemon {
  name: string;
  url:  string;
}

export const getPokemons = (): Promise<IGetPokemon[]> => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(res => { return res.results })
    .catch(res => console.log(res))
}

export const getPokemonDetails = async () => {
  const getPokemonsResponse = await getPokemons()
  const pokemonDetail = await Promise.all(getPokemonsResponse.map(pokemon => {
    return fetch(pokemon.url)
      .then(res => { return res.json() })
      .catch((err) => console.log(err))
  }))
  return pokemonDetail
}