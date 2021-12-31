import { createAsyncThunk, createEntityAdapter, createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import agent from '../../utils/agent';
import { Product, ProductParams } from '../../components/models/product';
import { HYDRATE } from 'next-redux-wrapper';
import { MetaData } from '../../components/models/pagination';


interface ProductListState {
    productsLoaded: boolean;
    filtersLoaded: boolean;
    status: string;
    brands: string[];
    types: string[];
    productParams: ProductParams;
    metaData: MetaData | null;
}


const productsAdapter = createEntityAdapter<Product>();

//const hydrate = createAction(HYDRATE)
const getAxiosParams = (productParams: ProductParams) => {
    const params = new URLSearchParams();
    params.append('pageNumber', productParams.pageNumber.toString());
    params.append('pageSize', productParams.pageSize.toString());
    params.append('orderBy', productParams.orderBy);
    if (productParams.searchTerm)
        params.append('searchTerm', productParams.searchTerm);
    if (productParams.brands.length > 0)
        params.append('brands', productParams.brands.toString());
    if (productParams.types.length > 0)
        params.append('types', productParams.types.toString());

    return params;
}

export const fetchProductListAsync = createAsyncThunk<Product[], void, { state: RootState }>(
    'productList/fetchProductListAsync',
    async (_, thunkAPI) => {
        const params = getAxiosParams(thunkAPI.getState().productList.productParams);
        try {
           // debugger;
            const response = await agent.productList.list(params);
            //debugger;
           // console.log('response after list(): ', response)
            thunkAPI.dispatch(setMetaData(response.metaData));
            return response.items;


        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const fetchProductDetailAsync = createAsyncThunk<Product, number>(
    'productList/fetchProductDetailAsync',
    async (productId, thunkAPI) => {
       // console.log('fetchProductDetailAsync id: ', productId)
        try {
            return await agent.productList.details(productId);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const fetchFilters = createAsyncThunk(
    'productList/fetchFilters',
    async (_, thunkAPI) => {
        try {
            return agent.productList.fetchFilters();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

const initParams = () => {
    return {
        pageNumber: 1,
        pageSize: 6,
        orderBy: 'name',
        brands: [],
        types: []
    }
}
export const productListSlice = createSlice({
    name: 'productList',
    initialState: productsAdapter.getInitialState<ProductListState>({
        productsLoaded: false,
        filtersLoaded: false,
        status: 'idle',
        brands: [],
        types: [],
        productParams: initParams(),
        metaData: null
    }),
    reducers: {
        setProductParams: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload, pageNumber: 1};
        },
        setPageNumber: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload};
        },
        setMetaData: (state, action) => {
            //console.log('action: setmetadata', action.payload)
            state.metaData = action.payload;
        },
        resetProductParams: (state) => {
            state.productParams = initParams();
        },
        setProduct: (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.productsLoaded = false;
        },
        removeProduct: (state,action) => {
            productsAdapter.removeOne(state, action.payload);
            state.productsLoaded = false;
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchProductListAsync.pending, state => {
            state.status = 'pendingFetchProducts'
        });
        builder.addCase(fetchProductListAsync.fulfilled, (state, action) => {
            // console.log('fetchProductListAsync.fulfilled')
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
           // console.log('done buildercase: ')
        });
        builder.addCase(fetchProductDetailAsync.rejected, (state, action) => {
            //console.log(action);
            state.status = 'idle';
        });

        builder.addCase(fetchFilters.pending, state => {
            state.status = 'pendingfetchFilters'
        })
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.brands = action.payload.brands;
            state.types = action.payload.types;
            state.filtersLoaded = true;
            state.status = 'idle';
        })
        builder.addCase(fetchFilters.rejected, (state, action) => {
           // console.log(action.payload);
            state.status = 'idle';
        });
        builder.addMatcher(
            (action) => action.type === HYDRATE,
            (state, action: PayloadAction<RootState>) => {
               // console.log('HYDRATE...');
                return ({
                    ...state,
                    ...action.payload.productList,
                })
            },
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

export const { setProductParams, resetProductParams, setMetaData, setPageNumber, setProduct, removeProduct } = productListSlice.actions;

