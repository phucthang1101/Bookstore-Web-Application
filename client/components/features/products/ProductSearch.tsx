import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setProductParams } from "./ProductListSlice";

export default function ProductSearch() {
    const {productParams} = useAppSelector(state => state.productList);

    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
    const dispatch = useAppDispatch();

    // we use this function so that after user typing on the search bar, it will wait a liitle bit and then send the request, it will not send immediately.
    const debouncedSearch = debounce((event: any) => {
        dispatch(setProductParams({searchTerm: event.target.value}))
    }, 1000)

    return (
        <TextField
            label='Search products'
            variant='outlined'
            fullWidth
            value={searchTerm || ''}
            onChange={(event: any) => {
                setSearchTerm(event.target.value);
                debouncedSearch(event);
            }}
        />
    )
} 