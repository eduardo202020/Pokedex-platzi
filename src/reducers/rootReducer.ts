import { combineReducers } from 'redux'
import dataReducer from '../slices/dataSlice'
import uiReducer from '../slices/uiSlice'
// import { combineReducers } from 'redux-immutable'
// import { pokemonsReducer } from './pokemons'
// import { uiReducer } from './ui'

// export const rootReducer = combineReducers({
//   data: pokemonsReducer,
//   ui: uiReducer,
// })

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
})

export type IAppState = ReturnType<typeof rootReducer>