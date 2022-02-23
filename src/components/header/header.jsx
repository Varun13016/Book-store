import { Box } from "@mui/material";
import React from "react";
import '../header/header.css';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton,InputAdornment} from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import images from '../header/images.png'

import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
function Header() {
    return (
        <Box className="headerbox">
            <Box className="firstbox">
                <img src={images} alt='img' id='bookimg'/>
                <p id="store">Bookstore</p>
            </Box>
            <Box className="secondbox">
                <TextField
                    
                    placeholder='search'
                    style={{width:'80%',height:'80%',backgroundColor:'whitesmoke'}}
                    size="medium"                    
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                    } />
            </Box>
            <Box className="thirdbox">
                <Box className="thirdboxone">
                    <PermIdentityOutlinedIcon size='large' id="headerimg"/>
                    <ShoppingCartOutlinedIcon id="headerimg"/>
                </Box>
                <Box className="thirdboxtwo">                   
                    <div id="textthree">Profile</div>
                    <div id="textthree">Cart</div>
                </Box>

            </Box>
        </Box>
    )
}
export default Header