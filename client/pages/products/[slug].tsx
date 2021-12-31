import React from 'react';
import Layout from '../../components/common/layout/Layout';
import { Product } from '../../components/models/product';
import { GetServerSideProps } from 'next';
import agent from '../../utils/agent';
import ProductDetail from '../../components/features/productDetail/ProductDetail';
import { useAppSelector, wrapper } from '../../redux/store';
import { fetchProductDetailAsync, productSelectors } from '../../redux/slices/ProductListSlice';
import { useStore } from 'react-redux';

interface Props {
	product: Product;
	id: number;

}

const SingleProduct = ({ id }: Props) => {
	//const SingleProduct = (props:any) => {

	const product = useAppSelector(state => productSelectors.selectById(state, id));
	console.log('State on render', { id }, { product });
	return (
		<Layout>
			{product ? <ProductDetail product={product} /> : ''}
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {

	let id: number = parseInt(params?.slug as string);

	await store.dispatch(fetchProductDetailAsync(id));



	//const { productList } = store.getState();
	//const productList = newState.productList.entities;

	//const product = productList?.find((e:any) => e.id === id);
	//const product = useAppSelector(state => productSelectors.selectById(state, id));

	//console.log('State on server', productList, productList.entities);

	return {
		props: {
			id
		},
	};



	// let id: number = parseInt(params?.slug as string);
	// let res;
	// console.log('id: ', id)

	// try {
	// 	res = await agent.productList.details(id);
	// } catch (error) {
	// 	console.log(error);
	// }

	// const product: Product = res;
	// return {
	// 	props: {
	// 		product,
	// 	},
	// }

})

export default SingleProduct;
