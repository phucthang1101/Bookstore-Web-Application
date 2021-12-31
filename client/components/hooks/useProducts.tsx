import { useEffect } from "react";
import { productSelectors, fetchProductListAsync, fetchFilters } from '../../redux/slices/ProductListSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store';

export default function useProducts() {
    const productList = useAppSelector(productSelectors.selectAll);
    const { productsLoaded, filtersLoaded, brands, types, metaData } = useAppSelector(state => state.productList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductListAsync());
    }, [productsLoaded, dispatch])

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [filtersLoaded, dispatch]);

    return {
        productList,
        productsLoaded,
        filtersLoaded,
        brands,
        types,
        metaData
    }
} 