import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from '@mui/material';
import '../signup/signup.css'
import React from 'react';
import{ Signup }from '../../services/userservice'

const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const numberRegex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
const fullnameRegex = /[A-Z]{1}[a-z]{2,}/;



function SignUp(props) {

    const [regex, setRegex] = React.useState({
        passworderror: false, passwordhelper: "",
        emailerror: false, emailhelper: "",
        numbererror: false, numberhelper: "",
        fullnameerror: false, fullnamehelper: ""
    })
    const [signupObj, setSignupObj] = React.useState({ fullName: "", phone: "", email: "", password: "" })

    const takefullname = (e) => {
        setSignupObj({ ...signupObj, fullName: e.target.value })
    }
    const takephone = (e) => {
        setSignupObj({ ...signupObj, phone: e.target.value })
    }
    const takeemail = (e) => {
        setSignupObj({ ...signupObj, email: e.target.value })
    }
    const takepassword = (e) => {
        setSignupObj({ ...signupObj, password: e.target.value })
    }
    const signInPage = () => {
        props.signin()
    }

    const submit = () => {
        let emailtest, passwordtest, fullnametest, phonetest
        if (signupObj.email === "" && signupObj.password === "" &&
            signupObj.fullName === "" && signupObj.phone === "") {
            setRegex(prevState => ({
                ...prevState, emailerror: true, emailhelper: "enter coorect email",
                passwordhelper: "enter correct password", passworderror: true,
                fullnameerror: true, fullnamehelper: "enter correct format",
                phoneerror: true, phonehelper: "enter vallid format"
            }))
        }
        else {
            emailtest = emailRegex.test(signupObj.email)
            passwordtest = passwordRegex.test(signupObj.password)
            fullnametest = fullnameRegex.test(signupObj.fullName)
            phonetest = numberRegex.test(signupObj.phone)
            console.log(emailtest)
            if (emailtest === false) {
                setRegex(prevState => ({ ...prevState, emailerror: true, emailhelper: "enter correct email" }))
            }
            else {
                setRegex(prevState => ({ ...prevState, emailerror: false, emailhelper: "" }))
            }
            console.log(passwordtest)
            if (passwordtest === false) {
                setRegex(prevState => ({ ...prevState, passworderror: true, passwordhelper: "enter correct format passsword" }))
            }
            else {
                setRegex(prevState => ({ ...prevState, passworderror: false, passwordhelper: "" }))
            }
            console.log(fullnametest)
            if (fullnametest === false) {
                setRegex(prevState => ({ ...prevState, fullnameerror: true, fullnamehelper: "enter correct format" }))
            }
            else {
                setRegex(prevState => ({ ...prevState, fullnameerror: false, fullnamehelper: "" }))
            }
            console.log(phonetest)
            if (phonetest === false) {
                setRegex(prevState => ({ ...prevState, phoneerror: true, phonehelper: "enter correct format" }))
            }
            else {
                setRegex(prevState => ({ ...prevState, phoneerror: false, phnonehelper: "" }))
            }
            if (emailtest === true && passwordtest === true && fullnametest === true && phonetest === true) {
                Signup(signupObj).then((response) => {
                    console.log(response)
                })
                    .catch((err) => {
                        console.log(err)
                    })
            }
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
                    alignItems: 'space-around'
                }}>
                <Box sx={{
                    width: '100%', height: '12%', display: 'flex', justifyContent: 'space-around',
                    display: 'flex', flexDirection: 'row', color: '#878787'
                }}>
                    <Button size="large" sx={{ color: '#878787', fontSize: '1.2em' }} onClick={signInPage}>LOGIN</Button>
                    <Button size="large" sx={{ fontSize: '1.2em', color: '#0A0102' }}>SIGNUP</Button>
                </Box>



                <Box
                    sx={{ Width: '80%', height: '18%' }}
                >
                    <InputLabel sx={{ display: 'flex', flexDirection: 'row', marginLeft: '35px' }}>Full Name</InputLabel>
                    <TextField size='small' sx={{ width: '80%' }} onChange={takefullname} error={regex.fullnameerror} helperText={regex.fullnamehelper} fullWidth id="fullWidth" />
                </Box>


                <Box
                    sx={{ Width: '80%', height: '18%' }}
                >
                    <InputLabel sx={{ display: 'flex', flexDirection: 'row', marginLeft: '35px' }}>Email id</InputLabel>
                    <TextField size='small' sx={{ width: '80%' }} onChange={takeemail} error={regex.emailerror} helperText={regex.emailhelper} fullWidth id="fullWidth" />
                </Box>


                <Box
                    sx={{ Width: '80%', height: '18%' }}
                >
                    <InputLabel sx={{ display: 'flex', flexDirection: 'row', marginLeft: '35px' }}>Password</InputLabel>
                    <TextField size='small' sx={{ width: '80%' }} onChange={takepassword} error={regex.passworderror} helperText={regex.passwordhelper} fullWidth id="fullWidth" />
                </Box>


                <Box
                    sx={{ Width: '80%', height: '18%' }}
                >
                    <InputLabel sx={{ display: 'flex', flexDirection: 'row', marginLeft: '35px' }}>Mobile Number</InputLabel>
                    <TextField size='small' sx={{ width: '80%' }} onChange={takephone} error={regex.phoneerror} helperText={regex.phonehelper} fullWidth id="fullWidth" />
                </Box>

                <Box sx={{ Width: '100%', marginTop: '5px' }}>
                    <Button style={{ background: '#A03037' }} sx={{ width: '60%' }} onClick={submit} variant="contained">Sign up</Button>
                </Box>

            </Box>

        </div>
    )
}
export default SignUp