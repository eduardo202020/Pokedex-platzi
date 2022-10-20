import { useEffect, useState } from 'react';
import './App.css';

import { SearchBar } from './components/SearchBar'
import { PokemonList } from './components/PokemonList'
import { Card } from './components/Card'

import { getPokemons } from './hooks/getPokemons'

function App() {
  const [pokemons, setPokemons] = useState([])

  const defaultProps = {
    pokemons: Array(10).fill('')
  }

  useEffect(() => {
    getPokemons()
      .then(setPokemons)
  }, [])

  return (
    <section className='container mx-auto items-center text-center'>
      <SearchBar/>
      <PokemonList
        // pokemons={Object.entries(defaultProps)}
        pokemonsList={pokemons}
      >
        {pokemon => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
          />
        )}
      </PokemonList>

    </section>
  );  
}

export default App;