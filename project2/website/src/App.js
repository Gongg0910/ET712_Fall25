import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'; 

import FirstWeb from './first_web';
import SecondWeb from './second_web';
import ThirdWeb from './third_web';
import ModalWindow from './ModalWindow'; 

function App() {
  const [cart, setCart] = useState([]);
  // State for the modal window
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* Handler to open the modal */
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  /* Handler to close the modal */
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // ... (addToCart and removeFromCart functions remain the same) ...
  const addToCart = (product) => {
    // ... same logic ...
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          } 
          else {
            return item;
          }
        })
      );
    } 
    else {
      setCart([
        ...cart, 
        { 
          ...product, 
          qty: 1,
        }
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  return (
    <>
    
    <Router>
      <div className="App">
      
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Guitars/Albums</Link>
            </li>
            <li>
              <Link to="/second_web">Picks/Products</Link>
            </li>
            <li>
              <Link to="/third_web">Cart {cart.length}</Link>
            </li>
          </ul>
        </nav>
        <h1>Gongg Guitar Store</h1>

        <div className="content">
          <Routes>
            <Route path="/"           element={<FirstWeb addToCart={addToCart} onViewDetails={handleViewDetails} />} />
            <Route path="/second_web" element={<SecondWeb addToCart={addToCart} onViewDetails={handleViewDetails} />} />
            <Route path="/third_web"  element={<ThirdWeb cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
      </div>
      
    </Router>

    <ModalWindow product={selectedProduct} onClose={handleCloseModal} />
    
    </>
    
  );
}
export default App;
