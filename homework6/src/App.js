import React from 'react';
import './App.css';
import ProductCard from './ProductCard';
import image_1 from './images/basketball.webp'
import image_2 from './images/gym_short.webp'
import image_3 from './images/hat.jpg'
import image_4 from './images/headphones.jpg'
import image_5 from './images/phone.jpg'
import image_6 from './images/shirt.webp'
import image_7 from './images/smart_watch.webp'
import image_8 from './images/soccer_ball.jpg'
import image_9 from './images/soda.avif'
import image_10 from './images/umbrella.jpg'

const products = [
  { item: 1,  image: `${image_4}`,  name: "Headphones",   price: 99.99,  stonk: true  },
  { item: 2,  image: `${image_7}`,  name: "Smart Watch",  price: 150.00, stonk: false },
  { item: 3,  image: `${image_10}`, name: "Umbrella",     price: 20.00,  stonk: true  },
  { item: 4,  image: `${image_2}`,  name: "Gym short",    price: 15.00,  stonk: true  },
  { item: 5,  image: `${image_5}`,  name: "Phone",        price: 500.00, stonk: false },
  { item: 6,  image: `${image_8}`,  name: "Soccer ball",  price: 30.00,  stonk: true  },
  { item: 7,  image: `${image_1}`,  name: "Basketball",   price: 25.00,  stonk: false },
  { item: 8,  image: `${image_9}`,  name: "Soda",         price: 6.00,   stonk: false },
  { item: 9,  image: `${image_3}`,  name: "Hat",          price: 8.00,   stonk: true  },
  { item: 10, image: `${image_6}`,  name: "Shirt",        price: 20.00,  stonk: true  },
];

function App() {
  return (
    <>
    <div>
      <h1 className='centertitle'>Gonzalo G store</h1>
      <div className="container">

        {/* Was struggling using array and putting into between div, so I found a way */}
        {/* I learned that map is like looking into a map as array and inside or looking at it, there is stuffs */}
        
        {products.map(props => (
          <ProductCard sales={props.item} props={props} />
        ))}

      </div>
    </div>
    </>
  );
}
export default App;
