import React from 'react'
import BasketComponent from '../components/features/basket/BasketComponent';
import { BasketSummary } from '../components/features/basket/BasketSummary';
import Layout from '../components/common/layout/Layout';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Link from 'next/link';

const Basket = () => {
    return (
        <Layout>
            <BasketComponent />

            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        variant='contained'
                        size='large'
                        fullWidth
                    >
                        <Link href="/checkout">
                            <a>Check Out</a>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Basket;