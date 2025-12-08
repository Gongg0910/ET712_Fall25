import './App.css';
import ProductList from './components/productlist'; 
import { guitarProducts, albumProducts } from './productData';

function FirstWeb({ addToCart }) {
  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Gonzalo Guerra supermarket</h1>
      <br/>
      
      <hr/> 
      <h2>Guitars Section</h2>
      <ProductList products={guitarProducts} addToCart={addToCart} />

      <hr/> 
      
      <h2>Albums Section</h2>
      <ProductList products={albumProducts} addToCart={addToCart} />

    </div>
  );
}
export default FirstWeb;
