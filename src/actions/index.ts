import { ActionType } from './actionTypes'

export const setPokemons = (payload) => ({
  type: ActionType.SET_POKEMONS,
  payload,
})