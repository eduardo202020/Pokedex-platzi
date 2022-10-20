import React from 'react'

export const Card = (props) => {
  return (
    <article className='w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'> 
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="" />
      <section>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{props.name}</h2>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Fire</p>
      </section>

    </article>
  )
}
