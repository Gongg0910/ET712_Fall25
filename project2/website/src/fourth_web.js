
import './App.css';
import Cart from './components/cart';
import Footer from './components/Footer'; 

function FourthWeb({ cart, removeFromCart }) {
  return (
    <div className="App">
        
      <Cart cart={cart} removeFromCart={removeFromCart} />

      <Footer /> 
    </div>
  );
}
export default FourthWeb;