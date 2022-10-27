import { Link } from 'react-router-dom'

import { FavoriteBtn } from './FavoriteBtn'
import { pokemonTypeBGColor, pokemonTypeTextColor } from '../pokemonType'
import { Type, IPokemonType} from '../types'

interface IProps {
  key: number;
  number: number;
  image: string;
  name: string;
  types: Type[]
  favorite: boolean
}

export const Card = ({ image, name, types, number, favorite }: IProps) => {
  return (
    <Link to={`/${name}`}>
      <article key={number} className='w-72 p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'> 
        <section className='flex justify-between items-center'>
          <p className='text-[22px] dark:text-white'>#{number}</p>
          <FavoriteBtn isFavorite={favorite} id={number}/>
        </section>
        <img src={image} className='mx-auto w-36 h-36 object-fill' alt={name} />
        <section className='pb-1'>
          <h2 
            className='mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'
          >
            {name[0].toUpperCase() + name.slice(1)}
          </h2>
          <section className='flex justify-center gap-3'>
            {
              types.map(type => (
                <p 
                  className={` p-1 rounded-md ${pokemonTypeTextColor[type.type.name as keyof IPokemonType]} ${pokemonTypeBGColor[type.type.name as keyof IPokemonType]}`}>
                    {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                </p>
              ))
            }
          </section>
        </section>
      </article>
    </Link>
  )
}
