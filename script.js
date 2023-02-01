function createStartField() {
    let container = document.querySelector(".container");
    container.innerHTML='';
    for (let i=0; i<(16*16); i++) {
        let box = document.createElement("div");
        box.classList.add("square");
        container.appendChild(box);
    }
    addBlackListener();
}

createStartField();

function resetStartField() {
    let newSize = prompt(`Enter desired side length (no more than 100)`);
    if (newSize.isInteger = true && newSize > 0 && newSize < 101) {
        let container = document.querySelector(".container");
        container.innerHTML='';
        for (let i=0; i<(newSize*newSize); i++) {
            let box = document.createElement("div");
            box.classList.add("square");
            box.style.width = `${640 / newSize}px`;
            box.style.height = `${640 / newSize}px`;
            container.appendChild(box);
        }
        addBlackListener();
    } else alert(`Invalid value! Try again`);
}

function addBlackListener() {
    removeEventListeners();
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(el => el.addEventListener('mouseover', 
        function handleClick(event) {
            event.target.style.backgroundColor = 'rgb(0, 0, 0)';
            event.target.style.borderColor = 'rgb(0, 0, 0)';
            event.target.replaceWith(el.cloneNode(true));
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
            event.target.replaceWith(el.cloneNode(true));
        })
    )
}

function addAquaListener() {
    removeEventListeners()
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(el => el.addEventListener('mouseover',
        function handleClick(event) {
            currentColor = event.target.style.backgroundColor;
            if (currentColor === ('rgb(0, 0, 0)')) {
                event.target.replaceWith(el.cloneNode(true));
            } else if (currentColor.includes('rgba')) {
                let newColor = ampOpacity(currentColor);
                event.target.style.backgroundColor = `rgba(0, 0, 0, ${newColor})`;
                event.target.style.borderColor = `rgba(0, 0, 0, ${newColor})`;
            } else {
                event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                event.target.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }
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

function ampOpacity(color) {
    let opacity = color.substr(16, 1);
    let opacityInt = parseInt(opacity);
    if (opacityInt === 9) {
        return `1.0`;
    } else {
        opacityInt = opacityInt + 1;
        return `0.${opacityInt}`;
    }
}