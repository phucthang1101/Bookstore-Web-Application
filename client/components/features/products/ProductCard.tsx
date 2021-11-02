import React from 'react'
import { Product } from '../../models/product'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';

interface Props {
    product: Product;

}

const ProductCard = ({ product }: Props) => {
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
                    <IconButton aria-label="share">
                        <AddShoppingCartIcon />
                    </IconButton>
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