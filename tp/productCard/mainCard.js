import { imageCard } from "./imageCard.js";
import { titleCard } from "./titleCard.js";
import { priceCard } from "./priceCard.js";
import { buttonCard } from "./buttonCard.js";

export function createCard(product) {

    const $productsList = document.querySelector("#productsList");

    const $mainCard = document.createElement("div");
    $mainCard.classList.add("card")

    const image = imageCard(product.imageUrl);

    const title = titleCard(product.name);

    const price = priceCard(product.price);

    const button = buttonCard(product.id);

    $mainCard.append(image, title, price, button);

    $productsList.appendChild($mainCard);
}