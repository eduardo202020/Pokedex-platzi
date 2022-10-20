import React from 'react'

interface IProps {
  pokemonsList: []
  children?: (pokemon) => JSX.Element
}

export const PokemonList = (props: IProps) => {
  console.log(props.pokemonsList)
  return (
    <section className='grid grid-cols-4 gap-4'>
      {
        props.pokemonsList.map(props.children)
      }
    </section>
  )
}
