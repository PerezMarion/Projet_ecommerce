import { BASE_URL } from "./constants.js";
import { createDropdown } from "./navBar/categories.js";
import { createCard } from "./productCard/mainCard.js";

const productsUrl = BASE_URL + "products/";

axios.get(productsUrl).then(function(response) {
    const products = response.data
    
    for(let product of products) {
        createCard(product);
    }
})

const $dropdownCategories = document.querySelector("#dropdownCategories");

$dropdownCategories.addEventListener("click", function() {
    createDropdown();
})