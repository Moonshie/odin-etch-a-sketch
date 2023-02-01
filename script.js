function createStartField() {
    let container = document.querySelector(".container");
    for (let i=0; i<(16*16); i++) {
        let box = document.createElement("div")
        box.classList.add("square")
        container.appendChild(box);
    }
}

createStartField();