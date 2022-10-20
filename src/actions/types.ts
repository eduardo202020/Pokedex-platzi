import {ActionType} from './actionTypes'

interface setPokemons {
  type: ActionType.SET_POKEMONS
  payload: []
}

export type Actions = setPokemons