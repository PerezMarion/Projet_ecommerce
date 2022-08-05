import { BASE_URL } from "./constants.js";
import { createDropdown } from "./navBar/categories.js";
import { getProductsList } from "./productService/productsApi.js";

const productsUrl = BASE_URL + "products";

getProductsList(productsUrl);

const $dropdownCategories = document.querySelector("#dropdownCategories");

$dropdownCategories.addEventListener("click", function() {
    createDropdown();
})