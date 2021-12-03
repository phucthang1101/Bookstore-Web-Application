import React, { useEffect, useState } from 'react'
import PrivateRoute from '../components/common/layout/PrivateRoute';
import CheckOutComponent from '../components/features/checkout/CheckOutComponent';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import agent from '../utils/agent';
import { useAppDispatch } from '../redux/store';
import { setBasket } from '../components/features/basket/BasketSlice';
import Layout from '../components/common/layout/Layout';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51K105pGSqnDR4vBDaDGyaDGLPMUlrGuMni0Cp9iGCmM68SBxlSdautdONJ337iovQNABudUBigf7MU0p7W0p5YbM00HPXVta0c');

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch]);



    return (
        <Layout>
            <PrivateRoute>
                <Elements stripe={stripePromise}>
                    <CheckOutComponent />
                </Elements>
            </PrivateRoute>
        </Layout>
    )
}

export default Checkout;