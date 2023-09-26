
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Section'
import Cards from './components/Cards'


import 'bulma/css/bulma.min.css'

function App() {

return (
  <>
    <div className="container">
      <Navbar />
      <Main title="Pokemones">
        <Cards url="https://pokeapi.co/api/v2/pokemon/" />
      </Main>
      <Footer />
    </div>
  </>
)
}

export default App
