import { createCard } from "../productCard/mainCard.js";

export function getProductsList(url) {

    const $productsList = document.querySelector("#productsList");

    if($productsList.children.length > 0) {
        $productsList.innerHTML = "";
    }

    axios.get(url).then(function(response) {
        const products = response.data
        console.log(response.data);

        for(let product of products) {
            
            createCard(product);
        }
    })
}