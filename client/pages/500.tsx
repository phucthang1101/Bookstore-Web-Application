import { Button, Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/common/layout/Layout';

const ServerError = () => {
    const router = useRouter()
    //console.log(router)
    return (
        <Layout>
            <Container component={Paper}>
                <Typography variant='h3' color='error' gutterBottom>500</Typography>
                <Divider />
                <Typography>Internal server error</Typography>
                <Button onClick={() => router.push("/")}>Go back to the store</Button>
            </Container>
        </Layout>
    )
}

export default ServerError;