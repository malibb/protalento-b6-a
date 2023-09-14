import Card from './Card'


export default function Cards({title, cartasInfo}) {
    console.log(typeof cartasInfo);
    return <>
    <h1>{title}</h1>
        {cartasInfo.map((carta) => 
        //  { name: "nombre", url: "https://pokeapi.."}
            <Card key={carta.key} url={carta.url} />)
        }
    </>
}
