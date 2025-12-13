import './App.css';
import Cart from './components/cart';

function ThirdWeb({ cart, removeFromCart }) {
  return (
    <div className="App">
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
export default ThirdWeb;