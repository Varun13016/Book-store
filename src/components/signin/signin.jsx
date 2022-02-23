import React from "react";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from "@mui/material";
import { Signin } from "../../services/userservice";
import { useHistory } from "react-router-dom";



const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn(props) {

    

    const [regexObj, setRegexObj] = React.useState({ errorEmail: false, emailHelper: "", errorPassword: false, passwordhelper: "" })

    const [signinObj, setSigninObj] = React.useState({ email: "", password: "" })

    const takeEmail = (event) => {
        setSigninObj({ ...signinObj, email: event.target.value })
    }
    const takePassword = (event) => {
        setSigninObj({ ...signinObj, password: event.target.value })
    }

    const signUpPage = () =>{
        props.signup()
    }
    
 
    const submit = () => {
        let emailTest, pwdTest
        if (signinObj.email === "" && signinObj.password === "") {
            setRegexObj(prevState => ({
                ...prevState, errorEmail: true, emailHelper: "enter correct email",
                passwordhelper: "enter correct", errorPassword: true
            }))
        } else {
            emailTest = emailRegex.test(signinObj.email)
            pwdTest = passwordRegex.test(signinObj.password)
            console.log(emailTest)
            if (emailTest === false) {

                setRegexObj(prevState => ({ ...prevState, errorEmail: true, emailHelper: "enter correct email" }))
            }
            else {
                setRegexObj(prevState => ({ ...prevState, errorEmail: false, emailHelper: "" }))

            }
            console.log(pwdTest)
            if (pwdTest === false) {
                setRegexObj(prevState => ({ ...prevState, errorPassword: true, passwordhelper: "enter correct password" }))

            }
            else {
                setRegexObj(prevState => ({ ...prevState, errorPassword: false, passwordhelper: "" }))

            }
        }
        if (emailTest === true && pwdTest === true) {

            Signin(signinObj).then((response) => {
                localStorage.setItem("Token", response.data.result.accessToken)
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    return (
        <div>
            <Box
                sx={{
                    width: '25vw',
                    height: '60vh',
                    //border: '1px solid black',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    
                    position: 'relative',
                    
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'space-around'
                }}>
                <Box sx={{
                    width: '100%', height: '14%', marginTop: '10px',
                    display: 'flex', flexDirection: 'row',justifyContent:'space-around'
                }}><Button size="large" sx={{fontSize:'1.2em',color:'#0A0102'}}>LOGIN</Button>
                <Button size="large" onClick={signUpPage} sx={{color:'#878787',fontSize:'1.2em'}}>SIGNUP</Button></Box>

                <Box
                    sx={{ Width: '80%', height: '20%' }}
                >
                    <InputLabel sx={{ display: 'flex', flexDirection: 'row', marginLeft: '35px' }}>Email id</InputLabel>
                    <TextField size='small' sx={{ width: '80%' }} onChange={takeEmail} error={regexObj.errorEmail} helperText={regexObj.emailHelper} fullWidth id="fullWidth" />
                </Box>


                <Box
                    sx={{ Width: '80%', height: '20%' }}
                >
                    <InputLabel sx={{ display: 'flex', flexDirection: 'row', marginLeft: '35px' }}>Password</InputLabel>
                    <TextField size='small' sx={{ width: '80%' }} onChange={takePassword} helperText={regexObj.passwordhelper} error={regexObj.errorPassword} fullWidth id="fullWidth" />
                </Box>


                <Box sx={{ Width: '100%' }}>
                    <Button style={{ background: '#A03037' }} sx={{ width: '50%' }} variant="contained" onClick={submit}>Login</Button>
                </Box>


                <Box>------------OR-----------</Box>


                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
                    <Button variant="contained">Facebook</Button>
                    <Button variant="outlined" size="medium">Google</Button>
                </Box>
            </Box>
        </div>
    )
}
export default SignIn