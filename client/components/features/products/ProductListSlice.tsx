import { createAsyncThunk, createEntityAdapter, createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store';
import agent from '../../../utils/agent';
import { Product } from '../../models/product';
import { HYDRATE } from 'next-redux-wrapper';

const productsAdapter = createEntityAdapter<Product>({
    selectId: (product) => product.id
});

//const hydrate = createAction(HYDRATE)

export const fetchProductListAsync = createAsyncThunk<Product[]>(
    'productList/fetchProductListAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.productList.list();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const fetchProductDetailAsync = createAsyncThunk<Product, number>(
    'catalog/fetchProductDetailAsync',
    async (productId, thunkAPI) => {
        console.log('fetchProductDetailAsync id: ', productId)
        try {
            return await agent.productList.details(productId);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)
export const productListSlice = createSlice({
    name: 'productList',
    initialState: productsAdapter.getInitialState({
        productsLoaded: false,
        status: 'idle'
    }),
    reducers: {},
    extraReducers: (builder => {
        // builder.addCase(HYDRATE as any, (state, action: PayloadAction<RootState>) => {
        //     // productsAdapter.setAll(state, action.payload.productList.entities);
        //     state.status = 'HydratePedingFetchProducts'
        //     state.productsLoaded = true;
        // });

        builder.addCase(fetchProductListAsync.pending, state => {
            state.status = 'pendingFetchProducts'
        });
        builder.addCase(fetchProductListAsync.fulfilled, (state, action) => {
             console.log('fetchProductListAsync.fulfilled')
            productsAdapter.setAll(state, action.payload)
            state.status = 'pendingFetchProducts'
            state.productsLoaded = true;
        });

        builder.addCase(fetchProductListAsync.rejected, state => {
            state.status = 'idle'
        });

        builder.addCase(fetchProductDetailAsync.pending, (state) => {
            state.status = 'pendingFetchProductDetail';
        });
        builder.addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.status = 'idle';
             console.log('done buildercase: ')
        });
        builder.addCase(fetchProductDetailAsync.rejected, (state, action) => {
            //console.log(action);
            state.status = 'idle';
        });
        builder.addMatcher(
            (action) => action.type === HYDRATE,
            (state, action: PayloadAction<RootState>) => {
                console.log('HYDRATE...');
                return ({
                ...state,
                ...action.payload.productList,
            })},
        );

    })
    // extraReducers: {
    //     [HYDRATE]: (state, action: PayloadAction<RootState>) => {
    //         console.log('HYDRATE', state, action.payload);
    //         return {
    //             ...state,
    //             ...action.payload.productList,
    //         };
    //     },
    //     [fetchProductListAsync.fulfilled.toString()]: (state, action) => {
    //         productsAdapter.setAll(state, action.payload)
    //         state.status = 'pendingFetchProducts'
    //         state.productsLoaded = true;
    //     },
    //     [fetchProductListAsync.pending.toString()]: state => {
    //         state.status = 'pendingFetchProducts'
    //     },
    //     [fetchProductListAsync.rejected.toString()]: state => {
    //         state.status = 'idle'
    //     },
    //     [fetchProductDetailAsync.pending.toString()]: state => {
    //         state.status = 'pendingFetchProductDetail';
    //     },
    //     [fetchProductDetailAsync.fulfilled.toString()]: (state, action) => {
    //         productsAdapter.upsertOne(state, action.payload);
    //         state.status = 'idle';
    //         console.log('done fetchProductDetailAsync fulfilled: ')
    //     },
    //     [fetchProductDetailAsync.rejected.toString()]: state => {
    //         state.status = 'idle';
    //     },

    // }

})

const selectors = productsAdapter.getSelectors(
    (state: RootState) => state.productList,
);
export const selectProductList = selectors.selectAll;

export const productSelectors = productsAdapter.getSelectors((state: RootState) => state.productList);



