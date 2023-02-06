import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TShart from '../TShart/TShart';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshart = useLoaderData();

    const [cart, setCart] = useState([]);


    const handleAddToCart = tshart =>{
        const exist = cart.find(ts=>ts._id===tshart._id)
        if(exist){
            alert("This Product Already Added")
        }
        else{
            const newCart = [...cart, tshart];
            setCart(newCart)
        }
        
    }

    const handleRemoveCart = tshart =>{
       const remaining = cart.filter(ts=>ts._id!==tshart._id);
       setCart(remaining)
    }





    return (
        <div className='home-container'>
            <div className='Shart-container'>
            {
                tshart.map(tshart=><TShart
                key={tshart._id}
                tshart = {tshart}
                handleAddToCart={handleAddToCart}
                
                ></TShart>)
            }
            </div>
            <div className='Cart-container'>
                <Cart 
                cart={cart}
                handleRemoveCart={handleRemoveCart}
                ></Cart>


            </div>
        </div>
    );
};

export default Home;