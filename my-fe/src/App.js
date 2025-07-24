import './App.css';
// import Counter from './components/Counter';
// import GreetingForm from './components/GreetingForm';
// import UserList from './components/UserList'
import {CartProvider, ThemeProvider} from './contexts/';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import ToggleTheme from './components/ToggleTheme';
function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <ToggleTheme></ToggleTheme>
        <ProductList></ProductList>
        <ShoppingCart></ShoppingCart>

      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
