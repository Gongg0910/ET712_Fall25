import './App.css';
import Cart from './components/cart';

function SecondWeb({ cart, removeFromCart }) {
  return (
    <div className="App">
      <h1 className='apptitle'>Your Shopping Cart</h1>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
export default SecondWeb;
