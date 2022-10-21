import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux' 
import { getPokemonsDetails, setLoading} from './actions/index'

import { SearchBar } from './components/SearchBar'
import { PokemonList } from './components/PokemonList'
import { Card } from './components/Card'

import { getPokemons } from './hooks/getPokemons'

import { IPokemon } from './types'

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    getPokemons()
      .then(response => dispatch(getPokemonsDetails(response)))
      .then(() => dispatch(setLoading(false)))
  }, [])

  return (
    <section className='container mx-auto px-0 justify-center my-12 lg:px-4'>
      <SearchBar/>
      <PokemonList
        loading={loading}
        pokemonsList={pokemons}
      >
        {(pokemon: IPokemon) => (
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