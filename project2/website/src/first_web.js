import './App.css';
import ProductList from './components/productlist'; 
import { guitarProducts, albumProducts } from './productData';

function FirstWeb({ addToCart, onViewDetails }) {
  return (
    <div className="App">
      <br/>
      
      <h2>Guitars Section</h2>
      <hr/> 
      {/* Pass onViewDetails to ProductList */}
      <ProductList products={guitarProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

      <hr/> 
      
      <h2>Albums Section</h2>
      <hr/> 
      {/* Pass onViewDetails to ProductList */}
      <ProductList products={albumProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

    </div>
  );
}
export default FirstWeb;
