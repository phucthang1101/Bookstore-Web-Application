import { Container } from '@mui/material';
import React from 'react';
import ProductList from '../../components/features/products/ProductList';
import Layout from '../../components/features/layout/Layout';

const Products = () => {
  return (
    <Layout>
      <Container>
        <ProductList />
      </Container>
      ;
    </Layout>
  );
};

export default Products;
