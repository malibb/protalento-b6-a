import Card from './Card'


export default function Cards({title, cartasInfo}) {
    console.log(typeof cartasInfo);
    return <>
    <h1>{title}</h1>
        {cartasInfo.map((carta) => 
            <Card key={carta.key} title={carta.title} subtitle={carta.subtitle} text={carta.text} />)
        }
    </>
}
