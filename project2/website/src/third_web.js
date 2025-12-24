import './App.css';
import ProductList from './components/productlist'; 
import Footer from './components/Footer'; 
import {shirtsProducts, equipmentsProducts } from './productData';
import song_metal from './video/rock_metals.gif'

function ThirdWeb({ addToCart, onViewDetails }) {
  return (
    <div className="App-wrapper"> {/* Changed from 'App' to 'App-wrapper' */}    
      <div >
        
        <div className="hero-container">
          <img src={song_metal} alt="Rock Metal" className="hero-image" />
          <div className="hero-overlay">
            <h1 className="fancy-title">Gongg Guitar Center</h1>
          </div>
        </div>

        <h2>Shirts Section</h2>
        <hr/> 
        {/* Pass onViewDetails to ProductList */}
        <ProductList products={shirtsProducts} addToCart={addToCart} onViewDetails={onViewDetails} />

        <hr/> 

        <h2>Instrument Section</h2>
        <hr/> 
        {/* Pass onViewDetails to ProductList */}
        <ProductList products={equipmentsProducts} addToCart={addToCart} onViewDetails={onViewDetails} />
      </div>

      <Footer /> 
    </div>
  );
}
export default ThirdWeb;