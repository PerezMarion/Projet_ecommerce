export function buttonCard() {
    const $button = document.createElement("button");
    $button.classList.add("btn", "btn-primary");
    $button.innerText = "Voir";
    return $button;
}