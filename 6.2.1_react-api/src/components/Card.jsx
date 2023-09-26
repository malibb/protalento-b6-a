import { useEffect, useState } from "react";

//export default function Card({ title, subtitle, text, url, alt }) {
export default function Card({url}) {

    const [pokemon, setPokemon] = useState({
        sprites: {
            front_default: ''
        }
    });

    useEffect(() => {
      fetch(url, {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
      })
        .then(response => response.json())
        .then((pokemon) => {
            setPokemon(pokemon);
        });
  }, []);

    return <div className="column">
        <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
            <img className="image is-48x48" src={pokemon.sprites.front_shiny} alt="Placeholder image"/>
        </div>
        <div className="media-content">
          <p className="title is-4">{pokemon.name}</p>
          <p className="subtitle is-6">{pokemon.location_area_encounters}</p>
        </div>
      </div>
  
      <div className="content">
      {pokemon.weight}
      </div>
    </div>
  </div>
    </div>
}