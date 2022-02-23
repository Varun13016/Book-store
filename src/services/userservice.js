import axios from 'axios'

export const Signin =(object) =>{
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",object)
    return response
}
export const Signup = (object) =>{
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",object)
    return response
}