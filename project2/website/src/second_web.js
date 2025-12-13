import './App.css';
import ProductList from './components/productlist'; 
import { picksProducts, sellProducts } from './productData';

function SecondWeb({ addToCart, onViewDetails }) {
  return (
    <div className="App">
      
      <h2>Picks Section</h2>
      <hr/> 
      <ProductList products={picksProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

      <hr/>     

      <h2>Product Section</h2>
      <hr/> 
      <ProductList products={sellProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

    </div>
  );
}
export default SecondWeb;
