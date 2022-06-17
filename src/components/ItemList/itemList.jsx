import Item from "../item/item";

import './itemList.css';



function ItemList({products}) {

return (
    <div className="itemlist">
        {
            products.map((prod) => <Item key={prod.id} id={prod.id} title={prod.title} imgUrl={prod.imgUrl} price={prod.price} description={prod.description} stock={prod.stock}/>)  
        }
    </div>

)
    }

export default ItemList