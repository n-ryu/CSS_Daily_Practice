const d4 = {
    name: "d4",
    n: 4,
    width: 1,
    shape: "polygon(50% 6.7%, 100% 93.3%, 0% 93.3%)",
    origin: "50% 64.4% calc(-0.204*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-109.472deg) rotateZ(180deg)",
        "rotateZ(120deg) rotateX(-109.472deg) rotateZ(180deg)",
        "rotateZ(240deg) rotateX(-109.472deg) rotateZ(180deg)",
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(109.472deg)",
        "rotateZ(180deg) rotateX(109.472deg) rotateZ(-120deg)",
        "rotateZ(180deg) rotateX(109.472deg) rotateZ(-240deg)",
    ]
}

const d6 = {
    name: "d6",
    n: 6,
    width: 1,
    shape: "",
    origin: "50% 50% calc(-0.5*var(--dice-size))",
    rotation: [
        "",
        "rotateY(90deg)",
        "rotateX(90deg)",
        "rotateX(-90deg)",
        "rotateY(-90deg)",
        "rotateX(180deg)"
    ],
    reverseRotation: [
        "",
        "rotateY(-90deg)",
        "rotateX(-90deg)",
        "rotateX(90deg)",
        "rotateY(90deg)",
        "rotateX(180deg)"
    ]
}

const d8 = {
    name: "d8",
    n: 8,
    width: 0.866,
    shape: "polygon(50% 0, 100% 75%, 0% 75%)",
    origin: "50% 50% calc(-0.345*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-70.528deg) rotateZ(180deg)",
        "rotateZ(120deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateZ(240deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateX(180deg)",
        "rotateX(180deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(120deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(240deg) rotateX(-70.528deg) rotateZ(180deg)"
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(70.528deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-120deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-240deg)",
        "rotateX(180deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-120deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-240deg) rotateX(180deg)"
    ]
}

const d12 = {
    name: "d12",
    n: 12,
    width: 0.95,
    shape: "polygon(19.1% 40.4%, 50% 19.1%, 80.9% 40.4%, 69.1% 75.0%, 30.9% 75.0%)",
    origin: "50% 50% calc(-0.395*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(72deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(144deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(216deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(-72deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg)",
        "rotateX(180deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(72deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(144deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(216deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(-72deg) rotateX(-63.5deg) rotateZ(180deg)",
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(63.5deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-72deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(144deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(216deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-72deg)",
        "rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-72deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(144deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(216deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-72deg) rotateX(180deg)",

    ]
}

const d20 = {
    name: "d20",
    n: 20,
    width: 0.866,
    shape: "polygon(50% 19.1%, 80.9% 65.5%, 19.1% 65.5%)",
    origin: "50% 50% calc(-0.4*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-41.8deg) rotateZ(180deg)",
        "rotateZ(120deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateZ(240deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotate3d(0,-0.305,0.4,144deg)",
        "rotate3d(0,-0.305,0.4,-144deg)",
        "rotateZ(120deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateZ(120deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateZ(240deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateZ(240deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateX(180deg)",
        "rotateX(180deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(120deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(240deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateX(180deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateX(180deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateX(180deg) rotateZ(120deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateX(180deg) rotateZ(120deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateX(180deg) rotateZ(240deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateX(180deg) rotateZ(240deg) rotate3d(0,-0.305,0.4,-144deg)",
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(41.8deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-120deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-240deg)",
        "rotate3d(0,-0.305,0.4,-144deg)",
        "rotate3d(0,-0.305,0.4,144deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-120deg) ",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-120deg) ",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-240deg) ",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-240deg) ",
        "rotateX(180deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-120deg)rotateX(180deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-240deg)rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,144deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-120deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-120deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-240deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-240deg) rotateX(180deg)",
    ],
    colorFrom: {
        r: 255, g: 194, b: 194
    },
    colorTo: {
        r: 201, g: 50, b: 50
    }
}

function colorPicker(colorFrom, colorTo, rate) {
    const r = colorFrom.r * rate + colorTo.r * (1 - rate);
    const g = colorFrom.g * rate + colorTo.g * (1 - rate);
    const b = colorFrom.b * rate + colorTo.b * (1 - rate);

    return `rgb(${r}, ${g}, ${b})`
}

const diceTable = document.querySelector(".table");

function createDice(diceObject) {
    const newDiceWrapper = document.createElement("div");
    newDiceWrapper.classList.add("dice-wrapper");
    diceTable.appendChild(newDiceWrapper);

    const newDice = document.createElement("div");
    newDice.classList.add("dice");
    newDice.style.width = `calc(${diceObject.width}*var(--dice-size))`;
    newDice.style.transformOrigin = diceObject.origin;
    newDiceWrapper.appendChild(newDice);

    for (i = 0; i < diceObject.n; i++) {
        const newFace = document.createElement("div");
        newFace.classList.add("face");
        newFace.classList.add(diceObject.name);
        newFace.style.clipPath = diceObject.shape;
        newFace.style.transformOrigin = diceObject.origin;
        newFace.style.transform = diceObject.rotation[i];
        newFace.innerText = `${i + 1}`;
        newDice.appendChild(newFace);
    }

    const result = parseInt(diceObject.n * Math.random()) + 1;
    newDice.style.setProperty("--result", result);
    newDice.style.transform = diceObject.reverseRotation[result - 1];
}

function createD6() { createDice(d6); }
function createD4() { createDice(d4); }
function createD8() { createDice(d8); }
function createD12() { createDice(d12); }
function createD20() { createDice(d20); }


createD4();
createD6();
createD8();
createD12();
createD20();
