import './App.css';
import ProductList from './components/productlist'; 
import { guitarProducts, albumProducts } from './productData';

import cat_rock from './video/cat_rock.gif'

function ThirdWeb({ addToCart }) {
  return (
    <div className="App">
      <h1 className='apptitle'>Welcomdasdbaisvfsdufkwegfuwevfjsdt</h1>
      <br/>
      
      <hr/> 
      <h2>Guitars Sasdawedawsdection</h2>
      <ProductList products={guitarProducts} addToCart={addToCart} />

      <hr/> 

      <div className="box_about">
        <h1>Cat</h1>
        <img src={cat_rock} alt="Cat theme" className="image" />
        <p className='text_about'>
          A big fact is that cats have 32 muscles in each ear, which 
          allows them to rotate their ears 180 degrees to pinpoint the 
          source of a sound, demonstrating their incredible hearing. 
          Also, cats primarily meow to communicate with humans, as adult 
          cats rarely meow at each other. 
        </p>
      </div>
      
      <h2>Albums Secasdawdasdwdawdtion</h2>
      <ProductList products={albumProducts} addToCart={addToCart} />

    </div>
  );
}
export default ThirdWeb;








{/* <img src={cat_rock} alt="Cat theme" className="image" />
      <p className='text_about'>
        A big fact is that cats have 32 muscles in each ear, which 
        allows them to rotate their ears 180 degrees to pinpoint the 
        source of a sound, demonstrating their incredible hearing. 
        Also, cats primarily meow to communicate with humans, as adult 
        cats rarely meow at each other. 
      </p> */}