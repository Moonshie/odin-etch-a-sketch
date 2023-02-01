function createStartField() {
    let container = document.querySelector(".container");
    container.innerHTML='';
    for (let i=0; i<(16*16); i++) {
        let box = document.createElement("div")
        box.classList.add("square")
        container.appendChild(box);
    }
    addBlackListener();
}

createStartField();

function addBlackListener() {
    removeEventListeners();
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(el => el.addEventListener('mouseover', 
        function handleClick(event) {
            event.target.style.backgroundColor = 'black';
            event.target.style.borderColor = 'black';
        })
    )
}

function addRainbowListener() {
    removeEventListeners()
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(el => el.addEventListener('mouseover',
        function handleClick(event) {
            event.target.style.backgroundColor = 'red';
            event.target.style.borderColor = 'red';
        })
    )
}

function removeEventListeners() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(el => el.replaceWith(el.cloneNode(true)));
}