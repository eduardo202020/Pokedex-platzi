import React from 'react'
import { CardLoading } from './CardLoading'

interface IProps {
  pokemonsList: []
  loading: boolean
  children?: (pokemon) => JSX.Element
}

export const PokemonList = (props: IProps) => {
  const loadingCards = Array(8)
  return (
    <section className='grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      { props.loading 
        ? Array(12).fill(<CardLoading/>)
        : props.pokemonsList.map(props.children)
      }
    </section>
  )
}
