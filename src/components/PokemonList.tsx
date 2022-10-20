import React from 'react'

interface IProps {
  pokemonsList: []
  children?: (pokemon) => JSX.Element
}

export const PokemonList = (props: IProps) => {
  console.log(props.pokemonsList)
  return (
    <section className='grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        props.pokemonsList.map(props.children)
      }
    </section>
  )
}
