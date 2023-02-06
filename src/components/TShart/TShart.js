import React from 'react';
import './TShart.css'

const TShart = ({tshart, handleAddToCart}) => {
    const {picture, name, price}= tshart;
    return (
        <div className='TShart-container'>
            <img src={picture} alt=""></img>
            <h3>Brand Name: {name}</h3>
            <h5>price: ${price}</h5>
            <button onClick={()=>handleAddToCart(tshart)}>Buy Now</button>
        </div>
    );
};

export default TShart;