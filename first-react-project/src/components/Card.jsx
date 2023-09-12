import './card.css'
import imageCat from './../assets/lindo-gatito-capucha-roja-generative-ai.avif'

export default function Card({ title, subtitle, text }) {
    return <div className="card">
        <img className='block' height={50} src={imageCat} alt="" />
        <h4>{title}</h4>
        <h6>{subtitle}</h6>
        <p>{text}</p>
    </div>
}