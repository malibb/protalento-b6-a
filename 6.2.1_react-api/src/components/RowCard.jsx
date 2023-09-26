import Card from './Card'


export default function Cards({cartasInfo}) {
    console.log(typeof cartasInfo);
    return <div className='columns'>
        {cartasInfo.map((carta) => 
        //  { name: "nombre", url: "https://pokeapi.."}
            <Card key={carta.key} url={carta.url} />)
        }
    </div>
}
