import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import React from 'react'
import { useAppSelector } from "../../../redux/store";
import { currencyFormat } from "../../../utils/cookies";

interface Props{
    subtotal?: number
}
export const BasketSummary = ({subtotal}:Props) => {

    const { basket } = useAppSelector(state => state.basket);
     
    if(subtotal === undefined)
    {
        subtotal = basket?.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) ?? 0;
    }
    
    const deliveryFee = subtotal > 10000 ? 0 : 500;
    const TAX_RATE = 0.13;
    const invoiceTaxes = TAX_RATE * subtotal;

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableBody>
                        <TableRow>
                            <TableCell rowSpan={5} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal)}</TableCell>          </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{currencyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{currencyFormat(subtotal + deliveryFee + invoiceTaxes)}</TableCell>
                        </TableRow>


                        <TableRow>
                        <TableCell colSpan={2}></TableCell>
                            <TableCell align="right">
                                <span style={{ fontStyle: 'italic' }}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
