import {ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM} from './constants'

function reducer(state, action){
    switch(action.type){
        case ADD_ITEM:
            // Tìm xem sản phẩm đã có trong giỏ hàng chưa
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                // Nếu đã có, tạo một mảng mới và cập nhật quantity
                const updatedCart = [...state];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                // Nếu chưa có, thêm sản phẩm mới với quantity là 1
                return [
                    ...state,
                    { ...action.payload, quantity: 1 }
                ]
            }
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload)
            // filter sẽ trả về 1 mảng mới với các phần tử có điều kiện đúng (ở đây là item.id khác action.payload)
        case CLEAR_ITEM:
            return []
        default:
            throw new Error('invalid action')
    }
}
export default reducer;