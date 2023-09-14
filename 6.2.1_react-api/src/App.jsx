
import { useEffect, useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Section'
import Cards from './components/Cards'


import 'bulma/css/bulma.min.css'

function App() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {

    fetch('https://pokeapi.co/api/v2/pokemon/', {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" }
    })
      .then(response => response.json())
      /* then(response => {
        await async fetch(response.url)
      })
      */
      .then(json => {
        return json.results.map(({name, url}) => ({ key: name, url: url }))
      })
      .then((cartasPokemon) => {
        setPokemones(cartasPokemon);
      });
}, []);

return (
  <>
    <div className="container">
      <Navbar />
      <Main title="Pokemones">
        <Cards cartasInfo={pokemones} />
      </Main>
      <Footer />
    </div>
  </>
)
}

export default App
