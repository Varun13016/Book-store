import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Button, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useHistory } from 'react-router-dom';

export default function SimplePopper() {

    let history=useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const takeToLogin =() =>{
        history.push("/")
    }

    const takeToCart =() =>{
        history.push("/addcart")
    }

    const takeToWishList =() =>{
        history.push("/wishlist")
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <PermIdentityOutlinedIcon aria-describedby={id} type="button" onClick={handleClick} size='large' id="headerimg"  />
                
            
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ height: '20vh', width: '15vw', border: 1, p: 1, dispaly: 'flex', flexDirection: 'column', bgcolor: 'background.paper', borderRadius: '10px' }}>
                   
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '60%', borderBottom: '2px solid grey' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Welcome</Typography>
                        <Typography sx={{ fontSize: '0.8em' }}>To acess Account And Manage Orders</Typography>
                        <Button variant="outlined" size='small' sx={{  width:'10vw',color: 'red', border: '1px solid red' }}onClick={takeToLogin}>Login/SignUp</Button>
                    </Box>

                    <Box sx={{ display: 'flex',flexDirection:'column',justifyContent: 'space-around',height:'40%'}}>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} onClick={takeToCart}> <AddShoppingCartIcon />MyOrders</Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} onClick={takeToWishList}>< FavoriteBorderIcon />WishList</Typography>
                    </Box>
                </Box>

            </Popper>
        </div>
    );
}