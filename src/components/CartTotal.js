import React from 'react'
import "./CartTotal.css"
import NumberFormat from 'react-number-format';

function CartTotal({items}) {

    const getTotalPrice = () =>{
        let total = 0;
        items.forEach((item)=>{
            total += (item.price * item.quantity)
        })
        return total;
    }
    const getTotalItems = () => {
        let total = 0;
        items.forEach((item) => {
          total += parseInt(item.quantity);
        });
        return total;
      };
    return (
        <div className="CartTotal">
            <h3>Subtotal({getTotalItems()} items):
                <span className="CartTotal-price">
                <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
                </span>
                <button className="button">Proceed to checkout</button>
            </h3>
        </div>
    )
}

export default CartTotal
