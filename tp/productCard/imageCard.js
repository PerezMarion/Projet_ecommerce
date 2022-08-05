export function imageCard(imgUrl) {
    const $image = document.createElement("img");
    $image.classList.add("card-img", "card-img-top");
    $image.src = imgUrl;
    return $image;
}