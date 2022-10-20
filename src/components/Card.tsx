import React from 'react'
import { Type} from '../types'

interface IProps {
  image: string;
  name: string;
  types: Type[]
}

export const Card = ({image, name, types}: IProps) => {
  return (
    <article className='w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'> 
      <img src={image} className='mx-auto w-40 h-40' alt="" />
      <section className='p-4'>
        <h2 
          className='mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'
        >
          {name[0].toUpperCase() + name.slice(1)}
        </h2>
        <section className='flex'>
          <p>Type:&nbsp;</p>
          {
            types.map((type, index, array) => (
              <p className=' font-normal text-gray-700 dark:text-gray-400'>
                {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                {(array.length - 1) === index ? "." : ","}&nbsp;
              </p>
            ))
          }
        </section>
      </section>
    </article>
  )
}
