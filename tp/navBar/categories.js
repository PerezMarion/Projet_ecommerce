import { BASE_URL } from "../constants.js"

const categoriesURL = BASE_URL + "categories/";

const $categoriesList = document.querySelector("#categoriesList");

export function createDropdown() {

    return axios.get(categoriesURL).then(function (response) {
        const categories = response.data;

        if($categoriesList.children.length > 0) {
            $categoriesList.innerHTML = "";
        }  

        for(let category of categories) {

            const $categoryName = document.createElement("li");

            const $categoryLink = document.createElement("a");
            $categoryLink.classList.add("dropdown-item");
            $categoryLink.href = categoriesURL + category.id;   
            $categoryLink.innerText = category.name;   

            $categoryName.appendChild($categoryLink);
            $categoriesList.appendChild($categoryName);
        }          
    })
}