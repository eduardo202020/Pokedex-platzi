import NotFound from './psyduck.png'

interface IProps {
  searchedValue: string;
}

export const EmptyResults = (props: IProps) => {
  return (
    <div className='grid place-items-center'>
      <p className='text-red-600 text-center text-2xl pb-12'>No pokemons with the name: <b>{props.searchedValue}</b></p>
      <img src={NotFound} alt="NotFound" />
    </div>
  )
}
