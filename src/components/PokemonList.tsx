import { CardLoading } from './CardLoading'
import { useSelector, shallowEqual } from 'react-redux'

import { IAppState } from '../reducers/rootReducer'
import { IPokemon } from '../types'

interface IProps {
  pokemonsList: IPokemon[]
  pokemonsSearched: IPokemon[]
  loading: boolean
  onEmptySearch: (searchValue: string) => JSX.Element
  children: (pokemon: IPokemon) => JSX.Element
}

export const PokemonList = (props: IProps) => {
  const searchedValue = useSelector((state: IAppState) => state.data.searchPokemon, shallowEqual)

  return (
    <>
      {
        (props.pokemonsSearched.length == 0 && searchedValue) 
        ? props.onEmptySearch(searchedValue)
        :
          <section className='grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            { (props.loading) 
              ? Array(12).fill(<CardLoading />) 
              : props.pokemonsSearched.length !== 0
                  ? props.pokemonsSearched.map(props.children)
                  : props.pokemonsList.map(props.children)
            }
          </section>
      }
    </>
  )
}
