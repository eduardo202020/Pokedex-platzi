import { ActionType } from '../actions/actionTypes'
import { Actions } from '../actions/types'

const initialState = {
  pokemons: [],
  loading: false,
}

export const pokemonsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_POKEMONS:
      return {...state, pokemons: action.payload }
    case ActionType.SET_LOADING:
      return {...state, loading: action.payload }
    default:
      return state
  }
}