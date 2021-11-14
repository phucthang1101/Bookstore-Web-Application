import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import ProductList from '../../components/features/products/ProductList';
import Layout from '../../components/common/layout/Layout';
import { useAppDispatch, useAppSelector, wrapper } from '../../redux/store';
import { fetchProductListAsync, fetchFilters, setProductParams, setPageNumber } from '../../components/features/products/ProductListSlice';
import { GetStaticProps } from 'next';
import ProductSearch from '../../components/features/products/ProductSearch';
import RadioButtonGroup from '../../components/common/buttons/RadioButtonGroup';
import CheckBoxButtonGroup from '../../components/common/buttons/CheckBoxButtonGroup';
import AppPagination from '../../components/common/AppPagination';


const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'priceDesc', label: 'Price - High to low' },
  { value: 'price', label: 'Price - Low to high' },
]
interface Props{
  test: string|null;
}
const Products = ({test}:Props) => {
  //const newState = useAppSelector(state => state.productList);

  const { productsLoaded, filtersLoaded, brands, types, productParams, metaData } = useAppSelector(state => state.productList);
  const dispatch = useAppDispatch();
 // console.log('render: ',{metaData})
  return (
    <Layout>
      <Container>
        <Grid container columnSpacing={4}>
          <Grid item xs={3}>
            <Paper sx={{ mb: 2 }}>
              <ProductSearch />
            </Paper>
            <Paper sx={{ mb: 2, p: 2 }}>
              <RadioButtonGroup
                selectedValue={productParams.orderBy}
                options={sortOptions}
                onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
              />
            </Paper>
            <Paper sx={{ mb: 2, p: 2 }}>
              <CheckBoxButtonGroup
                items={brands}
                checked={productParams.brands}
                onChange={(items) => dispatch(setProductParams({ brands: items }))} />
            </Paper>

            <Paper sx={{ mb: 2, p: 2 }}>
              <CheckBoxButtonGroup
                items={types}
                checked={productParams.types}
                onChange={(items) => dispatch(setProductParams({ types: items }))} />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <ProductList />
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={9} sx={{ mb: 2 }}>
          {metaData &&
                <AppPagination 
                    metaData={metaData}
                    onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
                />}
          </Grid>
        </Grid>

      </Container>

    </Layout>
  );
};


export const getStaticProps = wrapper.getStaticProps(store => async () => {
  
   const newState = store.getState().productList;
  //const productList : Product[] = newState.productList.entities;

 // console.log('State on server', newState);

  // try {
  //   const p1 = store.dispatch(fetchProductListAsync());
  //   const p2 = store.dispatch(fetchFilters());

  //   await Promise.all([p1, p2]);
  // } catch (e) {
  //   console.log(e);
  // }
  // if (!newState.productsLoaded) 
	// 	{
	// 		console.log('useEffect fetchProductListAsync', newState.productsLoaded)

		
	// 	}
  //debugger;
    await store.dispatch(fetchProductListAsync());
  // let p1 = await store.dispatch(fetchProductListAsync());
   await store.dispatch(fetchFilters());
  // console.log({p1})
  return {
    props: {
      test: null
    }
  };
})

export default Products;
