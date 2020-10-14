import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    //stripe only accept price in cents, that why multiply with 100
    const priceForStripe= price * 100;
    const publishableKey= 'pk_test_51Hc9OtJF0nxV9f3r3ybqaV7S0wLQmD34OVjDtFOUZBrFPXciWYS6BXYipU4O5rTAECLiTXpHwBVA8t507jO8tGMG00lKAlB2u9'

    const onToken=token=>{
        console.log(token);
        alert('Payment Successfull')
    }
    return(
        <StripeCheckout 
        label='PAY-NOW'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay-now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;