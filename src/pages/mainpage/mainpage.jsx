import React from "react";
import { Box } from "@mui/material";
import './mainpage.css';
import shopimg from './shopimg.png'
import SignIn from "../../components/signin/signin"
import SignUp from "../../components/signup/signup";


function MainPage () {

    const [display,setDisplay]=React.useState(false)

    const signin =() =>{
        setDisplay(true)
    }
    const signup =() =>{
        setDisplay(false)
    }
    


    return(
        
            <Box className="mainbox">
                <Box className="whitebox">
                    <Box className="image">
                        <img src={shopimg} alt="img" id='image'  />
                        <p id="text">ONLINE BOOK SHOPPING</p>
                    </Box>
                    <Box className="render">
                        {display ? <SignIn signup={signup}/> : <SignUp signin={signin}/>}

                    </Box>
                </Box>
            </Box>
        
    )   

}
export default MainPage