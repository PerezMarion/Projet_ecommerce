export function titleCard(title) {
    const $title = document.createElement("h6");
    $title.classList.add("card-title");
    $title.innerText = title;
    return $title;
}