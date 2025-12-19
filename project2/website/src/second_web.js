import './App.css';
import ProductList from './components/productlist';
import Footer from './components/Footer'; 
import { picksProducts, sellProducts } from './productData';
import song_metal from './video/metal_bands.gif'

function SecondWeb({ addToCart, onViewDetails }) {
  return (
    <div className="App">
      
      <div className="hero-container">
          <img src={song_metal} alt="Rock Metal" className="hero-image" />
          <div className="hero-overlay">
            <h1 className="fancy-title">Gongg Guitar Center</h1>
          </div>
      </div>

      <h2>Picks Section</h2>
      <hr/> 
      <ProductList products={picksProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

      <hr/>     

      <h2>Product Section</h2>
      <hr/> 
      <ProductList products={sellProducts} addToCart={addToCart} onViewDetails={onViewDetails} />
      
      <Footer /> 
    </div>
  );
}
export default SecondWeb;
