import {ActionType} from './actionTypes'

interface setPokemons {
  type: ActionType.SET_POKEMONS
  payload: []
}

interface setLoading {
  type: ActionType.SET_LOADING
  payload: boolean
}

interface setFavorite {
  type: ActionType.SET_FAVORITE
  payload: boolean
}

export type Actions = setPokemons | setLoading | setFavorite