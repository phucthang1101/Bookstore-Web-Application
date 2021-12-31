import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import AppTextInput from "../../common/inputs/AppTextInput";
import { Product } from "../../models/product";
import useProducts from '../../hooks/useProducts';
import AppSelectList from '../../common/inputs/AppSelectList';
import AppDropzone from "../../common/inputs/AppDropZone";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./productValidation";
import agent from "../../../utils/agent";
import { useAppDispatch } from "../../../redux/store";
import { LoadingButton } from "@mui/lab";
import { setProduct } from "../../../redux/slices/ProductListSlice";

interface Props {
    product?: Product;
    cancelEdit: () => void;
}
export default function ProductForm({ product, cancelEdit }: Props) {
    // isDirty: is form filled or not? true: is filled, false: not fill
    const { control, reset, handleSubmit, watch, formState: { isDirty, isSubmitting } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const { brands, types } = useProducts();
    const watchFile = watch('file', null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (product && !watchFile && !isDirty) reset(product)
        return () => {
            // when this component is unmounted the URL will be remove, as well as the preview img
            if (watchFile) URL.revokeObjectURL(watchFile.preview);
        }
    }, [product, reset, watchFile, isDirty]);

    const handleSubmitData = async (data: FieldValues) => {
        try {
            let response: Product;
            // if we have existingProduct we will use updateProduct
            if (product) {
                response = await agent.Admin.updateProduct(data);
            } else {
                // else means we dont have existingProduct, so we will create new one
                response = await agent.Admin.createProduct(data);
            }

            dispatch(setProduct(response));
            cancelEdit();
            
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Box component={Paper} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                Product Details
            </Typography>
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <AppTextInput control={control} name='name' label='Product name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppSelectList items={brands} control={control} name='brand' label='Brand' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppSelectList items={types} control={control} name='type' label='Type' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppTextInput type='number' control={control} name='price' label='Price' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppTextInput
                            control={control}
                            type='number'
                            name='quantityInStock'
                            label='Quantity in Stock'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <AppTextInput
                            multiline={true}
                            rows={4}
                            control={control}
                            name='description'
                            label='Description'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            display='flex' justifyContent='space-between'
                            alignItems='center'
                        >
                            <AppDropzone
                                control={control}
                                name='file'
                            />
                            {watchFile ? (
                                <img src={watchFile.preview} alt="preview" style={{ maxHeight: 200 }} />
                            ) : (
                                <img src={product?.pictureUrl} alt={product?.name} style={{ maxHeight: 200 }} />
                            )}
                        </Box>

                    </Grid>
                </Grid>

                <Box display='flex' justifyContent='space-between' sx={{ mt: 3 }}>
                    <Button
                        onClick={cancelEdit}
                        variant='contained' color='inherit'
                    >
                        Cancel
                    </Button>
                    <LoadingButton
                        loading={isSubmitting}
                        type='submit'
                        variant='contained'
                        color='success'
                    >
                        Submit
                    </LoadingButton>
                </Box>

            </form>
        </Box>
    )
}