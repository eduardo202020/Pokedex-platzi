import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { GlobalContainer } from '../components/GlobalContainer'
import { Header } from '../components/Header'
import { CardDetailLoading } from '../components/CardDetailLoading'
import { CardDetail } from '../components/CardDetail'

import { IAppState } from '../reducers/rootReducer'

import { usePokemonDetail } from '../hooks/usePokemonDetail'


export const PokemonDetail = () => {
  const { pokemonName } = useParams()
  const pokemonDetails = usePokemonDetail(pokemonName)
  const loading = useSelector((state: IAppState) => state.ui.loading);

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
