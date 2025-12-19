import './App.css';
import ProductList from './components/productlist'; 
import Footer from './components/Footer'; 
import { guitarProducts, albumProducts, videogameProducts } from './productData';
import song_metal from './video/metal_bands.gif'

function FirstWeb({ addToCart, onViewDetails }) {
  return (
    <div className="App-wrapper"> {/* Changed from 'App' to 'App-wrapper' */}
      <div >
        
        <div className="hero-container">
          <img src={song_metal} alt="Rock Metal" className="hero-image" />
          <div className="hero-overlay">
            <h1 className="fancy-title">Gongg Guitar Center</h1>
          </div>
        </div>

        <h2>Guitars Section</h2>
        <hr/> 
        {/* Pass onViewDetails to ProductList */}
        <ProductList products={guitarProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

        <hr/> 
      
        <h2>Albums Section</h2>
        <hr/> 
        {/* Pass onViewDetails to ProductList */}
        <ProductList products={albumProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

        <hr/> 
      
        <h2>Video Games Section</h2>
        <hr/> 
        {/* Pass onViewDetails to ProductList */}
        <ProductList products={videogameProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

      </div>

      <Footer /> 
    </div>
  );
}
export default FirstWeb;
