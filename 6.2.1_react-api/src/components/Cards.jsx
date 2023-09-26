import { useEffect, useState } from 'react';
import RowCard from './RowCard'

export default function Cards({url}) {
    // numero de elementos cartasInfo.length
    // indices
    // valor de cada elemento
    // numero de cartas por renglon

    /**
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const filaAnimals = [];
// filaAnimals [{key:0, data: ['ant', 'bison']}, {key:1, data: ['camel', 'duck']} ]
const numeroDeElementosPorFila = 3;

let indice = 0;
const controlDeFilas = animals.length/numeroDeElementosPorFila;
for(let i= 0; i < controlDeFilas; i++) {
  filaAnimals.push({
    key: i,
    data: animals.slice(indice, indice + numeroDeElementosPorFila),
  })
  indice += numeroDeElementosPorFila;
}

console.log(filaAnimals);


filaAnimals.push({
    key: 0,
    data: animals.slice(0, 2);
  })
  filaAnimals.push({
    key: 0,
    data: animals.slice(2, 4);
  })
  filaAnimals.push({
    key: 0,
    data: animals.slice(4, 6);
  })

**/
    const [rowCards, setRowCards] = useState([]);
    const [infoCards, setInfoCards] = useState([]);

    /*
        info = [{name, weight}, ... , {}]
        rowCards = [
           renglon => { key: "nombre", data: [{name, weight}, {}, {}]}
            { key: "nombre", data: [{}, {}, {}]}
        ]
        
    */

    const hacerFilas = () => {
        const numeroDeElementosPorFila = 3;
        let indice = 0;
        const controlDeFilas = infoCards.length/numeroDeElementosPorFila;
        for(let i= 0; i < controlDeFilas; i++) {
            /* filaAnimals.push({
              key: i,
              data: animals.slice(indice, indice + numeroDeElementosPorFila),
            }) */
            console.log('->', indice, indice + numeroDeElementosPorFila);
            setRowCards([
                ...rowCards,
                {
                    key: `${i}-${controlDeFilas}`,
                    data: infoCards.slice(indice, indice + numeroDeElementosPorFila),
                }
            ]);
            indice += numeroDeElementosPorFila;
          }
    };
  
    const pedirDatos = () => fetch(url, {
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
            });

    useEffect(() => {
        if (infoCards && infoCards.length === 0) {
            pedirDatos()
            .then((pokemons) => {
                setInfoCards(pokemons);
            })
        } else {
            hacerFilas();
        }
        
    }, [infoCards]);

    return <div className='columns'>
        {rowCards.map((rowCard) => 
        //  { key: "nombre", data: "https://pokeapi.."}
            <RowCard key={rowCard.key} cartasInfo={rowCard.data} />)
        } 
    </div>
}
