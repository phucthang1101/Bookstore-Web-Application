import { Product } from '../../models/product'
import { Button, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import React, { useEffect, useState } from 'react';


const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		// fetch('http://localhost:5000/api/products')
		// 	.then(response => response.json())
		// 	.then(data => setProducts(data))
		// let test = fectchData();
		// setProducts(test);

		fectchData()
			.then(response => response && response.json())
			.then(data => setProducts(data));
	}, [])

	const fectchData = async () => {
		let productsFetched
		try {
			productsFetched = await fetch('http://localhost:5000/api/products');
		} catch (error) {
			console.log(error)
		}
		return productsFetched;

	}

	const addProduct = () => {
		setProducts(prevState => [...prevState,
		{
			id: prevState.length + 101,
			name: 'product ' + (prevState.length + 1),
			price: (prevState.length * 100) + 100,
			brand: 'some brand',
			description: 'some desc',
			pictureUrl: ''
		}])
	}
    
    const renderProducts = () => (
        products.map((product: any) => (
            <Grid item xs={3} key={product.id} style={{display: 'flex'}}>
                <ProductCard product={product} />
            </Grid>
        ))
    )

    return (
        <div>
            <Grid container spacing={4}>
                {renderProducts()}
            </Grid>

            <Button onClick={addProduct}>Add Product</Button>
        </div>
    )
}

export default ProductList;