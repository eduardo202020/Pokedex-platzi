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
    case ActionType.SET_FAVORITE:
      const newPokemonList = [ ...state.pokemons ]
      const pokemonIndex = newPokemonList.findIndex(pokemon => pokemon.id === action.payload.pokemonId)

      if (pokemonIndex < 0){
          return state
      }

      newPokemonList[pokemonIndex].favorite = !newPokemonList[pokemonIndex].favorite 
      return { ...state, pokemons: newPokemonList }
    case ActionType.SET_LOADING:
      return {...state, loading: action.payload }

    default:
      return state
  }
}