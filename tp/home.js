import { BASE_URL } from "./constants.js";

const productsUrl = BASE_URL + "products/";

// const productUrlById = productsUrl + id;

const $productsList = document.querySelector("#productsList");

axios.get(productsUrl).then(function(response) {
    const products = response.data
    
    for(let product of products) {
        
    }


})