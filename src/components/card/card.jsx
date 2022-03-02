import { Card, CardActions, Button, Box, Typography, CardContent, Rating, InputBase } from "@mui/material";
import React from "react";
import '../card/card.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addBook, gettingBook, counterValues, wishListItem } from "../../services/dataservice";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';



function CardBox(props) {



    const [cartId, setCartId] = React.useState("")
    const [presentCart, setPresentCart] = React.useState({})
    const [cartItems,setCartItems] = React.useState("")
    const [wishList,setWishList] = React.useState(true)


    const increment = (product) => {
        console.log(product)

        let obj = {
            "quantityToBuy": presentCart.quantityToBuy + 1
        }

        counterValues(presentCart._id, obj).then((response) => {
            console.log(response, "inside book details update");
            getCart()

        })
            .catch((error) => {
                console.error(error);
            });


    }
    const decrement = (product) => {

        console.log(product)

        let obj = {
            "quantityToBuy": presentCart.quantityToBuy - 1
        }
        counterValues(presentCart._id, obj).then((response) => {
            console.log(response, "inside book details update");
            getCart()

        })
            .catch((error) => {
                console.error(error);
            });
    }

    const getCart = () => {
        gettingBook().then((response) => {
            let filterArray = response.data.result.filter(cartbook => presentCart._id === cartbook._id)
            console.log(filterArray[0])
            setPresentCart(filterArray[0])
        }).catch((err) => {
            console.log(err)
        })
    }


    const addToBag = () => {
        //current book is comming from dashboard

        addBook(props.currentBook._id).then((response) => {
            console.log(response, "varunid")
        }).catch((error) => {
            console.log(error)
        })
    }

    const addWishList = () =>{
        
        setWishList(false)
        wishListItem(props.currentBook._id).then((response) => {
            console.log(response,"varunid")

        }).catch((error) => {
            console.log(error)
        })


    }
    const getCartItem = () => {

        gettingBook().then((response) => {

            let filterArray = response.data.result.filter(function (cartBook) {

                if (props.currentBook._id === cartBook.product_id._id) {
                    return cartBook
                }
            })
            setCartItems(filterArray)
            setCartId(filterArray[0])
            setPresentCart(filterArray[0])

        }).catch((error) => {
            console.log(error)
        })


    }

    
    React.useEffect(() => {

        getCartItem()

    }, [cartId])



    return (
        <Box className="cardbox">
            <Card sx={{ width: '30%', height: '60%', display: 'flex', alignItems: 'center', flexDirection: 'column', alignContent: 'space-evenly' }}>
                <Box className="cardimg">
                    <img src={props.currentBook.bookImage} alt='img' id="cardimg" />
                </Box>
                <CardActions sx={{ marginTop: '15px', diplay: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    {cartItems.length === 0 ?
                        <Button variant="contained" style={{ background: '#A03037', width: '50%' }} onClick={addToBag} >Add To Bag</Button>
                        : <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <AddCircleOutlinedIcon onClick={() => increment(props.currentBook)} />
                            <h2>{presentCart.quantityToBuy}</h2>
                            <RemoveCircleOutlineOutlinedIcon onClick={() => decrement(props.currentBook)} />
                        </Box>}
                    {wishList ? <Button variant="contained" id="wish" style={{ background: '#373434', width: '50%' }} onClick={addWishList}><FavoriteIcon />Wishlist</Button>: <FavoriteIcon />}
                </CardActions>
            </Card>

            <Box className="cardtext">
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderBottom: '3px solid #D1D1D1' }} style={{ background: '#FFFFFF' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {props.currentBook.bookName}
                    </Typography>

                    <Typography>
                        {props.currentBook.author}
                    </Typography>

                    <Typography sx={{ display: 'flex', width: '100%' }}>
                        <div sx={{ height: '50%', width: '50%' }} style={{ backgroundColor: '#388E3C' }}>4.5*</div>({props.currentBook.quantity})
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold' }}>
                        Rs.{props.currentBook.price}
                    </Typography>

                </CardContent>

                <CardContent sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderBottom: '3px solid #D1D1D1' }} style={{ background: '#FFFFFF' }}>
                    <Typography> *Book Detail</Typography>
                    <Typography //sx={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                        {props.currentBook.description}
                    </Typography>
                </CardContent>

                <Typography sx={{ display: 'flex', alignItems: 'flex-start', fontWeight: 'bold', height: '3%', padding: '10px' }}> Customer Feedback </Typography>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '20%', borderRadius: '10px' }} style={{ background: '#F5F5F5' }}>
                    <Typography>Overall rating</Typography>
                    <Rating name="value" value={null} />
                    <Box className="reviewbox">
                        <InputBase placeholder='Write Your Review' sx={{ width: '100%' }}></InputBase>
                    </Box>
                    <Box className="buttonbox">
                        <Button variant="contained" size="small">Submit</Button>
                    </Box>
                </CardContent>
            </Box>
        </Box>
    )
}
export default CardBox