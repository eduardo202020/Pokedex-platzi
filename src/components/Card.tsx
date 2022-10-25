import { FavoriteBtn } from './FavoriteBtn'
import { Type} from '../types'

interface IProps {
  key: number;
  number: number;
  image: string;
  name: string;
  types: Type[]
  favorite: boolean
}

interface IPokemonType {
  grass: string;
  poison: string;
  fire: string;
  flying: string;
  water: string;
  bug: string;
  normal: string;
  electric:string;
  ground: string; 
  fairy: string;
  fighting:string;
  psychic: string;
  rock: string;
  steel: string;
  ice: string;
  ghost: string;
  dragon: string;
}

const pokemonTypeBGColor: IPokemonType = {
  grass: "bg-green-500",
  poison: "bg-violet-500",
  fire: "bg-orange-600",
  flying: "bg-purple-600",
  water: "bg-blue-600", 
  bug: "bg-lime-700",
  normal: "bg-teal-500",
  electric: "bg-yellow-300",
  ground: "bg-amber-500", 
  fairy: "bg-red-500",
  fighting: "bg-red-700",
  psychic: "bg-red-300",
  rock: "bg-yellow-600",
  steel: "bg-gray-500",
  ice: "bg-sky-300",
  ghost: "bg-indigo-400",
  dragon: "bg-purple-800",
}

const pokemonTypeTextColor: IPokemonType = {
  grass: "text-black",
  poison: "text-white",
  fire: "text-white",
  flying: "text-white",
  water: "text-white", 
  bug: "text-white",
  normal: "text-white",
  electric: "text-black",
  ground: "text-black", 
  fairy: "text-white",
  fighting: "text-white",
  psychic: "text-black",
  rock: "text-white",
  steel: "text-white",
  ice: "text-black",
  ghost: "text-black",
  dragon: "text-white",
}

export const Card = ({image, name, types, number, favorite}: IProps) => {
  return (
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
  )
}
