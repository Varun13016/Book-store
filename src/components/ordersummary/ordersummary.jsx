import React from "react";
import '../ordersummary/ordersummary.css';
import { Box, Typography, InputLabel} from "@mui/material";
import card from '../card/card.jpg';

function OrderSummary(props) {   


    return (
        <Box className="ordersummary">
            <Box className="orderboxone">
                <InputLabel sx={{ display: 'flex', flexDirection: 'row', fontSize: '1.5em', color: 'black', fontWeight: 'bold' }} >Order Summary</InputLabel>
            </Box>
            <Box className="orderimg">
                <div id="orderimg">
                    <img src={card} alt="img" id="imagecard" />
                </div>
                <div className="ordertxt">
                    <Typography sx={{ fontWeight: 'bold' }}> {props.product.product_id.bookName}</Typography>
                    <Typography>{props.product.product_id.author}</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>{props.product.product_id.price}</Typography>
                </div>
            </Box>
            
        </Box>
    )
}

export default OrderSummary
