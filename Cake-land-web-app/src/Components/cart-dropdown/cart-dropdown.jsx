import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../CustomButton/custom-button';
import './cart-dropdown.scss';


const CartDropDown = ({cartItems}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                    {
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
     );
}
 
const mapStateToProps = ({ cart: {cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);