import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { SearchBar } from './components/SearchBar'
import { PokemonList } from './components/PokemonList'
import { Card } from './components/Card'
import { EmptyResults } from './components/EmptyResults'

import { fetchPokemonsWithDetails } from './slices/dataSlice';
import { IAppState } from './reducers/rootReducer'



function App() {
  const pokemons = useSelector((state: IAppState) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state: IAppState) => state.ui.loading);
  const pokemonsSearched = useSelector((state: IAppState) => state.data.pokemonsSearched, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <section className='container mx-auto px-0 justify-center my-12 lg:px-4'>
      <SearchBar/>
      <PokemonList
        loading={loading}
        pokemonsList={pokemons}
        pokemonsSearched={pokemonsSearched}
        onEmptySearch={(searchedValue) => <EmptyResults searchedValue={searchedValue}/>}
      >
        {(pokemon) => (
          <Card
            key={pokemon.id}
            number={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            favorite={pokemon.favorite}
          />
        )}
      </PokemonList>
    </section>
  );  
}

export default App;