import React from "react";
import './WishList.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { getWishList, removeWishList } from "../../services/dataservice";
import Header from "../../components/header/header";
import { Box } from "@mui/system";
import {  Typography } from "@mui/material";
import card from './card.jpg'

function MyWishList() {

    const [myWishlist, setMyWishlist] = React.useState([]);
    



    const displayWishlist = () => {
        getWishList().then((response) => {
            setMyWishlist(response.data.result);
            console.log("getWishlist", response.data.result)
            
        }).catch((err) => {
            console.log(err)
        });
    };


    React.useEffect(() => {
        displayWishlist()
    }, []);


    const handleDelete = (cartItemId) => {
        console.log("deleted wishlist")
        removeWishList(cartItemId).then((response) => {
            console.log("deleted data", response.data.result)
           
            displayWishlist()
        })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <Header />

            <Box className="wishbox">

                <Box className="wishone">
                    <Typography sx={{ fontSize: '1.5em', marginLeft: '20px' }}>Wish List </Typography>
                </Box>

                {myWishlist.map((book) => (
                    <Box className="wishimg">
                        <div id="orderimg">
                            <img src={card} alt="img" id="imagecard" />
                        </div>
                        <div className="ordertxt">
                            <Typography sx={{ fontWeight: 'bold' }}>  {book.product_id.bookName}</Typography>
                            <Typography>by {book.product_id.author}</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}> Rs.({book.product_id.price})</Typography>
                        </div>
                        <div className="delete" onClick={() => handleDelete(book.product_id._id)}><DeleteOutlineOutlinedIcon /></div>
                    </Box>))}
            </Box>
        </div>
    )
}
export default MyWishList