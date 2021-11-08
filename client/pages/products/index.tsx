import { Container } from '@mui/material';
import React from 'react';
import ProductList from '../../components/features/products/ProductList';
import Layout from '../../components/features/layout/Layout';

import { useAppSelector, wrapper } from '../../redux/store';
import { fetchProductListAsync, productSelectors, selectProductList } from '../../components/features/products/ProductListSlice';
import { GetStaticProps } from 'next';
import {NextPage} from 'next';
import { Product } from '../../components/models/product';


const Products = () => {
 // const products = useAppSelector(productSelectors.selectAll);

  const productsList = useAppSelector(selectProductList)
  //console.log({products}, {productsList})
  return (
    <Layout>
      <Container>
        <ProductList products={productsList}/>
      </Container>
      ;
    </Layout>
  );
};


export const getStaticProps : GetStaticProps = wrapper.getStaticProps(store => async () => {

  await store.dispatch(fetchProductListAsync());

  //const newState = store.getState();
  //const productList : Product[] = newState.productList.entities;

  //console.log('State on server', productList, productList.entities);


  return{
    props:{
      
    }
  };


})
export default Products;
