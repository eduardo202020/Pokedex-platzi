import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { GlobalContainer } from './components/GlobalContainer'
import { SearchBar } from './components/SearchBar'
import { Header } from './components/Header'
import { PokemonList } from './components/PokemonList'
import { Card } from './components/Card'
import { EmptyResults } from './components/EmptyResults'

import { fetchPokemonsWithDetails } from './slices/dataSlice';
import { IAppState } from './reducers/rootReducer'



function App() {
  const pokemons = useSelector((state: IAppState) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state: IAppState) => state.ui.loading);
  const pokemonsSearched = useSelector((state: IAppState) => state.data.pokemonsSearched, shallowEqual)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <GlobalContainer>
      <section className='container mx-auto px-0 justify-center py-12 lg:px-4'>
        <Header/>
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
    </GlobalContainer>
  );  
}

export default App;