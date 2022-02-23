import { Box, TextField, Typography, Button, Paper, Card, Grid } from "@mui/material";
import React, { useEffect } from "react";
import card from '../addcart/card.jpg'
import Header from "../../header/header";
import '../addcart/addcart.css'
import { gettingBook, orders } from '../../../services/dataservice'
import CustomerDetails from '../../customerdetails/customerdetails'
import OrderSummary from "../../ordersummary/ordersummary";
import { useHistory } from 'react-router-dom';




function AddCart() {

    let history = useHistory()

    const [cartBook, setCartBook] = React.useState([])
    const [customersDetails, setCustomersDetails] = React.useState(true)
    const [orderSuccess, setOrderSuccess] = React.useState([])
    const [placeOrder, setPlaceOrder] = React.useState(false)


    const displayCustomer = () => {
        setCustomersDetails(false)

    }

    const listenToContinue = () => {
        setPlaceOrder(true)
    }

    // const Checkout = () => {

    //     let orderArray = cartBook.map(function (book) {
    //         let obj = {
    //             "product_id": book.product_id._id,
    //             "product_name": book.product_id.bookName,
    //             "product_quantity": book.product_id.quantityToBuy,
    //             "product_price": book.product_id.discountPrice,
    //         }
    //         return obj
    //     })
    //     setOrderSuccess({ ...orderSuccess, orders: orderArray })
    //     orders(orderSuccess).then((response) => {
    //         console.log(response)
    //         history.push("/success")
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // }

    const getBook = () => {
        gettingBook().then((response) => {
            setCartBook(response.data.result)
            console.log(response.data.result, "cartitems")
        })
            .catch((error) => {
                console.log(error)
            })

    }

    React.useEffect(() => {
        getBook()

    }, [])


    return (

        <div>
            <Header />

            <Box className="cartitems">

                <Box className="firstone">
                    <h2 sx={{ marginBottom: '10px' }}>My Cart </h2>
                    <TextField size="small" placeholder="userlocation" sx={{ width: '40%' }} />
                </Box>

                <Paper>

                    {cartBook.map((product) => (

                        <Box className="boxone">
                            <Box className="Secondbox">
                                <Box className="secondone">
                                    <img src={card} alt='img' id="secondone" />
                                </Box>
                                <Box className="secondtwo">
                                    <Typography sx={{ fontWeight: 'bold' }}>{product.product_id.bookName}</Typography>
                                    <Typography>{product.product_id.author}</Typography>
                                    <Typography sx={{ fontWeight: 'bold' }}>Rs.{product.product_id.price}</Typography>
                                    <Typography>counter</Typography>
                                </Box>
                            </Box>
                        </Box>))}

                    {customersDetails ?
                        <Box className="thirdone">

                            <Button variant="contained" onClick={displayCustomer} >Place Order</Button>
                        </Box> : null}
                </Paper>


                {customersDetails ? <Card className="details" >Address Details</Card> :

                    <CustomerDetails listenToContinue={listenToContinue}/>

                    // <CustomerDetails listenToContinue={listenToContinue} />
                }

                {/* {placeOrder ?
                    <Box>
                        <Grid> {cartBook.map((product) => <OrderSummary product={product} />)}</Grid>
                        <Button onClick={Checkout}>Checkout</Button>
                    </Box> : null} */}

                <Card className="details" >OrderSummary</Card>


            </Box>
        </div>

    )
}
export default AddCart