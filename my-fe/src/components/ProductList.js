import { useContext } from 'react';
import {CartContext} from '../contexts/CartContext';
import {removeItem, clearItem} from '../reducers/actions';
function ProductList(){

    const { cart, dispatch }= useContext(CartContext)
    return(
        <div>
            <h2>Giỏ hàng</h2>
            <ul>
                {cart.map((item)=>(
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quanlity}</p>
                        <button onClick={()=>dispatch(removeItem(item.id))}>Xóa</button>
                    </li>
                ))}
            </ul>
            <button onClick={()=> dispatch(clearItem())}>Xóa tất cả</button>
        </div>
    )
}
export default ProductList;