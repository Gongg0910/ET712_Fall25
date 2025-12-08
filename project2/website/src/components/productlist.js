import React from "react";
import '../App.css'


const ProductList = ({ products, addToCart }) => {
    return(
        <>
            <section className="cardcontainer">
                {
                    products.map(
                        (product)=>(
                            <div key={product.id} className="card">
                                <img src={product.image} alt={product.name}/>
                                <p className="productname">
                                    {product.name}
                                    <s>${product.was}/lb</s> 
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
