export function priceCard(price) {
    const $price = document.createElement("p");
    $price.classList.add("card-text");
    $price.innerText = price + " $";
    return $price;
}