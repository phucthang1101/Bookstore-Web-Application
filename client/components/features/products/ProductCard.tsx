import React, { useState } from 'react'
import { Product } from '../../models/product'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';
import agent from '../../../utils/agent';
import { LoadingButton } from '@mui/lab';
import { useStoreContext } from '../../../context/StoreContext';

interface Props {
    product: Product;

}

const ProductCard = ({ product }: Props) => {
    const [loading, setLoading] = useState(false);
    const { setBasket } = useStoreContext();

    const handleAddItem = (productId: number) => {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

    }
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
                        loading={loading}
                        onClick={() => handleAddItem(product.id)}
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