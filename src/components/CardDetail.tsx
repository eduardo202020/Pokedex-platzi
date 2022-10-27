import { pokemonTypeBGColor, pokemonTypeTextColor } from '../pokemonType'
import { Type, IPokemonType, Stat } from '../types'

import { ReactComponent as ArrowLeftIcon } from '../assets/arrow-left-icon.svg'


interface IProps {
  key: number;
  number: number;
  image: string;
  name: string;
  types: Type[]
  height: number;
  weight: number;
  stats: Stat[];
}

const pokemonStats = {
  hp: "HP",
  attack: "ATTK",
  defense: "DEF",
  "special-attack": "S-ATTK",
  "special-defense": "S-DEF",
  speed: "SPED",
}

export const CardDetail = ({ image, name, types, number, height, weight, stats }: IProps) => {
  return (
    <section className='grid place-items-center'>
      <article key={number} className='w-72 p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <section className='flex justify-between items-center'>
          <ArrowLeftIcon className='w-8 h-8 dark:text-white'/>
          <p className='text-[22px] dark:text-white'>#{number}</p>
        </section>
        <img src={image} className='mx-auto w-72 h-72 object-fill' alt={name} />
        <section className='pb-1'>
          <h2
            className='mb-4 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white'
          >
            {name[0].toUpperCase() + name.slice(1)}
          </h2>
          <section className='flex justify-center gap-3 mb-6'>
            {
              types.map(type => (
                <p
                  className={`text-md p-1 rounded-md ${pokemonTypeTextColor[type.type.name as keyof IPokemonType]} ${pokemonTypeBGColor[type.type.name as keyof IPokemonType]}`}>
                  {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                </p>
              ))
            }
          </section>
          <section className='grid grid-cols-2 justify-items-center text-center dark:text-white mb-6 '>
            <section>
              <p className='text-2xl font-bold'>{weight}</p>
              <p className='font-light'>Weight</p>
            </section>
            <section>
              <p className='text-2xl font-bold'>{height}</p>
              <p className='font-light'>Height</p>
            </section>
          </section>
          {
            stats.map(stat => {
              return (
                <section className='flex'>
                  <p className='w-14 dark:text-white'>{pokemonStats[stat.stat.name]}</p>
                  <div className="w-[192px] h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div 
                      className={`bg-blue-600 h-4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                    >
                      {stat.base_stat}
                    </div>
                  </div>
                </section>
              )
            })
          }
          <section>
          </section>
        </section>
      </article>

    </section>
  )
}
