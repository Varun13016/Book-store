import axios from "axios";

const headerconfig={

    headers:{

        "x-access-token":localStorage.getItem("Token")        
    }
}

export const fetchBook = () =>{
    let result = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerconfig)
    return result
}

export const addBook = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,null,headerconfig)
    return response
} 


export const gettingBook = () => {
    let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`,headerconfig)
    return response
}


export const customerDetails =(data) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,data,headerconfig)
    return response
}


export const orders =(data) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order",data,headerconfig)
    return response
}



