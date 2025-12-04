import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'; 

import FirstWeb from './first_web';
import SecondWeb from './second_web';

function App() {
  const [cart, setCart] = useState([]);

  /* find if the product already exists in the cart */
  const addToCart = (product) => {
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

  /* remove item from the cart */
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/second_web">Cart ({cart.length})</Link>
            </li>
          </ul>
        </nav>

        <div className="content">

          <Routes>
            <Route path="/" element={<FirstWeb addToCart={addToCart} />} />
            <Route 
              path="/second_web" 
              element={<SecondWeb cart={cart} removeFromCart={removeFromCart} />} 
            />
          </Routes>

        </div>
      </div>
    </Router>
  );
}
export default App;