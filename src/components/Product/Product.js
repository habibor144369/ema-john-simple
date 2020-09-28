import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    // console.log(props)
    const{img, name, seller, price, stock} = props.products

    return (
        <div className = 'product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
             <h4 className='product-name'>{name}</h4>
             <br/>

             <p>
                 <small>by : {seller}</small>
            </p>

             <p>$ {price}</p>
        

             <p>
                 <samll> Only {stock} left in stock - Order soon</samll>
             </p>
             <button onClick = {() => props.handleAddProduct(props.products)} className = 'main-button'> 
             <FontAwesomeIcon icon={faShoppingCart} />Add to card
             </button>

            </div>
        </div>
    );
};

export default Product;
