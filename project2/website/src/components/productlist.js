import React from "react";
import '../App.css'
import guitar_pantera_1 from '../images/guitar_pantera_Far_Beyond_Driven.jpg'
import guitar_pantera_2 from '../images/guitar_pantera_1981_Dean_ML_Dean_from_Hell.jpg'
import guitar_pantera_3 from '../images/guitar_pantera_Turquoise.jpg'

const products = [
    {id :1, name:"Far Beyond Driven - Dimebag Darrell",  price:1,    was:1, image:guitar_pantera_1},
    {id :2, name:"1981 Dean ML Dean from Hell - Dimebag Darrell", price:1.5,  was:1, image:guitar_pantera_2},
    {id :3, name:"Turquoise - Dimebag Darrell", price:3,    was:1, image:guitar_pantera_3}
]

const ProductList = ({addToCart}) => {
    return(
        <>
            <h2 className="producttitle">Products</h2>
            <section className="cardcontainer">
                {
                    products.map(
                        (product)=>(
                            <div key={product.id} className="card">
                                <img src={product.image}/>
                                <p className="productname">
                                    {product.name}
                                    <s>{product.was}/lb</s>
                                    <span>${product.price}</span>
                                </p>

                                <button className="btn_addcart" onClick={()=>addToCart(product)}>
                                    Add to cart
                                </button>
                                
                            </div>
                        )
                    )
                }
            </section>        
        </>
    );
}
export default ProductList;