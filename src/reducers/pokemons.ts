import { ActionType } from '../actions/actionTypes'
import { Actions } from '../actions/types'

const initialState = {
  pokemons: []
}

export const pokemonsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_POKEMONS:
      return {...state, pokemons: action.payload }
    default:
      return state
  }
}