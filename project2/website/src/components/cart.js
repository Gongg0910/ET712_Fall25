import '../App.css'
import React from 'react'

const Cart = ({cart, removeFromCart})=> {
    return(
        <>
            <h2 className='cart-title'>Your Shopping Cart</h2>
            <section className='cart-container'>
                {cart.length === 0 && <p className='empty-msg'>Your cart is currently empty. Start shopping!</p>}
                {
                    cart.map(
                        (item)=>(
                            <div key={item.id} className='cart-item'>
                                <img className='cart-item-img' src={item.image} alt={item.name}/>
                                <div className="cart-item-details">
                                    <p className='cart-item-name'>{item.name}</p>
                                    <p className='cart-item-price'>${item.price} x {item.qty}</p>
                                </div>
                                <p className='cart-item-total'>Subtotal: ${item.price * item.qty}</p>
                                <button className='btn-cart-remove' onClick={()=>removeFromCart(item.id)}>Remove</button>
                            </div>
                        )
                    )
                }
                <div className="cart-summary">
                    <p className='total-cart-label'>Grand Total:</p>
                    <p className='total-cart-value'>$
                        {cart.reduce((total, item)=>total + item.price*item.qty, 0).toFixed(2)}
                    </p>
                </div>
                {cart.length > 0 && <button className="checkout-btn">Proceed to Checkout</button>}
            </section>
        
        </>
    )
}
export default Cart;
