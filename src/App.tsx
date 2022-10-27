import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { PokemonDetail } from './pages/PokemonDetail'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/:pokemonName' element={ <PokemonDetail/>}/>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;