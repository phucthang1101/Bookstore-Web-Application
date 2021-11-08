import { configureStore, StateFromReducersMapObject, DeepPartial } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { basketSlice } from "../components/features/basket/BasketSlice";
import { productListSlice } from "../components/features/products/ProductListSlice";
import { HYDRATE, createWrapper } from 'next-redux-wrapper'


const rootReducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        console.log('state: ', state, 'action: ', action);
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    } else {
        return {
            basket: basketSlice.reducer,
            productList: productListSlice.reducer
        }
    }
}

// export type RootState = StateFromReducersMapObject<typeof rootReducer>

// // export const setupStore = () =>{
// //     return configureStore({
// //         reducer: rootReducer
// //     })
// // } 
// export const setupStore = (preloadedState?: DeepPartial<RootState>) => {
//     return configureStore({
//         reducer: rootReducer,
//         preloadedState,
//     });
// }
// //const store = setupStore();

// //export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];

// export type AppStore = ReturnType<typeof setupStore>;

// export type AppDispatch = AppStore['dispatch']


// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
        productList: productListSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper(() => store)
