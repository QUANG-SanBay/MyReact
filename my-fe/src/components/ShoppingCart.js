import React, { useContext } from 'react';
import  {CartContext}  from '../contexts/CartContext';
// import { ADD_ITEM } from '../reducers/constants';
import {addItem} from '../reducers/actions'

const products = [
    { id: 1, name: 'iPhone 15', price: 1000 },
    { id: 2, name: 'Macbook Pro', price: 2000 },
    { id: 3, name: 'AirPods Pro', price: 250 },
];

function ProductList() {
    const { dispatch } = useContext(CartContext);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => dispatch(addItem({id: product.id, name: product.name, price: product.price}))}>
                            Thêm vào giỏ
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;