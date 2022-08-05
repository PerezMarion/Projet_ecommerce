import { BASE_URL } from "../constants.js";

export function buttonCard(id) {
    const $button = document.createElement("button");
    $button.classList.add("btn", "btn-primary");
    $button.innerText = "Voir";

    $button.addEventListener("click", function(event) {
        event.preventDefault();

        axios.get(BASE_URL + "products/" + id).then(function(response) {
            
        })
    })

    return $button;
}