import { Link } from 'react-router-dom';
import { pokemonTypeBGColor, pokemonTypeTextColor, pokemonStats, pokemonStatsColor } from '../pokemonType'
import { Type, IPokemonType, Stat } from '../types'

import { ReactComponent as ArrowLeftIcon } from '../assets/arrow-left-icon.svg'

import { CardDetailLoading } from './CardDetailLoading'

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

const statPercentage = (stat) => {
  return Math.round((stat*226)/300)
}

export const CardDetail = ({ image, name, types, number, height, weight, stats }: IProps) => {
  return (
    <section className='grid place-items-center'>
      <article key={number} className='flex flex-col w-80 p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 md:flex-row md:w-[640px] md:justify-center'>
        <section className='flex flex-col md:mr-14'>
          <section className='flex justify-between items-center'>
            <Link to="/">
              <ArrowLeftIcon className='w-8 h-8 dark:text-white'/>
            </Link>
              <p className='text-[22px] dark:text-white'>#{number}</p>
          </section>
          <img src={image} className='mx-auto my-auto w-72 h-72 object-fill' alt={name} />
        </section>
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
              <p className='text-2xl font-bold'>{weight/10} kg</p>
              <p className='font-light'>Weight</p>
            </section>
            <section>
              <p className='text-2xl font-bold'>{height/10} m</p>
              <p className='font-light'>Height</p>
            </section>
          </section>
          <p className='text-2xl text-center font-bold pb-4 dark:text-white'>Base Stats</p>
          {
            stats.map(stat => {
              return (
                <section className='flex'>
                  <p className='w-14 dark:text-white'>{pokemonStats[stat.stat.name]}</p>
                  <div className="w-[226px] h-4 flex justify-between pr-3 bg-gray-200 text-xs font-medium text-end rounded-full dark:text-slate-200 dark:bg-gray-700">
                    <div 
                      className={`bg-${pokemonStatsColor[stat.stat.name]} h-4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                      style={{
                        width: statPercentage(stat.base_stat) + 'px',
                        backgroundColor: `${pokemonStatsColor[stat.stat.name]}`
                      }}
                    >
                      {stat.base_stat}
                    </div>
                    300
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
