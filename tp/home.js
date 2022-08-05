import { BASE_URL } from "./constants.js";
import { createCard } from "./productCard/mainCard.js";

const productsUrl = BASE_URL + "products/";

// const productUrlById = productsUrl + id;

axios.get(productsUrl).then(function(response) {
    const products = response.data
    
    for(let product of products) {
        createCard(product);
    }
})