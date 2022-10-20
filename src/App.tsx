import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux' 
import { setPokemons } from './actions/index'
import './App.css';

import { SearchBar } from './components/SearchBar'
import { PokemonList } from './components/PokemonList'
import { Card } from './components/Card'

import { getPokemons } from './hooks/getPokemons'

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    getPokemons()
      .then(response => dispatch(setPokemons(response)))
  }, [])

  return (
    <section className='container mx-auto px-0 justify-center text-center my-12 lg:px-4'>
      <SearchBar/>
      <PokemonList
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