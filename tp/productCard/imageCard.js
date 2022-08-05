export function imageCard(imgUrl) {
    const $image = document.createElement("img");
    $image.classList.add("card-img");
    $image.src = imgUrl;
    return $image;
}