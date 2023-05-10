import Carrito from "./Carrito.svg"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div>
        <img src={Carrito} alt="Simbolo de carrito de compras" />
        <span>0</span>
    </div>
    
  )
}

export default CartWidget