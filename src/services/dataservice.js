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


export const counterValues =(cartItem_id,data) =>{
    let response = axios.put (`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItem_id}`,data,headerconfig)
    return response
}

export const deleteCartItem = (cartItem) =>{
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${cartItem}`,headerconfig)
    return response
}

export const wishListItem = (id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,null,headerconfig)
    return response
}

export const getWishList = () => {
    let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items`,headerconfig)
    return response
}

export const removeWishList = (product) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${product}`,headerconfig)
    return response
}