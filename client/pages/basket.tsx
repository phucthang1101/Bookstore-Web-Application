import React from 'react'
import BasketTable from '../components/features/basket/BasketTable';
import { BasketSummary } from '../components/features/basket/BasketSummary';
import Layout from '../components/common/layout/Layout';
import { Button, Grid, Typography } from "@mui/material";
import Link from 'next/link';
import { useAppSelector } from '../redux/store';

const Basket = () => {
    const { basket } = useAppSelector(state => state.basket);


    return (
        <Layout>
            {basket ?
                (
                    <BasketTable items={basket.items} />
                ) :
                (
                    <Typography variant='h3'>Your basket is empty</Typography>
                )
            }

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