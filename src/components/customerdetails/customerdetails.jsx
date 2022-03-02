import React from "react";
import { Box } from "@mui/system";
import { InputLabel, TextField, FormControlLabel, RadioGroup,Radio,Button,Paper } from "@mui/material";
import { customerDetails } from "../../services/dataservice";
import '../customerdetails/customerdetails.css';



function CustomerDetails(props) {

    //const [orderDetails, setOrderDetails] = React.useState(false)    
    
    
    const [address,setAddress] =React.useState({addressType:'',fullAddress:'',city:'',state:''})

    const Address=(e)=>{
        setAddress({...address, fullAddress:e.target.value})
    }
    const AddressType=(e)=>{
        console.log(e.target.value)
        setAddress({...address, addressType:e.target.value})
    }
    const Town=(e)=>{
        setAddress({...address, city:e.target.value})
    }
    const State=(e)=>{
        setAddress({...address, state:e.target.value})
    }

    const takeOrder=()=>{
        let obj = {
            "addressType": "Home",
            "fullAddress": "Plot no.13, Bhallar township, nagpur",
            "city": "Mumbai",
            "state": "Maharastra"
          }
        console.log(address)
        props.listenToContinue()
        //setOrderDetails(true)
        customerDetails(obj).then((response)=>{
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <Paper sx={{border:'0.5px solid grey',marginTop:'20px'}}> <Box className="customerdetails">
           <Box className="title">
                <h2>Customer Details</h2>
                <Button variant="outlined">Add New Address</Button>
            </Box>
            <Box className="mui">

            <div className="one">
                    <Box id="threeA">
                        <InputLabel sx={{ display: 'flex', flexDirection: 'row' }}>Full Address</InputLabel>
                        <TextField size='small' sx={{ width: '80%' }}/>
                    </Box>
                    <Box id="threeB">
                        <InputLabel sx={{ display: 'flex', flexDirection: 'row' }}>mobile</InputLabel>
                        <TextField size='small' sx={{ width: '80%' }} />
                    </Box>
                </div>

                <div className="two">
                    <InputLabel sx={{ display: 'flex', flexDirection: 'row' }}>Address</InputLabel>
                    <TextField size='large' fullWidth id="fullWidth" onChange={Address}/>
                </div>

                <div className="three">
                    <Box id="threeA">
                        <InputLabel sx={{ display: 'flex', flexDirection: 'row' }}>City/Town</InputLabel>
                        <TextField size='small' sx={{ width: '80%' }} onChange={Town}/>
                    </Box>
                    <Box id="threeB">
                        <InputLabel sx={{ display: 'flex', flexDirection: 'row' }}>State</InputLabel>
                        <TextField size='small' sx={{ width: '80%' }} onChange={State}/>
                    </Box>
                </div>
                <div className="four">
                    <Box id="fourA">
                        <InputLabel sx={{ display: 'flex', flexDirection: 'row' }}>Type</InputLabel>
                    </Box>
                    <Box id="fourB">
                        <RadioGroup onChange={AddressType}>
                            <FormControlLabel value="Home" control={<Radio />} label="Home" />
                            <FormControlLabel value="Work" control={<Radio />} label="Work" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </Box>
                </div>
            </Box>
            
            <Box className="button">
                <Button variant="contained" sx={{ width: '30%' }} onClick={takeOrder}>Continue</Button>
            </Box>
           


           

        </Box> </Paper>

    )
}
export default CustomerDetails