import React from 'react'

function CheckoutPage() {

    const getCheckout = () => {
        Checkout.configure({
            session: {
                id: '<your_initiate_checkout_session_ID>'
            }
        });
    }
    return (
        <>
            <div className='container'>

            </div>
        </>
    )
}

export default CheckoutPage