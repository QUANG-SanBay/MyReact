import { useReducer, createContext  } from "react";
import reducer from '../reducers/reducer';
import { initCart } from '../reducers/constants';

export const CartContext = createContext()

function CartProvider({children}){
    const [state, dispatch] = useReducer(reducer, initCart);

    const value = {
        cart: state,
        dispatch: dispatch
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;