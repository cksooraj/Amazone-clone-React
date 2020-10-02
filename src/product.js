import React from 'react';
import './Product.css';

function product({id ,titile , image ,price , rating }) {
    return (
        <div className="product">
            <div className="product_info">
            <p>{titile}</p>
            <p className="product_price">
               <small>₹</small>
               <strong>{price}</strong> 
                </p>
            <div className="product_rating">
            {Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    ))}
            </div>
            </div>

            <img src={image} alt=""/>
            <button>Add to Basket</button>
        
        </div>
    );
}

export default product
