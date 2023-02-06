import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div className='Cart-container'>
            <h2>Order Sumarry</h2>
            <h4>selected Item: {cart.length}</h4>
            {
                cart.map(tshart=><p className='order-summary' key={tshart._id}>
                <img src={tshart.picture} alt='' ></img>
               <div className='foter'>
                 {tshart.name}
                <button onClick={()=>handleRemoveCart(tshart)}><b>X</b></button>
               </div>


                </p>)
            }
        </div>
    );
};

export default Cart;