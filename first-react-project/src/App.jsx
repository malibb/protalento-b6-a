import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Cards from './components/Cards'
const cartas = [{ key: '13kj', title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12st', title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12sk',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12ygjls',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12ygs',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12gyygs',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12jygjs',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12jmhs',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12ls',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12hs',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12es',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12ds',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
{ key: '12xs',title: 'Mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, rerum? Soluta, cupiditate necessitatibus eum, quisquam deserunt culpa, dolor molestias nulla facere dolorum numquam? Ipsum maxime commodi adipisci iste laboriosam qui!' },
]

function App() {

  useEffect(() => {
    console.log('me ejecuté')
    // pedir los datos de las carta
    if (!cartas) setCartas([resultadoDeLaPeticion]) 

  }, [textBuscador]);
  return (
    <>
      <h1>Vite + React</h1>
      <div className='flex-box'>
        <Cards title={'Mis cartas'} cartasInfo={cartas}/>
      </div>
    </>
  )
}

export default App
