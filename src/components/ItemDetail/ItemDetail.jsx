import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  return (
    <article className="CardsContainer">
      <section className="Card">
        <img src={img} alt={name} className="CardImg" />
            <p className="CardTxt">{name} : ${price}</p>
            <p className="CardTxt">{description}</p> 
            <p className="CardTxt">Stock disponible:{stock}</p>
        <footer>
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
        </footer>
      </section>
    </article>
  );
};

export default ItemDetail;
