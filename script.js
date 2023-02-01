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
            let randomColor = getRandomColor();
            event.target.style.backgroundColor = randomColor;
            event.target.style.borderColor = randomColor;
        })
    )
}

function removeEventListeners() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(el => el.replaceWith(el.cloneNode(true)));
}

function getRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min +1));
    const r = randomBetween(0,255);
    const g = randomBetween(0,255);
    const b = randomBetween(0,255);
    return `rgb(${r},${g},${b})`;
}