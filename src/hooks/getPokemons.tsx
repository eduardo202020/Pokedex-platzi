

export const getPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(res => { return res.results })
    .catch(res => console.log(res))
}

export const getPokemonDetails = async () => {
  const getPokemonsResponse = await getPokemons()
  console.log(getPokemonsResponse)
  const pokemonDetail = await Promise.all(getPokemonsResponse.map(pokemon => {
    console.log("URL: ",pokemon.url)
    return fetch(pokemon.url)
      .then(res => { return res.json() })
      .catch((err) => console.log(err))
  }))
  return pokemonDetail
}