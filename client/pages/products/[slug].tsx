import React from 'react';
import Layout from '../../components/features/layout/Layout';
import { Product } from '../../components/models/product';
import { GetServerSideProps } from 'next';
import agent from '../../utils/agent';
import ProductDetail from '../../components/features/productDetail/ProductDetail';

interface Props {
	product: Product;

}

const SingleProduct = ({ product }: Props) => {

	return (
		<Layout>
			<ProductDetail product={product}/>
		</Layout>
	);
};


export const getServerSideProps: GetServerSideProps = async (context) => {
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
}

export default SingleProduct;
