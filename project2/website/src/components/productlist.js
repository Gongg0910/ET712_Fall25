import React from "react";
import ModalWindow from '../ModalWindow'; 

const ProductList = ({ products, addToCart, onViewDetails }) => {
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
                                    <span>${product.price}</span>
                                </p>

                                {/* New Button to open the Modal */}
                                <button 
                                    className="btn_viewdetails" 
                                    onClick={() => onViewDetails(product)}>
                                    View Details
                                </button>
                                
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
