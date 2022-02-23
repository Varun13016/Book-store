import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import card from '../getbook/card.jpg'
import '../getbook/getbook.css'
import StarIcon from '@mui/icons-material/Star';
import StarRoundedIcon from '@mui/icons-material/StarRounded';


function GetBook(props) {


    //mapping books is coming from dashbord and passing it as props
    const mapbook = (obj) => {
        props.MappingBooks(obj)
    }

    return (


        <Card onClick={() => mapbook(props.book)} sx={{ width: '70%', height: '90%', display: 'flex', alignItems: 'center', flexDirection: 'column', alignContent: 'space-evenly' }}>
            <Box className="bookimg">
                <img src={card} alt='img' id='bookget' />
            </Box>


            <CardContent sx={{ width: '80%', height: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', marginTop: '5px', alignContent: 'space-around' }}>


                <Typography sx={{ fontWeight: 'bold' }}>{props.book.bookName}</Typography>



                <Typography variant="body2" color="text.secondary">
                    {props.book.author}
                </Typography>
                <Box sx={{ display: 'flex',width:'100%',alignItems:'center' }} >
                    <div id='star'>4.5<StarRoundedIcon sx={{color:'whitesmoke'}} /></div>
                    ({props.book.quantity})
                </Box>
                <Typography sx={{ fontWeight: 'bold' }}>
                    Rs.{props.book.price}
                </Typography>
            </CardContent>
        </Card>

    )
}
export default GetBook

