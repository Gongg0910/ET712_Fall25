import './App.css';
import ProductList from './components/productlist';

function FirstWeb({ addToCart }) {
  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Gonzalo Guerra supermarket</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}
export default FirstWeb;
