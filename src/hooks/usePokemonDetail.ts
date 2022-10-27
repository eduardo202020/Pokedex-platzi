import {useState, useEffect} from 'react'
import { getPokemon } from './getPokemons'

import { setLoading } from '../slices/uiSlice'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


import { IPokemon } from '../types'

const expectedPokemonDetail: IPokemon = {
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: false,
  location_area_encounters: "",
  moves: [],
  name: "",
  order: 0,
  past_types: [],
  species: {
    name: "",
    url: "",
  },
  sprites: {
    back_default: "",
    back_female: null,
    back_shiny: "",
    back_shiny_female: null,
    front_default: "",
    front_female: null,
    front_shiny: "",
    front_shiny_female: null,
  },
  stats: [],
  types: [],
  weight: 0,
  favorite: false,
}

export const usePokemonDetail = (pokemon: string) => {
  const [pokemonDetail, setPokemonDetail] = useState(expectedPokemonDetail)
  const dispatch = useDispatch<any>()


  useEffect(() => {
    const setDetails = async () => {
      dispatch(setLoading(true))
      const details = await getPokemon(pokemon)
      setPokemonDetail(details)
      dispatch(setLoading(false))
    }
    setDetails()
  }, [])

  return pokemonDetail
}
