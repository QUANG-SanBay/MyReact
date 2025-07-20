import './App.css';
// import Counter from './components/Counter';
// import GreetingForm from './components/GreetingForm';
// import UserList from './components/UserList'
import CartProvider from './contexts/CartContext';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
function App() {
  return (
    <CartProvider>
      <ProductList></ProductList>
      <ShoppingCart></ShoppingCart>
    </CartProvider>
  );
}

export default App;
