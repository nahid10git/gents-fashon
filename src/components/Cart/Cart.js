import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div className='Cart-container'>
            <h2>Order Sumarry</h2>
            <h4>selected Item: {cart.length}</h4>
            {
                cart.map(tshart=><p className='order-summary' key={tshart._id}>
                {tshart.name}
                <img src={tshart.picture} alt='' ></img>
                <button onClick={()=>handleRemoveCart(tshart)}>X</button>


                </p>)
            }
        </div>
    );
};

export default Cart;