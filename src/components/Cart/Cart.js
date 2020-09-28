import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, product) => total + product.price ,0)

    let shippign = 0;

    if(total > 100){
        shippign = 2.99;
    }
    else if(total > 78){
        shippign = 12.99;
    }
    else if(total > 55){
        shippign = 10.99;
    }
    else if(total > 35){
        shippign = 8.99;
    }
    else if(total > 20){
        shippign = 6.99;
    }
    else if(total > 0){
        shippign = 4.99;
    }

    const tax = total / 10;
    const grandTotal = total + shippign + tax;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }


    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Item Order List : {cart.length}</h4>
            <h4>Product Price {formatNumber(total)}</h4>
            <h4>Shipping Cost : {shippign}</h4>
            <h4>Tax + Vat : {formatNumber(tax)}</h4>
            <h4>Total Price : {formatNumber(grandTotal)}</h4>
            
        </div>
    );
};

export default Cart;