import React from 'react'
import Layout from '../components/common/layout/Layout'
import PrivateRoute from '../components/common/layout/PrivateRoute'
import OrderList from '../components/features/orders/OrderList'

const order = () => {
    return (
        <PrivateRoute>
            <Layout>
                <OrderList />
            </Layout>
        </PrivateRoute>
    )
}

export default order
