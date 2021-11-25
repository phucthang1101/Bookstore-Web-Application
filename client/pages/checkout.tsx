import React from 'react'
import PrivateRoute from '../components/common/layout/PrivateRoute';
import CheckOutComponent from '../components/features/checkout/CheckOutComponent';

const Checkout = () => {
    return (
        <PrivateRoute>
            <CheckOutComponent />
        </PrivateRoute>
    )
}

export default Checkout;