import React from 'react';
import './stripe-button.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ip4wpSGbelzIZUmeyVdhz3SY8YEcTCzszZttZ4HLyiAO6vvCMVr9KdnZeJ9giuVyGKzOUenCMjK4U3vKwpWUCC300xnhQlWir';
    const onToken = token => {
        console.log(token);
        alert('payment successfull');
    }
    return ( 
        <StripeCheckout 
        label="Pay Now"
        name="Cake Land"
        billingAddress
        shippingAddress
        currency="INR"
        image='https://www.recipetineats.com/wp-content/uploads/2016/06/Red-Velvet-Layer-Cake_4.jpg'
        description={`Your Total is ₹${price}`}
        amount={priceForStripe}
        panelLabel="pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
     );
}

 
export default StripeCheckoutButton;