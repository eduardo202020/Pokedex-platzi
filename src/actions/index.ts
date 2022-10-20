import { ActionType } from './actionTypes'
import { IPokemon } from '../types'

type Pokemons = IPokemon[] | []

export const setPokemons = (payload) => ({
  type: ActionType.SET_POKEMONS,
  payload,
})

export const setLoading = (payload) => ({
  type: ActionType.SET_LOADING,
  payload,
})

export const getPokemonsDetails = 
  (pokemons: Pokemons = []) => 
  async (dispatch) => {
    const pokemonDetail = await Promise.all(pokemons.map(pokemon => {
      return fetch(pokemon.url)
        .then(res => { return res.json() })
        .catch((err) => console.log(err))
    }))
    dispatch(setPokemons(pokemonDetail))
}