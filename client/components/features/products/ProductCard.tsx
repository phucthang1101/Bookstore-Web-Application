import ShareIcon from '@mui/icons-material/Share';
import { LoadingButton } from '@mui/lab';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import agent from '../../../utils/agent';
import { Product } from '../../models/product';
import { setBasket, addBasketItemAsync } from '../basket/BasketSlice';
import {useSelector, useStore} from 'react-redux';

interface Props {
    product: Product;

}

const ProductCard = ({ product }: Props) => {
   
    const { status } = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch();


    // const handleAddItem = (productId: number) => {
    //     setLoading(true);
    //     agent.Basket.addItem(productId)
    //         .then(basket => dispatch(setBasket(basket)))
    //         .catch(error => console.log(error))
    //         .finally(() => setLoading(false));

    // }
    return (
        <>
            <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            {product.name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={product.name}
                    titleTypographyProps={{
                        sx: { fontWeight: "bold", color: 'primary.main' }
                    }}
                />
                <CardMedia
                    sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent sx={{ mb: 'auto' }}>
                    <Typography gutterBottom variant="h6" component="div" color='secondary'>
                        {product.brand} - ${(product.price / 100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    {/* <IconButton aria-label="share">
                        <AddShoppingCartIcon />
                    </IconButton> */}
                    <LoadingButton
                        loading={status.includes('pendingAddItem' + product.id)}
                        onClick={() => dispatch(addBasketItemAsync({ productId: product.id }))}
                        size='small'
                    >
                        Add to cart
                    </LoadingButton>
                    <Button size="small">Learn More</Button>
                    <Button size="small">
                        <Link href={`/products/${product.id}`}>
                            <a>View</a>
                        </Link>
                    </Button>
                </CardActions>
            </Card>

        </>
    )
}

export default ProductCard;