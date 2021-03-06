import { LoadingButton } from '@mui/lab';
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import agent from '../../../utils/agent';
import { Product } from '../../models/product';
import { removeBasketItemAsync, setBasket, addBasketItemAsync } from '../../../redux/slices/BasketSlice';

interface Props {
    product: Product;
}

const ProductDetail = ({ product }: Props) => {
    const { basket, status } = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    const {status: productStatus} = useAppSelector(state => state.productList);

    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const item = basket?.items.find((i:any) => i.productId === product?.id);

    useEffect(() => {
        if (item) setQuantity(item.quantity);
    }, [item])

    const handleInputChange = (event: any) => {
        if (event?.target.value > 0) {
            setQuantity(event?.target.value);
        }
    }

    const handleUpdateCard = () => {
        if (!item || quantity > item.quantity) {

            const updatedQuantity = item ? quantity - item.quantity : quantity;

            dispatch(addBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }));

        } else {

            const updatedQuantity = item.quantity - quantity;

            dispatch(removeBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }));
        }
    }
    return (
        <Grid container spacing={6}>
            <Grid item xs={6} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <img src={product.pictureUrl} alt={product.name} style={{ width: '50%' }} />
            </Grid>

            <Grid item xs={6} >
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{ mb: '' }} />
                <Typography variant='h4' color='secondary'>
                    ${(product.price / 100).toFixed(2)}
                </Typography>

                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity In Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            onChange={handleInputChange}
                            variant='outlined'
                            type='number'
                            label='Quantity in Cart'
                            fullWidth
                            value={quantity}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <LoadingButton
                            disabled={item?.quantity === quantity}
                            loading={status.includes('pending')}
                            onClick={handleUpdateCard}
                            sx={{ height: '55px' }}
                            color='primary'
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                            {item ? 'Update Quantity' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default ProductDetail;