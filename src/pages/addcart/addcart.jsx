import { Box, TextField, Typography, Button, Paper, Card, Grid } from "@mui/material";
import React from "react";
import card from '../addcart/card.jpg'
import Header from "../../components/header/header";
import '../addcart/addcart.css'
import { gettingBook, orders, counterValues,deleteCartItem } from "../../services/dataservice"
import CustomerDetails from "../../components/customerdetails/customerdetails"
import OrderSummary from "../../components/ordersummary/ordersummary";
import { useHistory } from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';



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

    const RemoveCart =(cartItem)=>{
        
        deleteCartItem(cartItem._id).then((result) => {
            getBook()
            console.log(result, "success")

        }).catch((err) => {
            console.log(err, "failed")
        })
    }

    const incrementValue = (product) => {
        console.log("increment", product)
        let data = {
            "quantityToBuy": product.quantityToBuy + 1
        }
        counterValues(product._id, data).then((result) => {
            getBook()
            console.log(result, "success")

        }).catch((err) => {
            console.log(err, "failed")
        })
    }



    const decrementValue = (product) => {
        let data = {
            "quantityToBuy": product.quantityToBuy - 1
        }
        counterValues(product._id, data).then((result) => {
            getBook()
            console.log(result, "success")

        }).catch((err) => {
            console.log(err, "failed")
        })
    }

    const Checkout = () => {

        let orderArray = cartBook.map(function (book) {
            let obj = {
                "product_id": book.product_id._id,
                "product_name": book.product_id.bookName,
                "product_quantity": book.product_id.quantityToBuy,
                "product_price": book.product_id.discountPrice,
            }
            return obj
        })
        setOrderSuccess({ ...orderSuccess, orders: orderArray })
        orders(orderSuccess).then((response) => {
            console.log(response)
            history.push("/success")
        }).catch((error) => {
            console.log(error)
        })

    }

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
                <Paper>
                    <Box className="firstone">
                        <h2 sx={{ marginBottom: '10px' }}>My Cart </h2>
                        <TextField size="small" placeholder="userlocation" sx={{ width: '40%' }} />
                    </Box>
                </Paper>

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
                                    <Box className="counter">
                                        <RemoveCircleOutlineOutlinedIcon onClick={() => decrementValue(product)} />
                                        <Box sx={{ width: '25px', height: '20px', border: '1px solid black' }}>{product.quantityToBuy}</Box>
                                        <AddCircleOutlineOutlinedIcon onClick={() => incrementValue(product)} />
                                        <Button sx={{ color: 'black' }} onClick={()=>RemoveCart(product)}>Remove</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>))}

                    {customersDetails ?
                        <Box className="thirdone">

                            <Button variant="contained" onClick={displayCustomer} >Place Order</Button>
                        </Box> : null}
                </Paper>


                {customersDetails ? <Card className="details" >Address Details</Card> :

                    <CustomerDetails listenToContinue={listenToContinue} />

                    // <CustomerDetails listenToContinue={listenToContinue} />
                }

                {placeOrder ?
                    <Box>
                        <Grid> {cartBook.map((product) => <OrderSummary product={product} />)}</Grid>
                        <Button variant="contained" onClick={Checkout} sx={{ marginLeft: '50%' }}>Checkout</Button>
                    </Box> : <Card className="details" >OrderSummary</Card>
                }

            </Box>
        </div>

    )
}
export default AddCart