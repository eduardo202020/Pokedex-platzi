export const getPokemons = async () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(res => { return res.results })
    .catch(res => console.log(res))

}