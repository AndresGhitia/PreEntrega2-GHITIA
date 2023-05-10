import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="CardsContainer">
            <section className="Card">
                <img src={img} alt={name} className="CardImg" />
                    <p className="CardTxt">{name}</p>
                    <p className="CardTxt">${price}</p>
                    <footer>
                        <Link to={`/item/${id}`} className='OptionCard' >Ver detalles</Link>
                    </footer>  
                </section>
        </article>
    )
}

export default Item