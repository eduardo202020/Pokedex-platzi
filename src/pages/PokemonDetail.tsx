import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


import { GlobalContainer } from '../components/GlobalContainer'
import { Header } from '../components/Header'
import { CardDetailLoading } from '../components/CardDetailLoading'
import { CardDetail } from '../components/CardDetail'

import { fetchPokemonWithDetails } from '../slices/dataSlice'
import { IAppState } from '../reducers/rootReducer'

import { IPokemon } from '../types'
import { setLoading } from '../slices/uiSlice'

export const PokemonDetail = () => {
  const { pokemonName } = useParams()

  const pokemonDetails: IPokemon = useSelector((state: IAppState) => state.data.pokemonDetail, shallowEqual)
  const loading = useSelector((state: IAppState) => state.ui.loading);
  const dispatch = useDispatch<any>()

  dispatch(setLoading(false))

  useEffect(() => {
    dispatch(fetchPokemonWithDetails(pokemonName))
  }, [])

  console.log(pokemonDetails)

  return (
    <GlobalContainer>
    <section className='container mx-auto px-0 justify-center py-12 lg:px-4'>
      <Header/>
      {
        !!loading
        ? <CardDetailLoading/>
        : pokemonDetails.id != 0
          ? <CardDetail
              key={pokemonDetails.id}
              number={pokemonDetails.id}
              name={pokemonDetails.name}
              image={pokemonDetails.sprites.other['official-artwork'].front_default}
              types={pokemonDetails.types}
              height={pokemonDetails.height}
              weight={pokemonDetails.weight}
              stats={pokemonDetails.stats}
            />
          : <CardDetailLoading/>
      }
    </section>
    </GlobalContainer>
  )
}
