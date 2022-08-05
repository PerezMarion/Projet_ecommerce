import { BASE_URL } from "../constants.js"
import { getProductsList } from "../productService/productsApi.js";

const categoriesURL = BASE_URL + "categories/";

const $categoriesList = document.querySelector("#categoriesList");

export async function createDropdown() {

    axios.get(categoriesURL).then(function (response) {
        const categories = response.data;

        if($categoriesList.children.length > 0) {
            $categoriesList.innerHTML = "";
        }  

        for(let category of categories) {

            const $categoryName = document.createElement("li");

            const $categoryLink = document.createElement("a");
            $categoryLink.classList.add("dropdown-item");
            $categoryLink.innerText = category.name; 

            $categoryName.addEventListener("click", function(event) {
                event.preventDefault();
                getProductsList(BASE_URL + "products?category=" + category.slug)
            }); 

            $categoryName.appendChild($categoryLink);
            $categoriesList.appendChild($categoryName);
        }          
    })
}