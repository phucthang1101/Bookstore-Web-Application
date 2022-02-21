import ShareIcon from '@mui/icons-material/Share';
import { LoadingButton } from '@mui/lab';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import agent from '../../../utils/agent';
import { Product } from '../../models/product';
import { setBasket, addBasketItemAsync } from '../../../redux/slices/BasketSlice';
import { useSelector, useStore } from 'react-redux';
import styles from './ProductCard.module.css';

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
            <div className={styles.product_cards_wrapper}>
                <article className={styles.product_card}>
                    <header className={styles.product_card_thumb}>
                        <a href="#">
                            <img src={product.pictureUrl} />
                        </a>
                    </header>
                    <div className={styles.product_card_date}>
                        <span className={styles.product_card_date_day}>11</span>
                        <br />
                        <span className={styles.product_card_date_month}>Jan</span>
                    </div>
                    <div className={styles.product_card__body}>
                        <div className={styles.product_card__category}>
                            <a href="#">pet</a>
                        </div>
                        <h2 className={styles.product_card__title}>
                            <a href="#">
                                {product.name}
                            </a>
                        </h2>
                        <div className={styles.product_card__subtitle}>
                            an ice cream sundae party！
                        </div>
                        <p className={styles.product_card__description}>
                            {product.description}
                        </p>
                    </div>
                    <footer className={styles.product_card__footer}>
                        <span className={`${styles.icon} ion-clock`}></span> 10 mins ago
                        <span className={`${styles.icon}  ion-chatbox`}></span><a href="#"> 145 comments</a>
                    </footer>
                </article>
            </div>
            {/* <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
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
            </Card> */}

        </>
    )
}

export default ProductCard;