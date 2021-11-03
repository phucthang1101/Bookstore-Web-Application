import React from 'react';
import Layout from '../../components/features/layout/Layout';
import { Product } from '../../components/models/product';
import { GetServerSideProps } from 'next'
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import Image from 'next/image'
import { Box } from '@mui/system';
import agent from '../../utils/agent';

interface Props {
	product: Product;

}

const SingleProduct = ({ product }: Props) => {

	return (
		<Layout>
			<Grid container spacing={6}>
				<Grid item xs={6} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
					{/* <Box sx={{ width: '50%' }}>
						<Image
							src={product.pictureUrl}
							alt={product.name}
							layout="fill"
						/>
					</Box> */}

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
				</Grid>

			</Grid>
			<h1>{product ? product.name : 'No'}</h1>
			<h4>{product ? product.description : 'No'}</h4>
		</Layout>
	);
};


export const getServerSideProps: GetServerSideProps = async (context) => {
	// const res = await fetch(`http://localhost:5000/api/products/${context.params.slug}`);
	// const data = await res.json()
	//const res = await fetch(`http://localhost:5000/api/products/${context?.params?.slug}`);
	//console.log(context.params);
	let id: number = parseInt(context?.params?.slug as string);
	let res;
	try {
		res = await agent.productList.details(id);
	} catch (error) {
		console.log(error);
	}

	const product: Product = res;
	return {
		props: {
			product,
		},
	}
	// 	  let product : Product;

	//   try {
	//     const res = await fetch(`http://localhost:5000/api/products/${context?.params?.slug}`);
	//     product = await res.json();
	//   } catch (err) {
	//     console.log(err);
	//   }

	//  // return { product };

	// 	return {
	// 		props: {
	// 			product
	// 		}, // will be passed to the page component as props
	// 	}
}
// SingleProduct.getInitialProps = async ({ query }) => {
//   let product;
//   console.log('slug: ',query.slug);
//   try {
//     product = await fetch(`http://localhost:5000/api/products/${query.slug}`);
//     console.log(product);
//   } catch (err) {
//     console.log(err);
//   }

//   return { product, query };
// };
export default SingleProduct;
//export default SingleProduct;